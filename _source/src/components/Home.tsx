import { type View } from '../types'
import { FadeUp } from './shared'

const articles = [
  {
    id: 'article-npd' as View,
    num: '01',
    title: '当爱变成雷区',
    subtitle: 'NPD原生家庭创伤如何重塑一个女孩的神经系统，又如何让她在最亲密的关系里，最难以平静。',
    date: '2026年3月25日',
    readTime: '约 15 分钟',
    tags: ['NPD创伤', '神经科学', '依恋理论'],
    emoji: '🧠',
    accentColor: 'var(--accent)',
  },
  {
    id: 'article-situation' as View,
    num: '02',
    title: '每天十二小时，加上一场搬家',
    subtitle: '她的情绪，为什么现在最难。长期缺席的伴侣和失去熟悉城市的双重触发，深度分析与应对指南。',
    date: '2026年3月25日',
    readTime: '约 14 分钟',
    tags: ['情境分析', '搬家', '日常指南'],
    emoji: '💙',
    accentColor: 'var(--accent2)',
  },
  {
    id: 'article-6' as View,
    num: '03',
    title: '那些总让你觉得自己不够好的人',
    subtitle: '他们不一定真的比你优秀，但他们非常擅长用一种气场，让你在关系里持续消耗、持续怀疑自己。',
    date: '2026年3月27日',
    readTime: '约 13 分钟',
    tags: ['情绪心理', '人际关系', '自我价值'],
    emoji: '🔮',
    accentColor: 'var(--accent)',
  },
]

interface Props {
  onNavigate: (v: View) => void
}

export default function Home({ onNavigate }: Props) {
  return (
    <div className="home-wrap">

      {/* Header */}
      <header className="site-header">
        <div className="site-inner">
          <div className="site-brand">
            <span className="brand-dot" />
            内心记事
          </div>
          <div className="site-sub">关系心理 · 情绪理解 · 原生家庭</div>
        </div>
      </header>

      {/* Hero */}
      <section className="home-hero">
        <FadeUp>
          <div className="hero-eyebrow">私人专题</div>
          <h1 className="hero-title">理解她，也理解我们</h1>
          <p className="hero-desc">
            这里的每一篇，都是为了弄清楚一件事：<br />
            那些情绪背后，到底发生了什么。
          </p>
        </FadeUp>
      </section>

      {/* Article list */}
      <main className="home-main">
        <FadeUp delay={60}>
          <div className="list-header">全部文章 · {articles.length} 篇</div>
        </FadeUp>

        <div className="article-list">
          {articles.map((a, i) => (
            <FadeUp key={a.id} delay={100 + i * 120}>
              <button className="article-card" onClick={() => onNavigate(a.id)}>
                <div className="card-accent-bar" style={{ background: a.accentColor }} />
                <div className="card-num">{a.num}</div>
                <div className="card-body">
                  <div className="card-tags">
                    {a.tags.map((t, ti) => (
                      <span key={ti} className={`tag ${ti === 0 ? 'tag-accent' : ''}`}>{t}</span>
                    ))}
                  </div>
                  <h2 className="card-title">{a.title}</h2>
                  <p className="card-sub">{a.subtitle}</p>
                  <div className="card-meta">
                    <span className="card-date">{a.date}</span>
                    <span className="card-time">· {a.readTime}阅读</span>
                  </div>
                </div>
                <div className="card-right">
                  <div className="card-emoji">{a.emoji}</div>
                  <div className="card-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                         strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            </FadeUp>
          ))}
        </div>
      </main>

      <footer className="home-footer">
        <p>私人记录 · 仅供参考 · 2026</p>
      </footer>
    </div>
  )
}
