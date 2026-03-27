import { FadeUp, ArticleNav, Callout } from './shared'

interface Props { onBack: () => void; onShare: () => void }

export default function Article6({ onBack, onShare }: Props) {
  return (
    <div className="blog-container">
      <ArticleNav onBack={onBack} onShare={onShare} />

      <header className="article-header">
        <div className="article-tags">
          <span className="tag tag-accent">情绪心理</span>
          <span className="tag">人际关系</span>
          <span className="tag">自我价值</span>
        </div>
        <h1 className="article-title">那些总让你觉得<br />自己不够好的人</h1>
        <div className="article-subtitle">
          他们不一定真的比你优秀，但他们非常擅长用一种气场，
          让你在关系里持续消耗、持续怀疑自己。
        </div>
        <div className="article-meta">
          <div className="author-chip">
            <div className="author-av">心</div>
            内心记事编辑部
          </div>
          <span className="article-date">2026年3月27日</span>
          <span className="read-time">约 13 分钟阅读</span>
        </div>
      </header>

      <FadeUp>
        <p className="lead-para">
          身边有没有这样一种人：和他们相处，你说不上哪里不对劲，但回到家总感觉
          <strong>有点累，有点矮了一截</strong>。不是因为吵架了，不是因为发生了什么事——
          就是那种淡淡的、说不清的「我好像不太行」的感觉。
        </p>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">高姿态，是一种情绪操控</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            心理学上有个概念叫「单向权威建立」（unilateral status assertion）——
            某些人不是通过真实的能力或贡献来建立关系中的高位，而是通过姿态、
            表情、回应方式来持续暗示你：<strong>我的时间比你贵，我的标准比你高，你需要努力配得上我。</strong>
          </p>
          <p style={{ marginTop: 14 }}>
            这不是自信，是操控。真正自信的人不需要你一直处于下位来证明他在上位；
            而这类人需要。他们的高姿态是一种相对游戏——你越往上走，他们就越抬高标准。
            不是因为你不够好，是因为你「够好了」对他们没有利用价值。
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <Callout type="key" label="核心机制">
          高姿态不是自信的表现，是一种让对方持续处于「不确定感」的手段。
          你感到不够好，是设计好的结果，不是你真实的状态。
        </Callout>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">为什么偏偏是她，最难识破这个套路</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            在 NPD 家庭中长大的孩子，有一个深入骨髓的训练：
            <strong>高姿态的人往往掌握着爱与认可。</strong>
            父母姿态越高，越冷淡，反而越让孩子拼命表现——因为他们的认可是稀缺的，
            一旦得到就觉得自己终于「够格了」。
          </p>
          <p style={{ marginTop: 14 }}>
            这套逻辑在童年是生存策略，在成年后却变成了漏洞。
            高姿态的人在神经系统里触发的，是同一套古老的程序：
            <em>这个人很重要，我需要他/她认可我，我要努力。</em>
          </p>
          <p style={{ marginTop: 14 }}>
            所以她不是「太脆弱」，不是「想太多」。
            她的反应是完全可以理解的——只是被一个不值得的对象激活了。
          </p>
        </div>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">识别「高姿态低价值」的五个信号</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            这类人很擅长包装自己，尤其在初期。以下是一些具体的识别点：
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
          {[
            {
              num: '01',
              title: '相处后你感到莫名疲惫',
              desc: '不是因为做了什么，就是感觉累。这是神经系统在长时间处于"评估状态"后的消耗——他们让你一直在自我审视，这本身就是巨大的能量支出。',
            },
            {
              num: '02',
              title: '他们总是在接受，很少在给予',
              desc: '关系的本质是价值流动。高姿态低价值的人很善于接受资源、情感、时间，但在你最需要的时候，他们往往缺席、敷衍，或把帮助当成恩赐。',
            },
            {
              num: '03',
              title: '他们的故事永远比你精彩',
              desc: '你分享一件事，他们会不动声色地扯到自己更好的版本。这种「降维」不是无意的，是一种持续打压的方式——让你觉得自己的事不值一提。',
            },
            {
              num: '04',
              title: '你主动，他们被动；你热情，他们淡漠',
              desc: '这种不对称是刻意维持的。主动的那方通常更投入，被动的那方掌握主控权。这种动态最容易让有焦虑型依恋的人上瘾——追逐一个永远若即若离的人。',
            },
            {
              num: '05',
              title: '你不敢直接表达需求',
              desc: '因为你隐约知道，说出来会被评判、被嘲笑，或者干脆得不到回应。这种不安全感不是偶然的，是在关系里被训练出来的。',
            },
          ].map(item => (
            <div key={item.num} style={{
              display: 'flex',
              gap: 16,
              padding: '18px 20px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 12,
            }}>
              <div style={{
                fontSize: 18, fontWeight: 900, color: 'var(--accent)',
                fontFamily: 'var(--serif)', minWidth: 28, paddingTop: 2,
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
        <h2 className="section-heading">「价值交换」不是冷漠，是清醒</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            有人听到「价值交换」会觉得功利、不真诚。但这里说的不是把关系变成生意，
            而是一个简单的判断：<strong>这段关系里，你们是在彼此滋养，还是只有一方在消耗？</strong>
          </p>
          <p style={{ marginTop: 14 }}>
            真正有价值的关系不需要你一直表现、一直努力配得上。
            对方不会让你觉得「我得再好一点才行」，而是会让你觉得「现在的我也可以」。
          </p>
          <p style={{ marginTop: 14 }}>
            高姿态低价值的人给不了这种感觉——不是因为你不够格，
            是因为他们的核心需求就是让你永远不够格。
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 8 }}>
          {[
            {
              type: '消耗型关系的感受',
              color: 'var(--accent)',
              signs: [
                '相处后总感到疲惫',
                '说话前要先想「他会怎么看」',
                '隐约觉得自己不够好',
                '不敢提出自己的需求',
              ],
            },
            {
              type: '滋养型关系的感受',
              color: 'var(--accent2)',
              signs: [
                '相处后感到轻松、被接住',
                '可以说「我今天不太好」',
                '被喜欢的感觉不需要靠表现换来',
                '对方的关心是真实落地的',
              ],
            },
          ].map(item => (
            <div key={item.type} style={{
              background: 'var(--surface)',
              borderTop: `3px solid ${item.color}`,
              borderRadius: 12,
              padding: '16px 18px',
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
        <h2 className="section-heading">不被表象绑架，是一种情绪自主</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            高姿态低价值的人往往有很好的「外包装」——他们可能学历不错、谈吐流利、
            在朋友圈看起来精彩纷呈。这不是说这些东西都是假的，
            而是说：<strong>外在呈现的精彩不等于关系里真实的给予能力。</strong>
          </p>
          <p style={{ marginTop: 14 }}>
            一个人真正的价值体现在：当你不好的时候，他们在哪里。
            当你需要的时候，他们是靠近还是消失。当你说出真实感受，他们是接住还是绕开。
          </p>
          <p style={{ marginTop: 14 }}>
            不需要戒备所有人，但可以慢慢练习一件事：
            把「他的气场让我觉得自己不行」和「他真的让我的生活变得更好」分开看。
            前者是感受，后者才是判断依据。
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <Callout type="info" label="一个练习">
          下次和某人相处后，不问「他喜不喜欢我」，
          只问一件事：<em>「和他待在一起，我感到轻松，还是紧绷？」</em>
          身体的答案比分析更诚实。
        </Callout>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">作为伴侣，你能帮她做什么</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            如果她身边有这样的人——同事、旧友、某个她说不上为什么就不自在的人——
            你没办法替她切断所有消耗性关系，但你能做一件事：
          </p>
          <p style={{ marginTop: 14 }}>
            <strong>成为她最稳定的「对照组」。</strong>
          </p>
          <p style={{ marginTop: 14 }}>
            当她在你这里感受到足够多的「不需要表现也被接受」，
            神经系统会慢慢重新校准什么叫「正常的关系」。
            那些消耗性的互动就会越来越清晰地被她自己识别出来——
            不是因为你说了什么，而是因为对比太明显了。
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
          {[
            {
              label: '❌ 不太管用的做法',
              bg: 'rgba(239,83,80,0.06)',
              border: 'rgba(239,83,80,0.2)',
              color: '#ef5350',
              items: [
                '"那种人不值得你放在心上"（她知道，但感受控制不了）',
                '"你为什么还要跟他来往"（会让她觉得自己很蠢）',
                '"你就是太在意别人看法了"（在贴标签，不在帮忙）',
              ],
            },
            {
              label: '✓ 真的有效的做法',
              bg: 'rgba(123,162,188,0.08)',
              border: 'rgba(123,162,188,0.25)',
              color: 'var(--accent2)',
              items: [
                '"我注意到你见完他回来都有点不对劲，是发生什么了吗？"',
                '"不管他怎么想，我觉得你……（具体说一件真实的事）"',
                '不评判，就是好好陪着她把那个感受说出来',
              ],
            },
          ].map(group => (
            <div key={group.label} style={{
              background: group.bg,
              border: `1px solid ${group.border}`,
              borderRadius: 10,
              padding: '14px 18px',
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: group.color, marginBottom: 10 }}>
                {group.label}
              </div>
              {group.items.map((item, i) => (
                <div key={i} style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.75, padding: '2px 0' }}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={70}>
        <Callout type="key" label="写给她">
          你不是不够好，你只是太习惯用「他/她认不认可我」来衡量自己了。
          但他们的高姿态不是标准，他们能不能真正给予你才是。
          你值得的，是那种让你待在里面感到轻松的关系。
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
