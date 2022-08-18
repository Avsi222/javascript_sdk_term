import { TerminalDevice } from './TerminalDevice';
export interface AdminTerminalDoGetResponse {
    data: {
        terminalDeviceId: string;
    };
}
export interface AdminTerminalDoGetAllResponse {
    data: TerminalDevice[];
}
export interface AdminTerminalDoSetResponse {
    data: {
        terminalDeviceId: string;
    };
}
