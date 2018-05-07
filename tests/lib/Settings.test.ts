import * as path from 'path'
import { Settings } from '../../src'

describe('Settings', () => {
  it('loads markdown file for supported language', () => {
    let p: Settings

    expect(
      () => p = new Settings('eo', `${__dirname}/../fixtures/`)
    ).not.toThrowError()

    expect(p.data).toContain('# Settings')
  })

  it('fails to load markdown file for unsupported language', () => {
    expect(
      () => new Settings('invalid', `${__dirname}/../fixtures/`)
    ).toThrowError()
  })
})
