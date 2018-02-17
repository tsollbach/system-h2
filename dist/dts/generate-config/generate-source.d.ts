/// <reference types="systemjs" />
import { PackageList, PackageConfig } from 'systemjs';
export declare function generateSource(rootFolder: string, relativeSourceFolder: string): {
    map: PackageList<string | PackageList<string>>;
    packages: PackageList<PackageConfig>;
};
