import Builder from 'systemjs-builder'
import { Config } from 'systemjs'

export interface DependencyList {
  [key: string]: string
}

async function trace(entry: string, builder: Builder) {
  const tree = await builder.trace(entry)

  return Object.keys(tree).reduce((result, key) => {
    result[key] = tree[key].source
    return result
  }, <DependencyList>{})
}

export default trace
