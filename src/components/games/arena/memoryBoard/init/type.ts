// readonly всегда
export type MemoryBoardGD = {
    readonly words:Array<any>;
};

export type MemoryBoardGPD = {
    cards:any[];
    isAllFlipCard:boolean;
    secondsNowGame:number;
    selectedCard:{
        first:any | null;
        second:any | null;
    }
};