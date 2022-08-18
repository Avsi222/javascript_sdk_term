export declare enum HTTPMethod {
    get = "GET",
    post = "POST"
}
export declare type NetworkAuthRequest = {
    method: HTTPMethod;
    body: any;
    path: string;
};
export declare type NetworkApiRequest = {
    method: HTTPMethod;
    body: ResponseBody;
    path: string;
};
export declare class ResponseBody {
    data: {
        [key: string]: any;
    };
    deviceId: string;
    constructor(data: any, deviceId: string);
    getBody(): {
        [key: string]: any;
    };
}
