import path from 'path'
import glob from 'glob'
import { PackageList, ConfigMap, PackageConfig } from 'systemjs'
import { readFileSync,  existsSync} from 'fs'

import { SEP, NODE_MODULES } from './constants'
import { generatePackageMap } from './generate-package-map'

const upgradeMap = (map: ConfigMap, upgradeFolder: string) => {
  const resultMap = <ConfigMap>{}
  Object.keys(map).forEach((nestedMapping) => {
    resultMap[nestedMapping] = `${upgradeFolder}${SEP}${map[nestedMapping]}`
  })
  return resultMap
}

export function generateDeps(rootFolder: string, depsFolder: string = NODE_MODULES) {
  const deps = glob.sync(`${rootFolder}${SEP}${depsFolder}${SEP}*${SEP}package.json`)
  const regex = new RegExp(`^${rootFolder}${SEP}(${depsFolder}${SEP}(.*))${SEP}package\.json$`)
  const map = <ConfigMap>{}
  const packages = <PackageList<PackageConfig>>{}


  deps.forEach((dep: string) => {
    if (dep.includes('@types')) return

    const packageConfig = JSON.parse(readFileSync(dep).toString())
    const packageMain = packageConfig['jsnext:main'] || packageConfig.module || packageConfig.main || 'index.js'
    const match = regex.exec(dep)

    if (match) {
      const depFolder = match[1]
      const packageMainFile = path.join(depFolder, packageMain)
      if (!existsSync(`${rootFolder}${SEP}${packageMainFile}`)) {
        throw new Error(`invalid module main '${packageMainFile}' for dependency: '${dep}'`)
      }
      map[match[2]] = depFolder

      if (packageMainFile) {
        packages[depFolder] = {
          main: `./${packageMain}`,
          map: generatePackageMap(rootFolder, depFolder),
        }
      }

      const nestedFolder = `${rootFolder}${SEP}${depFolder}`
      if (existsSync(`${nestedFolder}${SEP}${NODE_MODULES}`)) {
        const nested = generateDeps(nestedFolder)

        if (Object.keys(nested.map).length) {
          packages[depFolder] = {
            map: upgradeMap(nested.map, depFolder)
          }
        }

        if (Object.keys(nested.packages).length) {
          Object.keys(nested.packages).forEach((nestedPackageKey) => {
            const nestedPackage = nested.packages[nestedPackageKey]
            if (nestedPackage.map) {
              nestedPackage.map = upgradeMap(nestedPackage.map, depFolder)
            }
            packages[`${depFolder}${SEP}${nestedPackageKey}`] = nestedPackage
          })
        }
      }
    } else {
      throw new Error(`invalid dependecy while generating config: '${dep}'`)
    }
  })

  return {
    map,
    packages
  }
}
