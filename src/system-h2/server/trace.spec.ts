import 'should'

import Builder from 'systemjs-builder'
import { Config } from 'systemjs'

import generateConfig from '../generate-config'
import trace from './trace'

const transpilerConfig: Config = {
  transpiler: 'plugin-babel',
  map: {
    'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
  }
}

describe('ConfigGenerator', () => {
  let config: Config
  let builder: Builder
  before(() => {
    config = generateConfig({
      rootFolder: 'testProjects/simple'
    })

    config.transpiler = transpilerConfig.transpiler
    config.map = Object.assign(config.map, transpilerConfig.map)

    builder = new Builder()
    builder.config(config)
  })
  it('should run', async () => {
    const depList = await trace('simple', builder)
    Object.keys(depList).length.should.equal(3)
  })
})
