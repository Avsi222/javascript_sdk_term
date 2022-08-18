import { OperationResponse } from '../Models/OperationResponse';
import * as AdminTerminalRequests from '../Models/AdminTerminalRequests';
import * as AdminTerminalResponses from '../Models/AdminTerminalResponses';
export declare class AdminTerminalService {
    private deviceId;
    private networkService;
    private doDeletePath;
    private doGetPath;
    private doGetAllPath;
    private doSetPath;
    private doUpdatePath;
    constructor(deviceId: string, accessToken: string);
    doDelete(data: AdminTerminalRequests.AdminTerminalDoDeleteRequest): Promise<OperationResponse>;
    doGet(data: AdminTerminalRequests.AdminTerminalDoGetRequest): Promise<AdminTerminalResponses.AdminTerminalDoGetResponse>;
    doGetAll(): Promise<AdminTerminalResponses.AdminTerminalDoGetAllResponse>;
    doSet(data: AdminTerminalRequests.AdminTerminalDoSetRequest): Promise<AdminTerminalResponses.AdminTerminalDoSetResponse>;
    doUpdate(data: AdminTerminalRequests.AdminTerminalDoUpdateRequest): Promise<OperationResponse>;
}
