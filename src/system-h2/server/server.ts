import http2 from 'http2'
import fs from 'fs'

import SystemBuilder from 'systemjs-builder'
import { Config as SystemConfig } from 'systemjs'

import generateConfig from '../generate-config'
import { ServerConfig } from './interfaces'
import EntryPoint from './entry-point'

export class Server {

  private systemConfig: SystemConfig
  private systemBuilder: SystemBuilder

  private entryPoints: EntryPoint[]

  constructor(private _config: ServerConfig) {}

  async bootstrap() {
    this.systemConfig = generateConfig(this.config.generator)
    this.systemBuilder = new SystemBuilder()
    this.systemBuilder.config(this.systemConfig)

    this.entryPoints = await Promise.all(Object.keys(this.config.entryPoints).map((route) => {
        return EntryPoint.build(route, this.config.entryPoints[route], this.systemBuilder)
    }))

    console.log('server ready')
  }

  get config() {
    return this._config
  }

  set config(config: ServerConfig) {
    this._config = config
  }
}
