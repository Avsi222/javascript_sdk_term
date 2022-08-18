import { AdditionalProperties } from './ConversationItem';
export interface AdminPosDoDeleteRequest {
    posDeviceId: string;
}
export interface AdminPosDoGetRequest {
    posDeviceId: string;
}
export interface AdminPosDoSetRequest {
    name: string;
    description: string;
    additionalProperties?: AdditionalProperties;
}
export interface AdminPosDoUpdateRequest {
    name: string;
    description: string;
    additionalProperties?: AdditionalProperties;
}
export interface AdminPosTerminalAssociationDoGetRequest {
    posDeviceId: string;
}
export interface AdminPosTerminalAssociationDoSetRequest {
    posDeviceId: string;
    terminalAssociations: TerminalAssociation[];
}
export interface TerminalAssociation {
    terminalDeviceId: string;
    additionalProperties?: AdditionalProperties;
}
