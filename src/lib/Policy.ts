import { BasePage } from './BasePage'

export class Policy extends BasePage {
  constructor(lang: string, basePath?: string) {
    super(lang, 'policy.md', basePath)
  }
}
