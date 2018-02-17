import glob from 'glob'
import { ConfigMap } from 'systemjs'

import { SEP, JS_EXTENSIONS } from './constants'

export function generatePackageMap(rootFolder: string, packagePath: string): ConfigMap {
  const packageMap = <ConfigMap>{}
  const files = glob.sync(`${rootFolder}${SEP}${packagePath}${SEP}**${SEP}*.@(${JS_EXTENSIONS})`)
  const regex = new RegExp(`^${rootFolder}${SEP}${packagePath}${SEP}(.*)\\.\\w+$`)

  files.forEach((file) => {
    if (file.match(/index\.\w+$/)) return
    const match = regex.exec(file)
    if (match) {
      const mapKey = `./${match[1]}`
      packageMap[mapKey] = file.replace(`${rootFolder}${SEP}`, '')
    }
  })

  return packageMap
}
