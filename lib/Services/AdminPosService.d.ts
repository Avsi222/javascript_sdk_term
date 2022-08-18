import { OperationResponse } from '../Models/OperationResponse';
import * as AdminPosRequests from '../Models/AdminPosRequests';
import * as AdminPosResponses from '../Models/AdminPosResponses';
export declare class AdminPosService {
    private deviceId;
    private networkService;
    private doDeletePath;
    private doGetPath;
    private doGetAllPath;
    private doSetPath;
    private doUpdatePath;
    private terminalAssociationDoGetPath;
    private terminalAssociationDoSetPath;
    constructor(deviceId: string, accessToken: string);
    doDelete(data: AdminPosRequests.AdminPosDoDeleteRequest): Promise<OperationResponse>;
    doGet(data: AdminPosRequests.AdminPosDoGetRequest): Promise<AdminPosResponses.AdminPosDoGetResponse>;
    doGetAll(): Promise<AdminPosResponses.AdminPosDoGetAllResponse>;
    doSet(data: AdminPosRequests.AdminPosDoSetRequest): Promise<AdminPosResponses.AdminPosDoSetResponse>;
    doUpdate(data: AdminPosRequests.AdminPosDoUpdateRequest): Promise<OperationResponse>;
    terminalAssociationDoGet(data: AdminPosRequests.AdminPosTerminalAssociationDoGetRequest): Promise<AdminPosResponses.AdminPosTerminalAssociationDoGetResponse>;
    terminalAssociationDoSet(data: AdminPosRequests.AdminPosTerminalAssociationDoSetRequest): Promise<OperationResponse>;
}
