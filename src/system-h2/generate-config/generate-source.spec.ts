import 'should'

import { generateSource } from './generate-source'

describe('SourceMapGenerator', () => {
  it('should run', () => {
    generateSource('tests/simple', 'src')
  })
})
