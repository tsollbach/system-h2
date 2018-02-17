import path from 'path'
import glob from 'glob'
import { PackageList, ConfigMap, PackageConfig } from 'systemjs'

import { SEP, JS_EXTENSIONS } from './constants'
import { generatePackageMap } from './generate-package-map'

export function generateSource(rootFolder: string, relativeSourceFolder: string) {
  const files = glob.sync(`${rootFolder}${SEP}${relativeSourceFolder}${SEP}**${SEP}index.@(${JS_EXTENSIONS})`)
  const regex = new RegExp(`^${rootFolder}${SEP}(${relativeSourceFolder}${SEP}(.*))${SEP}(index.*)$`)
  const map = <ConfigMap>{}
  const packages = <PackageList<PackageConfig>>{}

  files.forEach((file: string) => {
    const match = regex.exec(file)
    if (match) {
      const packagePath = match[1]
      map[match[2]] = packagePath
      packages[packagePath] = {
        main: `./${match[3]}`,
        map: generatePackageMap(rootFolder, packagePath),
      }
    } else {
      throw new Error(`invalid file while generating config: '${file}'`)
    }
  })

  return {
    map,
    packages,
  }
}
