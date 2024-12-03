(function() {
    let $momentum:{ currentId:any; idToCallback:any; worker:any; };

    function createWorker() {
        const containerFunction = function() {
            const idMap = {};

            self.onmessage = function(e) {
                if (e.data.type === 'setInterval') {
                    // @ts-ignore
                    idMap[e.data.id] = setInterval(function() {
                        self.postMessage({
                            type: 'fire',
                            id: e.data.id
                        });
                    }, e.data.delay);
                } else if (e.data.type === 'clearInterval') {
                    // @ts-ignore
                    clearInterval(idMap[e.data.id]);
                    // @ts-ignore
                    delete idMap[e.data.id];
                } else if (e.data.type === 'setTimeout') {
                    // @ts-ignore
                    idMap[e.data.id] = setTimeout(function() {
                        self.postMessage({
                            type: 'fire',
                            id: e.data.id
                        });
                        // remove reference to this timeout after is finished
                        // @ts-ignore
                        delete idMap[e.data.id];
                    }, e.data.delay);
                } else if (e.data.type === 'clearCallback') {
                    // @ts-ignore
                    clearTimeout(idMap[e.data.id]);
                    // @ts-ignore
                    delete idMap[e.data.id];
                }
            };
        };

        return new Worker(URL.createObjectURL(new Blob([
            '(',
            containerFunction.toString(),
            ')();'
        ], {type: 'application/javascript'})));
    }

    // eslint-disable-next-line prefer-const
    $momentum = {
        worker: createWorker(),
        idToCallback: {},
        currentId: 0
    };

    function generateId() {
        return $momentum.currentId++;
    }

    function patchedSetInterval(callback:any, delay:any) {
        const intervalId = generateId();

        $momentum.idToCallback[intervalId] = callback;
        $momentum.worker.postMessage({
            type: 'setInterval',
            delay: delay,
            id: intervalId
        });
        
        return intervalId;
    }

    function patchedClearInterval(intervalId:string | number) {
        $momentum.worker.postMessage({
            type: 'clearInterval',
            id: intervalId
        });

        delete $momentum.idToCallback[intervalId];
    }

    function patchedSetTimeout(callback:() => void, delay:any) {
        const intervalId = generateId();

        $momentum.idToCallback[intervalId] = function() {
            callback();
            delete $momentum.idToCallback[intervalId];
        };

        $momentum.worker.postMessage({
            type: 'setTimeout',
            delay: delay,
            id: intervalId
        });
        
        return intervalId;
    }

    function patchedClearTimeout(intervalId:string | number) {
        $momentum.worker.postMessage({
            type: 'clearInterval',
            id: intervalId
        });

        delete $momentum.idToCallback[intervalId];
    }

    $momentum.worker.onmessage = function(e:{ data:{ type:string; id:string | number; }; }) {
        if (e.data.type === 'fire') {
            if (typeof $momentum.idToCallback[e.data.id] === 'function') {
                // $momentum.idToCallback[e.data.id]();

                try {
                    $momentum.idToCallback[e.data.id]();
                } catch (e) {
                    console.log(e);
                }
            }
        }
    };

    // @ts-ignore
    window.$momentum = $momentum;
    // @ts-ignore
    window.setInterval = patchedSetInterval;
    // @ts-ignore
    window.clearInterval = patchedClearInterval;
    // @ts-ignore
    window.setTimeout = patchedSetTimeout;
    // @ts-ignore
    window.clearTimeout = patchedClearTimeout;
})();