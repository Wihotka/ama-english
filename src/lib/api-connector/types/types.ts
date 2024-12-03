export type RequestBody = {
    method:'get'|'post';
    url:string;
    params:any;
    withCredentials:boolean;
    headers?:any;
};

export type FeedbackFormData = {
    name:string;
    mark:number;
    badReasons:string[];
    comment:string;
};