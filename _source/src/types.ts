export type View = 'home' | 'article-npd' | 'article-situation' | 'article-6' | 'article-3' | 'article-4' | 'article-5'

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
