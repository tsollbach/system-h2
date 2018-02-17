/// <reference types="systemjs" />
import { PackageList, PackageConfig } from 'systemjs';
export declare function generateDeps(rootFolder: string, depsFolder?: string): {
    map: PackageList<string | PackageList<string>>;
    packages: PackageList<PackageConfig>;
};
