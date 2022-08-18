export declare class AuthRequest {
    client_id: string;
    client_secret: string;
    audience: string;
    grant_type: string;
    constructor(clientId: string, clientSecret: string);
}
export interface AuthResponse {
    access_token: string | null;
}
