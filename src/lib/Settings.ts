import { BasePage } from './BasePage'

export class Settings extends BasePage {
  constructor(lang: string, basePath?: string) {
    super(lang, 'settings.md', basePath)
  }
}
