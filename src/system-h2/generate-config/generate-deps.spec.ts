import 'should'

import { generateDeps } from './generate-deps'

describe('DepsMapGenerator', () => {
  it('should run', () => {
    generateDeps('tests/simple')
  })
})
