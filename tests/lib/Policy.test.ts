import * as path from 'path'
import { Policy } from '../../src'

describe('Policy', () => {
  it('loads markdown file for supported language', () => {
    let p: Policy;

    expect(
      () => p = new Policy('eo', `${__dirname}/../fixtures/`)
    ).not.toThrowError()

    expect(p.data).toContain('# Cookie Policy')
  })

  it('fails to load markdown file for unsupported language', () => {
    expect(
      () => new Policy('invalid', `${__dirname}/../fixtures/`)
    ).toThrowError()
  })
})
