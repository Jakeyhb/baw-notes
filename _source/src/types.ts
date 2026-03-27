export type View = 'home' | 'article-npd' | 'article-situation' | 'article-6'

export interface Article {
  id: View
  num: string
  title: string
  subtitle: string
  date: string
  readTime: string
  tags: string[]
  emoji: string
  accent: string
}
