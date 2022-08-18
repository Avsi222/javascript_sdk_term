import { ConversationService } from './Services/ConversationService';
import { AdminPosService } from './Services/AdminPosService';
import { AdminTerminalService } from './Services/AdminTerminalService';
import { AdditionalService } from './Services/AdditionalService';
export declare class SDK {
    adminPosService: AdminPosService;
    adminTerminalService: AdminTerminalService;
    additionalService: AdditionalService;
    conversationService: ConversationService;
    constructor(deviceId: string, accessToken: string);
}
