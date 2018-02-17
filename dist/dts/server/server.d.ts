import { ServerConfig } from './interfaces';
export declare class Server {
    private _config;
    private systemConfig;
    private systemBuilder;
    private entryPoints;
    constructor(_config: ServerConfig);
    bootstrap(): Promise<void>;
    config: ServerConfig;
}
