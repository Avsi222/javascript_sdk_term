import { AdditionalProperties } from './ConversationItem';
export interface TerminalDevice {
    terminalDeviceId: string;
    name: string;
    description: string;
    additionalProperties?: AdditionalProperties;
}
