import { AdditionalProperties } from './ConversationItem';
export interface AdminTerminalDoGetRequest {
    terminalDeviceId: string;
}
export interface AdminTerminalDoSetRequest {
    name: string;
    description: string;
    additionalProperties?: AdditionalProperties;
}
export interface AdminTerminalDoUpdateRequest {
    name: string;
    terminalDeviceId: string;
    description: string;
    additionalProperties?: AdditionalProperties;
}
export interface AdminTerminalDoDeleteRequest {
    terminalDeviceId: string;
}
