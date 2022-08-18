import { NetworkApiRequest, NetworkAuthRequest } from '../Models/NetworkModels';
declare class NetworkService {
    accessToken: string;
    constructor(accessToken: string);
    makeRequest<Type>(request: NetworkApiRequest): Promise<Type>;
    makeAuthRequest(request: NetworkAuthRequest): Promise<any>;
}
export default NetworkService;
