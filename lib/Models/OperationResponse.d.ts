import { AdditionalProperties } from './ConversationItem';
export declare type OperationResponse = {
    header: {
        operationId: string;
    };
};
export interface OperationStatusDoGetResponse {
    data: OperationStatus;
}
export interface OperationStatus {
    operationId: string;
    requestTimestampMs: number;
    name: string;
    status: string;
    details: string;
    message: string;
    additionalProperties?: AdditionalProperties;
}
export interface MiscPingResponse {
    data: string;
}
