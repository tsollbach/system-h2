import Builder from 'systemjs-builder'

import trace, { DependencyList } from './trace'

class EntryPoint {

  static async build(route: string, entry: string, builder: Builder) {
    const dependencies = await trace(entry, builder)
    return new EntryPoint(route, entry, dependencies)
  }

  constructor(private _route: string, private _entry: string, private _dependencies: DependencyList ) {

  }

  get route() {
    return this._route
  }

  get entry() {
    return this._entry
  }

  get dependencies() {
    return this._dependencies
  }
}

export default EntryPoint
