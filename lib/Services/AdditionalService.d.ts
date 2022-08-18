import { MiscPingResponse, OperationStatusDoGetResponse } from '../Models/OperationResponse';
export declare class AdditionalService {
    private deviceId;
    private networkService;
    private miscPingPath;
    private operationStatusDoGetPath;
    private unprotectedMiscPingPath;
    constructor(deviceId: string, accessToken: string);
    miscPing(): Promise<MiscPingResponse>;
    operationStatusDoGet(operationID: string): Promise<OperationStatusDoGetResponse>;
    unprotectedMiscPing(): Promise<MiscPingResponse>;
}
