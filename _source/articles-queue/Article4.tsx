import { FadeUp, ArticleNav, Callout } from './shared'

interface Props { onBack: () => void; onShare: () => void }

export default function Article4({ onBack, onShare }: Props) {
  return (
    <div className="blog-container">
      <ArticleNav onBack={onBack} onShare={onShare} />

      <header className="article-header">
        <div className="article-tags">
          <span className="tag tag-accent">情绪心理</span>
          <span className="tag">羞耻感</span>
          <span className="tag">自我攻击</span>
        </div>
        <h1 className="article-title">爆发之后的羞耻感<br />那个让她攻击自己的环</h1>
        <div className="article-subtitle">
          情绪爆发之后，往往跟着一场更深的痛苦——
          不是因为发生了什么，而是她开始攻击自己「为什么又这样了」。
        </div>
        <div className="article-meta">
          <div className="author-chip">
            <div className="author-av">心</div>
            内心记事编辑部
          </div>
          <span className="article-date">2026年</span>
          <span className="read-time">约 13 分钟阅读</span>
        </div>
      </header>

      <FadeUp>
        <p className="lead-para">
          经历过 NPD 家庭的人，情绪爆发之后常常陷入一种比爆发本身更折磨的状态：
          羞耻。不是后悔说错了什么——而是觉得<strong>自己本身有问题</strong>。
          「我怎么又这样了」「我太不成熟了」「我让他失望了」。这个自我攻击的环，
          有时比情绪触发更耗人。
        </p>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">羞耻感是怎么种下的</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            在 NPD 家庭里，孩子的情绪发作不会被回应，只会被评判。不是「你为什么难过」，
            而是「你这样很丢人」「你这么点事有什么好崩溃的」「你就是太敏感」。
          </p>
          <p style={{ marginTop: 14 }}>
            日复一日，孩子内化了这个声音：<strong>情绪失控 = 我是一个坏的、弱的、有问题的人。</strong>
            不是「我现在很难受」，而是「我是一个会这样难受的人，这件事本身就是问题」。
          </p>
          <p style={{ marginTop: 14 }}>
            长大之后，每次情绪爆发，那个童年里批评她的声音就会自动启动。
            区别只是：现在是她自己对自己说那些话。
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <Callout type="key">
          羞耻感和内疚感是不同的。<br />
          <strong>内疚</strong>说的是：「我做了一件不好的事。」——关于行为，可以修复。<br />
          <strong>羞耻</strong>说的是：「我是一个不好的人。」——关于自我，无法修复，只能逃跑。
        </Callout>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">爆发 → 羞耻 → 爆发的恶性循环</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 8 }}>
          {[
            { step: '1', title: '情绪爆发', desc: '某个触发点（等待、感受被忽视、某句话）引发不成比例的情绪反应', color: 'var(--accent)' },
            { step: '↓', title: '', desc: '', color: 'transparent' },
            { step: '2', title: '自我攻击', desc: '「我又这样了。我太难了。我不应该对他发火。我真的有问题」', color: '#e57373' },
            { step: '↓', title: '', desc: '', color: 'transparent' },
            { step: '3', title: '过度补偿或退缩', desc: '要么道歉道到过分，要么关闭自己不说话——两种都是逃避羞耻的方式', color: '#ffb74d' },
            { step: '↓', title: '', desc: '', color: 'transparent' },
            { step: '4', title: '情绪积压', desc: '真实感受没有被处理，只是被压住了。下一次触发时，积累更多', color: '#e57373' },
            { step: '↓', title: '', desc: '', color: 'transparent' },
            { step: '1', title: '再次爆发', desc: '循环重启，每一轮都让羞耻感更深', color: 'var(--accent)' },
          ].map((item, i) => (
            item.title === '' ? (
              <div key={i} style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 20, lineHeight: 1.2 }}>↓</div>
            ) : (
              <div key={i} style={{
                display: 'flex', gap: 14, padding: '14px 18px',
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderLeft: `4px solid ${item.color}`, borderRadius: 10
              }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: item.color, minWidth: 20 }}>{item.step}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              </div>
            )
          ))}
        </div>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">如何识别她正处于羞耻状态</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            羞耻感有几个外显的行为信号，作为伴侣认出它，是能帮上忙的第一步：
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 8 }}>
          {[
            { sign: '爆发后突然安静', meaning: '不是平静，是羞耻让她关闭了，觉得说什么都没用' },
            { sign: '过度道歉', meaning: '「对不起我太差劲了」不是在道歉，是在惩罚自己' },
            { sign: '说「我真的有问题」', meaning: '在那一刻，她相信这是真的，不是在博取安慰' },
            { sign: '拒绝被安慰', meaning: '「不用管我」可能意味着她觉得自己不值得被好好对待' },
          ].map(item => (
            <div key={item.sign} style={{
              padding: '14px 16px', background: 'var(--bg2)',
              border: '1px solid var(--border)', borderRadius: 10
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>「{item.sign}」</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>{item.meaning}</div>
            </div>
          ))}
        </div>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">爆发后，你说什么很关键</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            在羞耻最深的时候，任何批评、分析、或「解释」都会加重它。
            也不需要把事情合理化——那感觉像是在帮她逃避责任。
            真正有用的是：让她感受到，这件事的发生不意味着她是「不可修复的」。
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
          {[
            { label: '❌ 会加深羞耻', items: ['"你每次都这样"', '"我知道你有原因，但是……"（转折句）', '"你需要去看心理医生"（在爆发当下说）'] },
            { label: '✓ 能切断羞耻的话', items: ['"你现在很难受，我在这里"（不分析，只陪着）', '"你这个样子我不会走"（消除被抛弃的恐惧）', '"你没有问题，我们遇到了困难的事情"（区分人和行为）'] },
          ].map(group => (
            <div key={group.label} style={{
              background: group.label.startsWith('❌') ? 'rgba(239,83,80,0.06)' : 'rgba(123,162,188,0.08)',
              border: `1px solid ${group.label.startsWith('❌') ? 'rgba(239,83,80,0.2)' : 'rgba(123,162,188,0.25)'}`,
              borderRadius: 10, padding: '14px 18px'
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: group.label.startsWith('❌') ? '#ef5350' : 'var(--accent2)', marginBottom: 10 }}>
                {group.label}
              </div>
              {group.items.map((item, i) => (
                <div key={i} style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.75, padding: '2px 0' }}>
                  「{item}」
                </div>
              ))}
            </div>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={70}>
        <Callout type="warm">
          给她的话：情绪爆发不是你「本质有问题」的证明，它是一个超负荷系统在求救。
          你不需要为「有情绪」而惩罚自己。爆发了，可以道歉，可以修复，然后放下——
          不需要再接着审判自己一遍。
        </Callout>
      </FadeUp>

      <div className="article-footer-actions">
        <button className="share-btn" onClick={onShare}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
          分享这篇文章
        </button>
        <button className="back-btn-bottom" onClick={onBack}>← 返回目录</button>
      </div>
    </div>
  )
}
