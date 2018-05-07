import * as fs from 'fs'
import * as path from 'path'

export class BasePage {
  constructor(public lang: string, public name: string, private basePath?: string) {
    if (!fs.existsSync(this.absolute_file)) {
      throw new Error(`Unable to find page ${this.name} for ${this.lang}`)
    }
  }

  get absolute_file() {
    if (this.basePath) {
      return path.resolve(this.basePath, `${this.lang}/${this.name}`)
    } else {
      return path.resolve(__dirname, `../../data/${this.lang}/${this.name}`)
    }
  }

  get data() {
    return fs.readFileSync(this.absolute_file).toString()
  }
}
