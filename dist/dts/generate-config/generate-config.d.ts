/// <reference types="systemjs" />
import { PackageList, PackageConfig } from 'systemjs';
import { GenerateOptions } from './interfaces/generate-options';
export declare function generateConfig(options: Partial<GenerateOptions>): {
    map: PackageList<string | PackageList<string>>;
    packages: PackageList<PackageConfig>;
};
