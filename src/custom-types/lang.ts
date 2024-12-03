export type ButtonsLang = {
    // типы точно такие же, как локализация в файле public/locales/ru/buttons/translation.json,
    // если нужно еще текст для кнопки, вначале добавить в файлы локалицазии, потом в тип
    yes:string;
    no:string;
    start:string;
    play:string;
    next:string;
    finish:string;
    restart:string;
    tryAgain:string;
    toChallenge:string;
    finishGame:string;
    newGame:string;
    back:string;
    check:string;
    choosingGame:string;
    settings:string;
    homework:string;
    reloadPage:string;
    exit:string;
    toTheMain:string;
    stayInGame:string;
};

export type GamesPageLocalization = {
    gameNamesL:{
        [key:string]:string;
    };
    subjectNamesL:{
        [key:string]:string;
    };
    buttonsL:ButtonsLang;
};

export type HomeworkLang = {
    subjectNamesL:{
        [key:string]:string;
    };
    homeworkL:{
        stage:string;
        homework:string;
        completedRounds:string;
        commentToTask:string;
        roundFinish:{
            pushButton:string;
            allowNewRound:string;
            forUnblockRound:string;
            roundFinished:string;
            newRoundTomorrow:string;
        };
    };
    buttonsL:ButtonsLang;
    settingsL:{
        controls:{
            [key:string]:string;
        };
        values:{
            [key:string]:string;
        };
    } & { [key:string]:string; };
};

export type GameSettingsLang = {
    settings:string;
    start:string;
    info:string;
    targets:string;
    seconds:string;
    min:string;
    controls:{
        [key:string]:string;
    };
    values:{
        [key:string]:string;
    };
};

export type GameModalsLang = {
    gameStart:{
        youCanDo:string;
        noErrors:string;
        completeTaskFor:string;
        min:string;
        sec:string;
        give:string;
        rightAnswers:string;
        collectItems:string;
        textErrors:Array<string>;
        textAnswers:Array<string>;
        textRight:Array<string>;
        items:Array<string>
    };
    gameFinish:{
        successTrue:string;
        successFalse:string;
        saving:string;
        failSave:string;
        successSave:string;
        min:string;
        sec:string;
        indicators:{
            right_answers_qty:string;
            gameTime:string;
        };
    };
    settingsL:GameSettingsLang;
};

export type Lang = {
    [key:string]:string | Lang;
};