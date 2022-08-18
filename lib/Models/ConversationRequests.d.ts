import { Basket } from './Basket';
export interface ConversationBasketDoSetRequest {
    conversationId: string;
    posAmount: number;
    currency: string;
    baskets: Basket[];
}
export interface ConversationDoCancelRequest {
    conversationId: string;
    reason: string;
}
export interface ConversationDoGetRequest {
    conversationId: string;
}
export interface ConversationDoGetAllRequest {
    posDeviceId: string;
}
export interface ConversationDoStartRequest {
    flowId: string;
    posDeviceId: string;
    additionalProperties?: AdditionalProperty[];
}
export interface ConversationDoUpdateRequest {
    conversationId: string;
    posDeviceId: string;
    reason: string;
    flags?: Flags;
}
export interface Flags {
    property1: string;
    property2: string;
}
export interface AdditionalProperty {
    integrationName: string;
}
export interface PaymentAllocationDoGetRequest {
    terminalDeviceId: string;
}
export interface PaymentAllocationDoProcessRequest {
    allocationId: string;
}
export interface PaymentAllocationDoSetRequest {
    conversationId: string;
    paymentAllocations: PaymentAllocationsRequestData[];
}
export interface PaymentAllocationsRequestData {
    terminalDeviceId: string;
    amount: number;
    currency: string;
}
