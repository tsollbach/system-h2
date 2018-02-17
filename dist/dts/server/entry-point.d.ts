import Builder from 'systemjs-builder';
import { DependencyList } from './trace';
declare class EntryPoint {
    private _route;
    private _entry;
    private _dependencies;
    static build(route: string, entry: string, builder: Builder): Promise<EntryPoint>;
    constructor(_route: string, _entry: string, _dependencies: DependencyList);
    readonly route: string;
    readonly entry: string;
    readonly dependencies: DependencyList;
}
export default EntryPoint;
