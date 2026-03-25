import { FadeUp, ArticleNav, Callout, ScriptBox } from './shared'

interface Props { onBack: () => void; onShare: () => void }

function SitCard({ icon, title, desc, accent = false }: { icon: string; title: string; desc: string; accent?: boolean }) {
  return (
    <div className={`sit-card ${accent ? 'sit-card-accent' : ''}`}>
      <div className="sit-icon">{icon}</div>
      <div>
        <div className="sit-title">{title}</div>
        <div className="sit-desc">{desc}</div>
      </div>
    </div>
  )
}

function CycleStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="cy-step">
      <div className="cy-num">{num}</div>
      <div>
        <div className="cy-title">{title}</div>
        <div className="cy-desc">{desc}</div>
      </div>
    </div>
  )
}

function HabitRow({ time, action, why }: { time: string; action: string; why: string }) {
  return (
    <div className="habit-row">
      <div className="habit-time">{time}</div>
      <div className="habit-body">
        <div className="habit-action">{action}</div>
        <div className="habit-why">{why}</div>
      </div>
    </div>
  )
}

export default function ArticleSituation({ onBack, onShare }: Props) {
  return (
    <div className="blog-container">
      <ArticleNav onBack={onBack} onShare={onShare} />

      <header className="article-header">
        <div className="article-tags">
          <span className="tag tag-accent2">情境分析</span>
          <span className="tag">搬家</span>
          <span className="tag">日常指南</span>
          <span className="tag">深度分析</span>
        </div>
        <h1 className="article-title">每天十二小时，加上一场搬家<br />她的情绪，为什么现在最难</h1>
        <div className="article-subtitle">
          两件事同时压过来：长期缺席的伴侣 + 失去熟悉城市的稳定感。
          对一个从NPD家庭长大的女孩来说，这是双重触发，不是普通的「压力大」。
        </div>
        <div className="article-meta">
          <div className="author-chip">
            <div className="author-av">心</div>
            关系心理专题
          </div>
          <span className="meta-date">2026年3月25日</span>
          <span className="meta-time">约 14 分钟阅读</span>
        </div>
      </header>

      {/* LEAD */}
      <FadeUp>
        <p className="lead-para">
          每天早上出门，回来已是深夜。这一来一回，大约十二个小时。加上马上要从深圳搬去杭州——
          这两件事落在一个NPD原生家庭的幸存者身上，不是「两份压力」，而是她神经系统里
          两个最核心的恐惧同时被激活：<strong>「你不在我身边」和「我的世界要崩了」</strong>。
        </p>
      </FadeUp>

      {/* S1 */}
      <FadeUp delay={50}><h2 className="sec-heading">01 · 每天十二小时：持续的「微型分离」</h2></FadeUp>
      <FadeUp delay={80}>
        <div className="sec-body">
          <p>对焦虑型依恋的NPD创伤幸存者来说，每次分离都会激活一个古老的恐惧：
          <strong>「我被留下了」</strong>。</p>
          <p>十二个小时，是她独处的时间远远多于和你在一起的时间。她的大脑不会「放空」——
          它会持续运转，扫描各种可能的威胁信号，消耗巨量情绪资源。
          等你回家时，她已经在「情绪过载」的边缘待了很久了。
          哪怕一句话说得不对，就像往一个装满水的杯子里再倒一滴——
          她不是因为那一滴爆发的，是因为杯子早就满了。</p>
        </div>
      </FadeUp>
      <FadeUp delay={100}>
        <div className="sit-grid">
          <SitCard icon="🌅" title="出门的那一刻" desc="分离焦虑被激活。对她的神经系统来说，更像是「不知道你还会不会回来」。" />
          <SitCard icon="📵" title="白天你在忙，回复少" desc="消息不回或回得晚，她的大脑会自动填补：「他不想理我」「我是不是做错了什么」。" />
          <SitCard icon="🌆" title="你回家，但很累" desc="你的疲惫状态可能被读成「情绪疏远」。你只是累，她感觉到的是「他的心不在」。" accent />
          <SitCard icon="🔋" title="她的情绪资源已耗尽" desc="独处十二小时、持续高度警觉——等你回来，她已经没有余量去理性沟通了。" accent />
        </div>
      </FadeUp>
      <FadeUp delay={120}>
        <blockquote className="pull-quote">
          她晚上对你「炸毛」，不是因为你做了什么严重的事。
          是因为她等了十二个小时，把所有的情绪都憋到了你回来的那一刻。
          你成了那个最后的出口——因为你是她最安全的那个人。
        </blockquote>
      </FadeUp>

      {/* S2 */}
      <FadeUp delay={50}><h2 className="sec-heading">02 · 搬家：当最后一块安全锚被连根拔起</h2></FadeUp>
      <FadeUp delay={80}>
        <div className="sec-body">
          <p>在NPD家庭里，家本身往往是不安全的。这些孩子会在家庭之外——熟悉的街道、
          固定的咖啡馆、几个可靠的朋友身上，慢慢建立起替代性的<strong>安全锚</strong>。
          这些是她的神经系统每天校准「我还好」的参照物。</p>
          <p>搬去杭州，意味着这些安全锚<strong>全部消失</strong>。</p>
        </div>
      </FadeUp>
      <FadeUp delay={100}>
        <div className="loss-list">
          {[
            { dot: 'red', text: '熟悉的物理空间——那些知道自己在哪里的地方。新城市的陌生感会持续触发微量应激，直到重建空间记忆。' },
            { dot: 'red', text: '已有的社交支撑网络——哪怕只有一两个朋友，也是她在「你不在」时的缓冲。到了新城市，这个缓冲不存在了，她只有你。' },
            { dot: 'orange', text: '对日常生活的掌控感——哪家超市、哪条路、怎么坐地铁。这些微小的「我能搞定」是她每天重建掌控感的方式，新城市全部清零。' },
            { dot: 'orange', text: '独立性的感知——如果她是为了跟着你去杭州，这在潜意识里可能触发童年的「我没有选择」——那种被迫跟着父母决定走的感觉。' },
          ].map((item, i) => (
            <div key={i} className="loss-item">
              <span className={`loss-dot loss-dot-${item.dot}`} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </FadeUp>
      <FadeUp delay={120}>
        <Callout type="warn" label="⚠️ 关键认知">
          她对搬家的抗拒不只是「舍不得深圳」。更深层的是：
          <strong>「在一个全新的地方，只有你一个人是我的依靠。而你每天还要离开十二个小时。我要怎么撑过去？」</strong>
        </Callout>
      </FadeUp>

      {/* S3 */}
      <FadeUp delay={50}><h2 className="sec-heading">03 · 两件事叠加：复合效应</h2></FadeUp>
      <FadeUp delay={80}>
        <div className="sec-body">
          <p>两件事同时发生，对NPD创伤幸存者的神经系统来说，产生的效果不是「1+1=2」，
          而更接近指数级放大。</p>
        </div>
      </FadeUp>
      <FadeUp delay={100}>
        <div className="cycle-list">
          <CycleStep num="1" title="慢性焦虑积累（每天）" desc="每天十二小时的分离，持续激活低强度的遗弃焦虑。皮质醇长期偏高，神经系统始终处于轻度警戒。" />
          <div className="cy-arrow">↓</div>
          <CycleStep num="2" title="搬家的「大型威胁」出现" desc="一个确定要发生的重大变动——失去安全锚、失去独立性、进入未知城市。全面激活的威胁信号，叠加在已高度紧绷的神经系统上。" />
          <div className="cy-arrow">↓</div>
          <CycleStep num="3" title="容纳之窗极度压缩" desc="平时就很窄的情绪容纳窗口，在双重压力下变得更窄。她能「平静沟通」的余量几乎不存在。" />
          <div className="cy-arrow">↓</div>
          <CycleStep num="4" title="爆发频率上升，强度更大" desc="你观察到的「最近情绪特别难」不是错觉。这是两个核心恐惧同时高强度运转的结果。不是她「变差了」，是她的系统超负荷了。" />
        </div>
      </FadeUp>

      {/* S4 */}
      <FadeUp delay={50}><h2 className="sec-heading">04 · 关于搬家，怎么跟她开口</h2></FadeUp>
      <FadeUp delay={80}>
        <div className="sec-body">
          <p>搬家沟通方式可能比搬家本身更重要。
          「被告知」和「被邀请参与」对NPD创伤幸存者来说是两种完全不同的体验——
          前者触发「我没有发言权」，后者让她感受到「这件事里我有位置」。</p>
        </div>
      </FadeUp>
      <FadeUp delay={100}>
        <div className="script-section">
          <ScriptBox label="❌ 容易踩雷的说法">
            「我们要搬去杭州了，你收拾一下吧。」<br />
            「这边工作机会更好，就这样吧。」<br />
            「你跟着我过去就好了，别担心。」
          </ScriptBox>
          <ScriptBox label="✓ 先给她表达的空间">
            「我想跟你认真聊聊搬去杭州这件事。我知道这对你来说可能不只是换个城市，
            你在深圳建立的东西都在这里。我想听听你真实的感受，不管是什么。」
          </ScriptBox>
          <ScriptBox label="✓ 邀请她一起规划">
            「我们可以一起看看杭州，哪些区住着舒服，你会喜欢什么样的生活。
            你有什么需要提前安排好的——我们一起想。」
          </ScriptBox>
          <ScriptBox label="✓ 正视最难的部分">
            「我知道搬过去之后我还是要上班、还是会很忙。那段时间你一个人在陌生地方，
            我不想假装这很轻松。我们要一起想，怎么让那个阶段对你来说不那么难。」
          </ScriptBox>
        </div>
      </FadeUp>
      <FadeUp delay={120}>
        <Callout type="info" label="💡 重要原则">
          她最需要感受到的不是「去杭州会很好」，而是
          <strong>「这件事里，你的感受被认真对待了，你不是被动跟着走的」</strong>。
        </Callout>
      </FadeUp>

      {/* S5 */}
      <FadeUp delay={50}><h2 className="sec-heading">05 · 每天可以做的五个稳定信号</h2></FadeUp>
      <FadeUp delay={80}>
        <div className="sec-body">
          <p>「一致性」和「可预测性」是最有效的安全信号。
          你无法消除不确定性，但你可以成为她生活里那个<strong>可预测的锚点</strong>。</p>
        </div>
      </FadeUp>
      <FadeUp delay={100}>
        <div className="habit-table">
          <div className="habit-header">每日稳定信号</div>
          <HabitRow time="出门前" action="一个固定的道别仪式，哪怕只有30秒" why="给她神经系统一个「我知道你走了，我也知道你会回来」的信号" />
          <HabitRow time="工作中" action="一条短消息：「在忙，想到你了」" why="打断她长达数小时的「不知道你在哪」的扫描模式" />
          <HabitRow time="下班前" action="「X点出门，X点到家」给个预期时间" why="减少等待期的焦虑。「不知道几点回来」比「晚点才回来」更难熬" />
          <HabitRow time="回家后15分钟" action="不看手机，不开电视，先和她待在一起" why="这15分钟是她一整天最需要的「连接确认」" />
          <HabitRow time="睡前" action="如果今天有摩擦，说一句「今天我们都不容易，明天继续」" why="不要带着隔阂入睡。「睡前的距离」会被放大成「他不爱我了」" />
        </div>
      </FadeUp>

      {/* S6 */}
      <FadeUp delay={50}><h2 className="sec-heading">06 · 过渡期：提前可以做的五件事</h2></FadeUp>
      <FadeUp delay={80}>
        <div className="sec-body">
          <p>搬去杭州后的头三个月，可能是压力最大的时期。
          知道这个时间窗口的存在，可以帮你在最难的时候不把它解读成「她就是永远这样」。</p>
        </div>
      </FadeUp>
      <FadeUp delay={100}>
        <div className="transition-list">
          {[
            { num: '1', title: '一起探索杭州', desc: '搬家前至少去一次，一起找到几个你们喜欢的地方。那些地方会成为她在新城市的第一批安全锚。' },
            { num: '2', title: '让她保持一件「跨城市的事」', desc: '深圳的朋友、一个在线课程、一个她自己的项目。让她感觉搬去杭州不等于「放弃之前的一切」。' },
            { num: '3', title: '讨论「独处计划」', desc: '你上班的时候她要怎么过？一起想她在杭州想建立的日常。让她感到新的生活是有内容的，不只是「等你回来」。' },
            { num: '4', title: '接受前三个月的不完美', desc: '跟她说（也跟自己说）：适应期情绪波动很正常，不代表这个选择是错的。给彼此三个月的宽容。' },
            { num: '5', title: '考虑心理咨询的支持', desc: '这不是说她「有病」，而是在这段特殊时期，有专业支持会对你们两个都轻松很多。' },
          ].map(item => (
            <div key={item.num} className="trans-item">
              <div className="trans-num">{item.num}</div>
              <div>
                <div className="trans-title">{item.title}</div>
                <div className="trans-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* Closing */}
      <FadeUp delay={50}><h2 className="sec-heading">07 · 给这段关系一个框架</h2></FadeUp>
      <FadeUp delay={80}>
        <div className="sec-body">
          <p>你现在面对的不是一个「难搞的女朋友」，而是一段真实的创伤，
          恰好在你们关系里最脆弱的时间节点上被最大程度地激活了。</p>
        </div>
      </FadeUp>
      <FadeUp delay={100}>
        <blockquote className="pull-quote">
          理解不是无限承受。你可以在理解她的同时，也认真说出你的需要。
          「我知道你很难，我也很累。我们能不能一起想，怎么让这段时间对我们两个都好一点。」
        </blockquote>
      </FadeUp>
      <FadeUp delay={120}>
        <Callout type="key" label="✦ 写给他">
          你来研究这件事，说明你是认真的。但你不需要成为她的治疗师，也不需要无限扛下去。
          如果有机会，可以一起看这篇文章——不是为了「教育她」，
          而是让她知道你在用心理解她的处境。有时候，被看见本身，就是最有效的安慰。
        </Callout>
      </FadeUp>

      <FadeUp delay={140}>
        <div className="article-footer">
          <button className="back-btn" onClick={onBack}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            返回目录
          </button>
          <button className="share-btn" onClick={onShare}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
            分享这篇
          </button>
        </div>
      </FadeUp>
    </div>
  )
}
