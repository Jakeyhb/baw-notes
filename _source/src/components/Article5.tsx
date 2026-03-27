import { FadeUp, ArticleNav, Callout } from './shared'

interface Props { onBack: () => void; onShare: () => void }

export default function Article5({ onBack, onShare }: Props) {
  return (
    <div className="blog-container">
      <ArticleNav onBack={onBack} onShare={onShare} />

      <header className="article-header">
        <div className="article-tags">
          <span className="tag tag-accent">情绪心理</span>
          <span className="tag">躯体化</span>
          <span className="tag">神经科学</span>
        </div>
        <h1 className="article-title">身体记住了一切<br />那些创伤留下的躯体信号</h1>
        <div className="article-subtitle">
          情绪说不出口的时候，身体会代劳。
          头痛、胃痛、肩膀紧绷——这些不一定是「病」，
          可能是她的神经系统在用身体语言说话。
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
          「身体记住了一切」（The Body Keeps the Score）是创伤研究领域最重要的发现之一，也是《身体从未忘记》这本书的核心命题。它的意思是：
          当心理创伤没有被充分处理，它不会就此消失——它会<strong>储存在身体里</strong>，
          以肌肉紧张、慢性疼痛、消化问题、睡眠障碍的形式持续存在。
        </p>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">为什么身体会「储存」情绪</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            从神经科学的角度来看，威胁性的记忆和情绪并不仅仅储存在大脑的叙事记忆区域（海马体），
            而是同时触发全身的生理反应——心率、肌肉张力、呼吸模式、内分泌系统。
          </p>
          <p style={{ marginTop: 14 }}>
            正常情况下，一次危险过去之后，神经系统会「复位」，身体回到平静状态。
            但如果威胁是持续的（比如 NPD 家庭中的长期精神压力），或者太强烈以至于无法充分处理，
            神经系统就会停留在一种慢性的激活状态里——<strong>战斗或逃跑模式一直开着，只是音量调低了</strong>。
          </p>
          <p style={{ marginTop: 14 }}>
            结果是：即使危险早已过去，身体仍然保持着「随时准备应对威胁」的姿态。
            这不是她「矫情」，这是神经系统做的事，不受意识控制。
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <Callout type="key">
          躯体化不是「想太多」导致的，也不是「意志力不够」。<br />
          它是一个长期过载的神经系统在身体层面留下的真实印记。
        </Callout>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">常见的躯体化信号</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
          {[
            {
              area: '🤕 头部与颈肩',
              signals: '紧张性头痛、偏头痛、颈肩长期紧绷、磨牙（睡眠时咬紧牙关）',
              meaning: '慢性压力和焦虑最常见的躯体化区域。颈部是情绪"卡住"的典型位置。'
            },
            {
              area: '🫁 胸部与呼吸',
              signals: '胸口发闷或发紧、呼吸浅且快、有时感觉喘不过气',
              meaning: '焦虑激活交感神经系统时，呼吸模式会改变。长期习惯浅呼吸会持续维持轻度焦虑状态。'
            },
            {
              area: '🫀 消化系统',
              signals: '肠易激综合症、胃痛、恶心、食欲波动大（暴食或完全不想吃）',
              meaning: '肠道有"第二大脑"之称，拥有大量神经元，对情绪状态极为敏感。'
            },
            {
              area: '😴 睡眠',
              signals: '入睡困难（大脑停不下来）、容易惊醒、多梦噩梦、醒来仍然疲惫',
              meaning: '神经系统处于慢性过激状态时，进入休息模式变得困难——身体觉得「现在不安全，不能放松」。'
            },
            {
              area: '💪 肌肉与姿势',
              signals: '背痛、身体总是疲惫、姿势趋向收缩（含胸、低头）',
              meaning: '长期防御性姿势（蜷缩保护自己）会在肌肉记忆中固化，即使危险不在了，身体还在防御。'
            }
          ].map(item => (
            <div key={item.area} style={{
              padding: '16px 20px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 12
            }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)', marginBottom: 8 }}>{item.area}</div>
              <div style={{ fontSize: 14, color: 'var(--accent)', marginBottom: 6, lineHeight: 1.6 }}>
                <strong>表现：</strong>{item.signals}
              </div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>
                {item.meaning}
              </div>
            </div>
          ))}
        </div>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">身体说话时，怎么听</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            躯体化信号不是敌人，它们是身体在试图沟通。真正的处理方式，
            不是「不要想那么多」（意识层面无法直接关掉神经系统的反应），
            而是<strong>通过身体来安抚神经系统</strong>。
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 8 }}>
          {[
            {
              title: '4-7-8 呼吸',
              desc: '吸气4秒 → 屏住7秒 → 呼气8秒。长呼气激活副交感神经，直接给神经系统发「安全信号」。',
              icon: '🌬️'
            },
            {
              title: '接地技术',
              desc: '感受双脚踩在地面的重量，慢慢说出5个你看到的东西。把神经系统拉回「现在、这里、安全」。',
              icon: '🌱'
            },
            {
              title: '温热接触',
              desc: '热水淋浴、热水袋、温热饮料——温度刺激迷走神经，是有科学依据的镇定方式。',
              icon: '☕'
            },
            {
              title: '身体扫描',
              desc: '闭上眼睛，从头到脚慢慢扫描哪里是紧绷的，只是注意它，不需要改变。这本身就是一种放松。',
              icon: '🔍'
            }
          ].map(item => (
            <div key={item.title} style={{
              padding: '16px 18px',
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: 12
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 6 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </FadeUp>

      <hr className="section-divider" />

      <FadeUp>
        <h2 className="section-heading">作为伴侣能做什么</h2>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="section-body">
          <p>
            当她说「头很痛」「胃不舒服」「很累但睡不着」——这些可能不只是身体的事。
            不需要每次都问「是不是情绪问题」，但可以：
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
          {[
            '给她物理上的安慰——一杯热水，一个手放在她背上，不需要说任何话',
            '减少外部刺激——把环境调得安静一点，声音、光线、屏幕都是负担',
            '不要催她「好起来」——身体信号的平息需要时间，催只会加深羞耻',
            '温和的陪伴——什么都不做，只是在旁边，对过度激活的神经系统是有帮助的'
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: 12, padding: '12px 16px',
              background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10
            }}>
              <span style={{ color: 'var(--accent2)', fontWeight: 700, fontSize: 16 }}>·</span>
              <span style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{item}</span>
            </div>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={70}>
        <Callout type="warm">
          给她的话：你的身体没有出卖你，它在保护你——用它学会的唯一方式。
          现在你可以开始教它新的方式：安全在这里，可以放松了。
          这需要时间，但每一次深呼吸，都是一次告诉神经系统「现在是安全的」的练习。
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
