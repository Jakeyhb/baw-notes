import { FadeUp, ArticleNav, Callout } from './shared'

interface Props { onBack: () => void; onShare: () => void }

export default function Article3({ onBack, onShare }: Props) {
  return (
    <div className="blog-container">
      <ArticleNav onBack={onBack} onShare={onShare} />

      <header className="article-header">
        <div className="article-tags">
          <span className="tag tag-accent">情绪心理</span>
          <span className="tag">创伤反应</span>
          <span className="tag">自我否认</span>
        </div>
        <h1 className="article-title">「我没事」<br />是一种生存方式，不是坚强</h1>
        <div className="article-subtitle">
          每次说「我没事」，她可能不是在告诉你真相，
          而是在使用一个从小学会的、最有效的自我保护工具。
        </div>
        <div className="article-meta">
          <div className="author-chip">
            <div className="author-av">心</div>
            内心记事编辑部
          </div>
          <span className="article-date">2026年</span>
          <span className="read-time">约 12 分钟阅读</span>
        </div>
      </header>

      <FadeUp>
        <p className="lead-para">
          很多人觉得，说「我没事」是一种成熟的情绪管理——不麻烦别人，消化自己的感受，继续往前走。但对于在 NPD 家庭中长大的人来说，这句话的来历要暗得多：
          它不是选择，而是<strong>生存需要</strong>。
        </p>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">「我没事」是怎么被训练出来的</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            在 NPD 父母主导的家庭里，表达情绪是危险的。孩子哭，可能被嘲笑「这点小事有什么好哭的」；孩子愤怒，可能被惩罚「怎么这么不懂事」；孩子说「我受伤了」，可能换来「你就是太脆弱了」。
          </p>
          <p style={{ marginTop: 14 }}>
            重复几十次、几百次之后，孩子的神经系统学会了一件事：<strong>情绪 = 危险</strong>。不是说「我没感受」，而是感受出现的瞬间，就立刻被压下去——因为暴露感受的代价太高。
          </p>
          <p style={{ marginTop: 14 }}>
            「我没事」是这个学习过程的终产物。说出口的是「没事」，但神经系统里正在发生的可能是恐惧、悲伤、愤怒——全部被锁在一个叫「我应该应付得来」的盒子里。
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <Callout type="key">
          「我没事」不是在描述情绪状态，是在执行一个从小学会的安全协议：<br />
          <em>如果我表现得没事，就不会有糟糕的事情发生。</em>
        </Callout>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">两种「我没事」的区别</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            不是所有的「没事」都是创伤反应。有一种「我没事」来自真实的复原力：事情确实处理好了，情绪确实过去了，说「没事」是如实描述。
          </p>
          <p style={{ marginTop: 14 }}>
            另一种「我没事」是掩盖——身体里有东西，但不允许它出来。怎么区分？
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <div className="sit-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 8 }}>
          {[
            {
              type: '真实复原的「没事」',
              color: 'var(--accent2)',
              signs: [
                '说完之后身体放松',
                '话题自然过去，不需要再想',
                '不怕追问，问了也能回答',
                '情绪和事件对应得上'
              ]
            },
            {
              type: '掩盖型「没事」（创伤反应）',
              color: 'var(--accent)',
              signs: [
                '说完仍然紧绷，有点焦虑',
                '话题过去了，感受没过去',
                '如果有人继续问会很不舒服',
                '事情不大，但感觉很重'
              ]
            }
          ].map(item => (
            <div key={item.type} style={{
              background: 'var(--surface)',
              borderTop: `3px solid ${item.color}`,
              borderRadius: 12,
              padding: '16px 18px'
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.type}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {item.signs.map((s, i) => (
                  <li key={i} style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, display: 'flex', gap: 8 }}>
                    <span style={{ color: item.color, flexShrink: 0 }}>·</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">长期压着「没事」的代价</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            情绪不会因为被压制而消失，它只是换了个地方存着。长期使用「我没事」作为应对机制，往往会产生三种代价：
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
          {[
            {
              num: '01',
              title: '情绪积累，直到爆发',
              desc: '被压住的感受不是消失了，是在累积。当积累超过阈值——往往是一件很小的事——就会以「炸毛」的形式出来，烈度和触发事件完全不对等。这就是为什么她有时会因为一件小事崩掉：那不是小事的重量，是所有压着的东西的重量。'
            },
            {
              num: '02',
              title: '身体开始说话',
              desc: '心理上压住的情绪，身体会代劳表达：头痛、胃痛、肩颈紧绷、睡眠不好、容易疲劳。很多时候这不是「生病了」，是身体用躯体语言说出了心理不被允许说的话。'
            },
            {
              num: '03',
              title: '关系里的隔阂',
              desc: '如果一个人习惯了不表达感受，伴侣就很难真正进入她的内心世界。不是不爱，而是长年的「没事」在关系里建了一道墙。双方都感觉不到真正的亲密，却说不清为什么。'
            }
          ].map(item => (
            <div key={item.num} style={{
              display: 'flex',
              gap: 16,
              padding: '18px 20px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 12
            }}>
              <div style={{
                fontSize: 18, fontWeight: 900, color: 'var(--accent)',
                fontFamily: 'var(--serif)', minWidth: 28, paddingTop: 2
              }}>{item.num}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.75 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">作为伴侣，你能做的</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            最重要的一件事：<strong>不要把「我没事」当作真相，也不要逼她推翻这句话。</strong>
          </p>
          <p style={{ marginTop: 14 }}>
            直接说「你肯定有事，你说谎」会触发防御；而什么都不说，又在强化她的孤独感。有效的做法是在「没事」和「说出来」之间创造一个安全的中间地带。
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
          {[
            { label: '❌ 会触发防御', items: ['"你就是不说，又憋着"', '"你不信任我吗？"', '"你有事就直说，不用装"'] },
            { label: '✓ 给她空间', items: ['"我注意到你最近状态不太好，我在，随时都可以说"', '"你不用现在告诉我。但我想让你知道，我不会评判你"', '"我不需要你没事。如果不好，可以不好"'] },
          ].map(group => (
            <div key={group.label} style={{
              background: group.label.startsWith('❌') ? 'rgba(239,83,80,0.06)' : 'rgba(123,162,188,0.08)',
              border: `1px solid ${group.label.startsWith('❌') ? 'rgba(239,83,80,0.2)' : 'rgba(123,162,188,0.25)'}`,
              borderRadius: 10,
              padding: '14px 18px'
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
          给她的话：你不需要永远没事。一个人的「没事」撑了二十多年，已经很厉害了。
          但你现在身边有人，不用一直撑。
          说「有点难」，也可以。
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
