import Builder from 'systemjs-builder';
export interface DependencyList {
    [key: string]: string;
}
declare function trace(entry: string, builder: Builder): Promise<DependencyList>;
export default trace;
