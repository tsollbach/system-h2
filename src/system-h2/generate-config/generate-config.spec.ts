import 'should'

import System, { Config } from 'systemjs'

import { generateConfig } from './generate-config'

const transpilerConfig: Config = {
  transpiler: 'plugin-babel',
  map: {
    'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
  }
}

describe('ConfigGenerator', () => {
  before(() => {
    const config = generateConfig({
      rootFolder: 'tests/simple'
    })

    System.config(transpilerConfig)
    System.config(config)
  })
  it('should be able to import a simple module with dependencies', (done) => {
    System.import('simple').then((simple) => {
      simple.simple().should.equal('simple')
      simple.simpleDep().should.equal('simpleDep')

      simple.simpleDefault().should.equal('simpleDefault')
      simple.simpleDepDefault().should.equal('simpleDepDefault')

      done()
    })
  })
})
