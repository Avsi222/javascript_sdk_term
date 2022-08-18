import { PosDevice } from './PosDevice';
import { TerminalDevice } from './TerminalDevice';
export interface AdminPosDoGetResponse {
    data: PosDevice[];
}
export interface AdminPosDoGetAllResponse {
    data: PosDevice[];
}
export interface AdminPosDoSetResponse {
    posDeviceId: string;
}
export interface AdminPosTerminalAssociationDoGetResponse {
    posDeviceId: string;
    data: TerminalDevice[];
}
