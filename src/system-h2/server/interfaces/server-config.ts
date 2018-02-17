import { GenerateOptions } from '../../generate-config/interfaces'

export interface ServerConfig {

  certificate: string

  certificateKey: string

  template: string

  entryPoints: {
    [key: string]: string
  }

  generator: GenerateOptions

}
