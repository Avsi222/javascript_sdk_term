import * as ConversationResponses from '../Models/ConversationReponses';
import * as ConversationRequests from '../Models/ConversationRequests';
import { OperationResponse } from '../Models/OperationResponse';
export declare class ConversationService {
    private deviceId;
    private networkService;
    private basketDoSetPath;
    private doCancelPath;
    private doGetPath;
    private doGetAllPath;
    private doStartPath;
    private doUpdatePath;
    private paymentAllocationDoGetPath;
    private paymentAllocationDoProcessPath;
    private paymentAllocationDoSetPath;
    constructor(deviceId: string, accessToken: string);
    basketDoSet(data: ConversationRequests.ConversationBasketDoSetRequest): Promise<OperationResponse>;
    doCancel(data: ConversationRequests.ConversationDoCancelRequest): Promise<OperationResponse>;
    doGet(data: ConversationRequests.ConversationDoGetRequest): Promise<ConversationResponses.ConversationDoGetResponse>;
    doGetAll(data: ConversationRequests.ConversationDoGetAllRequest): Promise<ConversationResponses.ConversationDoGetResponse>;
    doStart(data: ConversationRequests.ConversationDoStartRequest): Promise<ConversationResponses.ConversationDoStartResponse>;
    doUpdate(data: ConversationRequests.ConversationDoUpdateRequest): Promise<OperationResponse>;
    paymentAllocationDoGet(data: ConversationRequests.PaymentAllocationDoGetRequest): Promise<ConversationResponses.PaymentAllocationDoGetResponse>;
    paymentAllocationDoProcess(data: ConversationRequests.PaymentAllocationDoProcessRequest): Promise<OperationResponse>;
    paymentAllocationDoSet(data: ConversationRequests.PaymentAllocationDoSetRequest): Promise<OperationResponse>;
}
