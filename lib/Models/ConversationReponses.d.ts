import { AdditionalProperties, ConversionItem, Tip } from './ConversationItem';
export interface ConversationDoGetResponse {
    data: ConversionItem[];
}
export interface ConversationDoStartResponse {
    data: {
        conversationId: string;
    };
}
export interface PaymentAllocationDoGetResponse {
    data: PaymentAllocations[];
}
export interface PaymentAllocations {
    allocationId: string;
    terminalDeviceId: string;
    amount: number;
    status: string;
    tips: Tip[];
    currency: string;
    additionalProperties?: AdditionalProperties;
}
