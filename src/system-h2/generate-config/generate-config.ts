import path from 'path'

import { PackageList, ConfigMap, PackageConfig } from 'systemjs'

import { generateSource } from './generate-source'
import { generateDeps } from './generate-deps'

import { GenerateOptions } from './interfaces/generate-options'

const DEFAULT_OPTIONS: GenerateOptions = {
  rootFolder: '',
  sourceFolder: 'src',
  depsFolder: 'node_modules',
}

function prependRootToMap(rootFolder: string, map: ConfigMap) {
  Object.keys(map).forEach((key) => {
    const mapping = map[key]
    if (typeof mapping === 'string') {
      map[key] = path.join(rootFolder, mapping)
    }
  })
  return map
}

function prependRootToPackages(rootFolder: string, packages: PackageList<PackageConfig>) {
  const resultPackages= <PackageList<PackageConfig>>{}
  Object.keys(packages).forEach((key) => {
    const _package = packages[key]
    resultPackages[path.join(rootFolder, key)] = _package
    if (_package.map) {
      _package.map = prependRootToMap(rootFolder, _package.map)
    }
  })
  return resultPackages
}

export function generateConfig(options: Partial<GenerateOptions>) {
  const { sourceFolder, rootFolder, depsFolder } = Object.assign({}, DEFAULT_OPTIONS, options)

  const sourceConfig = generateSource(rootFolder, sourceFolder)
  const depConfig = generateDeps(rootFolder)

  const result = {
    map: prependRootToMap(rootFolder, Object.assign({}, sourceConfig.map, depConfig.map)),
    packages: prependRootToPackages(rootFolder, Object.assign({}, sourceConfig.packages, depConfig.packages))
  }

  return result
}

