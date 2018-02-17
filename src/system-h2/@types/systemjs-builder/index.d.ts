declare module 'systemjs-builder' {
  import { Config } from 'systemjs'

  class Builder {
    config: (config: Config) => void
    trace: (entry: string) => any
  }
  export default Builder
}
