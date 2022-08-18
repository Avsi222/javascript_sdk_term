import { Basket } from './Basket';
export interface ConversionItem {
    conversationId: string;
    flowId: string;
    posDeviceId: string;
    referenceConversationId: string;
    flags?: AdditionalProperties;
    ttlTillSuccessSec: number;
    startedTimestampMs: number;
    status: string;
    participantsCount: number;
    lastInteraction: LastInteraction;
    waitingFor: string[];
    suggestions: Suggestions;
    additionalProperties?: AdditionalProperties;
    bill: Bill;
    paymentAllocations: PaymentAllocation[];
}
export interface AdditionalProperties {
    property1: string;
    property2: string;
}
export interface Bill {
    conversationId: string;
    basket: Basket[];
    posAmount: number;
    currency: string;
}
export interface LastInteraction {
    system: string;
    responseCode: number;
    shortMessage: string;
    longMessage: string;
}
export interface PaymentAllocation {
    allocationId: string;
    terminalDeviceId: string;
    amount: number;
    status: string;
    tips: Tip[];
    currency: string;
    additionalProperties?: AdditionalProperties;
}
export interface Tip {
    type: string;
    description: string;
    suggestedAmount: number;
}
export interface Suggestions {
    shouldRetry: boolean;
    nextStatusPoll: number;
}
