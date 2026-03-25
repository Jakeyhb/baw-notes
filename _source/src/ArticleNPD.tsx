import { FadeUp, ArticleNav, Callout, ScriptBox } from './shared'

interface Props { onBack: () => void; onShare: () => void }

function DamageCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="damage-card">
      <div className="dc-icon">{icon}</div>
      <div className="dc-title">{title}</div>
      <div className="dc-desc">{desc}</div>
    </div>
  )
}

function TriggerRow({ action, feel, react }: { action: string; feel: string; react: string }) {
  return (
    <div className="trigger-row">
      <div className="tr-action">{action}</div>
      <div className="tr-body">
        <div className="tr-feel">她感知到：{feel}</div>
        <div className="tr-react">表现：{react}</div>
      </div>
    </div>
  )
}

function TipsItem({ text, variant }: { text: string; variant: 'do' | 'dont' }) {
  return (
    <div className={`tips-item tips-${variant}`}>
      <span className="tips-icon">{variant === 'do' ? '✓' : '✕'}</span>
      <span>{text}</span>
    </div>
  )
}

export default function ArticleNPD({ onBack, onShare }: Props) {
  return (
    <div className="blog-container">
      <ArticleNav onBack={onBack} onShare={onShare} />

      <header className="article-header">
        <div className="article-tags">
          <span className="tag tag-accent">NPD创伤</span>
          <span className="tag">神经科学</span>
          <span className="tag">依恋理论</span>
          <span className="tag">深度分析</span>
        </div>
        <h1 className="article-title">当爱变成雷区<br />她为什么总在沟通时炸毛</h1>
        <div className="article-subtitle">
          NPD原生家庭虐待如何重塑一个女孩的神经系统，又如何让她在最亲密的关系里，最难以平静。
        </div>
        <div className="article-meta">
          <div className="author-chip">
            <div className="author-av">心</div>
            关系心理专题
          </div>
          <span className="meta-date">2026年3月25日</span>
          <span className="meta-time">约 15 分钟阅读</span>
        </div>
      </header>

      {/* LEAD */}
      <FadeUp>
        <p className="lead-para">
          很多人误解了「情绪不稳定」这件事，以为那只是性格问题，或者是矫情。
          但如果你了解NPD（自恋型人格障碍）父母对孩子做了什么，
          你会明白：那些「炸毛」背后，是一个神经系统在用它唯一学会的方式，
          应对一个它认为仍然危险的世界。这篇文章，是为了帮你看见她身后的那段历史。
        </p>
      </FadeUp>

      {/* S1 */}
      <FadeUp delay={50}><h2 className="sec-heading">01 · NPD父母到底做了什么</h2></FadeUp>
      <FadeUp delay={80}>
        <div className="sec-body">
          <p>NPD父母的虐待往往没有清晰的痕迹——没有显性暴力，却留下更深的创口。
          那是一种系统性的、对孩子内心世界的殖民。孩子不是一个独立的人，
          而是父母自我叙事的道具。</p>
        </div>
      </FadeUp>
      <FadeUp delay={100}>
        <div className="damage-grid">
          <DamageCard icon="🪞" title="情感否定" desc="「你太敏感了」「哪有那么严重」。孩子的感受被系统性否定，学会了不相信自己的内心。" />
          <DamageCard icon="⚖️" title="条件性的爱" desc="爱是奖惩工具。孩子学会了「我必须完美，才值得被爱」。" />
          <DamageCard icon="🌫️" title="煤气灯效应" desc="「没有的事」「你记错了」。孩子的现实感被持续扭曲，长大后极度自我怀疑。" />
          <DamageCard icon="🎭" title="情绪负责制" desc="「都是因为你我才这么难受」。孩子被迫承担父母的情绪，极度在意他人情绪变化。" />
          <DamageCard icon="🔄" title="不可预测性" desc="父母情绪像天气，变幻无常。孩子永远处于高度警觉，随时准备应对风暴。" />
          <DamageCard icon="🔒" title="边界侵犯" desc="不允许有秘密、不同意见、属于自己的空间。自我边界从未被允许发展。" />
        </div>
      </FadeUp>
      <FadeUp delay={120}>
        <blockquote className="pull-quote">
          这些伤害的特殊性在于——它们来自本该给你安全感的人。
          孩子无法说「这不对」，因为在孩子的世界里，父母就是真理。
        </blockquote>
      </FadeUp>

      {/* S2 */}
      <FadeUp delay={50}><h2 className="sec-heading">02 · 创伤如何重塑大脑</h2></FadeUp>
      <FadeUp delay={80}>
        <div className="sec-body">
          <p><strong>杏仁核的超级警觉。</strong>在持续恐惧的环境中长大，杏仁核会被训练得极度敏感——
          对轻微的「威胁信号」也会立刻响应。关键是：杏仁核的反应速度远快于前额叶（理性思考）。
          这意味着在理性介入之前，身体已经进入战斗或逃跑模式了。</p>
          <p><strong>前额叶的离线。</strong>当杏仁核被激活、皮质醇飙升时，前额叶会「暂时下线」。
          此时她无法逻辑推理、调节情绪、换位思考、记住她其实爱你。
          这不是不愿意，是大脑做不到。</p>
        </div>
      </FadeUp>
      <FadeUp delay={100}>
        <div className="wot-diagram">
          <div className="wot-zone wot-hyper">↑ 过度激活区 — 焦虑、愤怒、失控、攻击。「炸毛」在这里发生</div>
          <div className="wot-zone wot-safe">✦ 容纳之窗 — 能感受情绪同时保持理性。NPD幸存者的这个区间极窄</div>
          <div className="wot-zone wot-hypo">↓ 低度激活区 — 麻木、解离、沉默。「突然什么都不想说了」在这里</div>
        </div>
      </FadeUp>
      <FadeUp delay={120}>
        <Callout type="info" label="💡 关键认知">
          她从「平静」到「爆发」的速度那么快，不是任性，而是容纳之窗太窄——
          一点波动就会冲出边界。这是创伤留下的神经生理印记，不是性格缺陷。
        </Callout>
      </FadeUp>

      {/* S3 */}
      <FadeUp delay={50}><h2 className="sec-heading">03 · 情绪闪回：那个你看不见的导火索</h2></FadeUp>
      <FadeUp delay={80}>
        <div className="sec-body">
          <p>心理学家Pete Walker提出的「情绪闪回」是理解NPD创伤幸存者情绪反应最重要的钥匙之一。
          与视觉闪回不同，情绪闪回是<strong>突然重新体验童年时的情绪状态</strong>——
          没有清晰的画面，但恐惧、羞耻、绝望、愤怒的感觉，一瞬间以全强度涌来。</p>
          <p>触发情绪闪回的往往不是「大事」，而是一个<strong>语气</strong>、一次停顿、一个词汇——
          这些信号在她的神经系统里，和当年父母「要发火了」的信号完全一样。</p>
        </div>
      </FadeUp>
      <FadeUp delay={100}>
        <Callout type="warn" label="⚡ 实例说明">
          你说「你这样做是不对的」，她的大脑接收到的是：父母说「你总是让我失望……」<br />
          你实际只是在讨论一件事，她已经在应对一段童年记忆了。
        </Callout>
      </FadeUp>

      {/* S4 */}
      <FadeUp delay={50}><h2 className="sec-heading">04 · 为什么越亲密，越容易爆发</h2></FadeUp>
      <FadeUp delay={80}>
        <div className="sec-body">
          <p>这是NPD创伤最残忍的悖论：<em>她越爱你，越容易对你崩溃。</em>
          焦虑型依恋让她持续扫描「你是不是不爱我了」的信号，
          遗弃预警阈值极低，一点冷漠或沉默都可能触发童年量级的恐惧。</p>
          <p>更深层：在她的童年经历里，最亲近的人伤害了她最深。
          亲密关系在潜意识里和「危险」绑定在一起——<strong>越亲近，身体越应激</strong>。</p>
          <p>有时候「炸毛」也包含无意识的测试逻辑：如果我这么难相处，你还在吗？
          不是故意折磨你，是她的内心需要一次次验证：你是安全的，你不会走的。</p>
        </div>
      </FadeUp>

      {/* S5 */}
      <FadeUp delay={50}><h2 className="sec-heading">05 · 炸毛解码：每次爆发背后在说什么</h2></FadeUp>
      <FadeUp delay={80}>
        <div className="decode-list">
          {[
            { num: '1', title: '「你不相信我」', desc: '当你解释或用「客观事实」反驳她的感受，她听到的是：你的感受是错的，你不重要。她的爆发是在说：「请你相信我，看见我。」' },
            { num: '2', title: '「我又要被抛弃了」', desc: '你的沉默、走神、少了一个回复，在她的感知系统里可能等于「你要离开了」。炸毛是提前的绝望，是用愤怒阻止那个结局。' },
            { num: '3', title: '「我不被允许有这种感受」', desc: '「别那么敏感」把她扔回童年。她的爆发是在说：「我有权利感受我的感受。」' },
            { num: '4', title: '「我又一次看不见自己的样子」', desc: '被误解、被贴标签——她急着争辩，不只是在争这件事，是在争那个被看见的权利。' },
            { num: '5', title: '「我羞耻，所以我先攻击」', desc: '深层的羞耻感（「我是坏的」）会转化为愤怒。比起承受羞耻，攻击出去感觉更能控制局面。' },
          ].map(item => (
            <div key={item.num} className="decode-item">
              <div className="decode-num">{item.num}</div>
              <div>
                <div className="decode-title">{item.title}</div>
                <div className="decode-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* S6 */}
      <FadeUp delay={50}><h2 className="sec-heading">06 · 沟通时常见的触发点</h2></FadeUp>
      <FadeUp delay={80}>
        <div className="trigger-list">
          <TriggerRow action="说「你冷静一点」" feel="我的情绪不被允许存在" react="更加激动，反向强化" />
          <TriggerRow action="解释和辩护" feel="你不承认，在逃避责任" react="感到被否定，升级冲突" />
          <TriggerRow action="语气稍微硬了一点" feel="你在对我发火了（= 父母预兆）" react="防御性攻击或立刻崩溃" />
          <TriggerRow action="沉默、不回应" feel="你在冷落我，你要离开了" react="恐慌，追问，更大的情绪" />
          <TriggerRow action="打断她说话" feel="我又不被听见了" react="情绪短路，切断沟通" />
          <TriggerRow action="「这有什么大不了的」" feel="你在否认我痛苦的重量" react="委屈爆发，「你不懂我」" />
          <TriggerRow action="「我也很委屈」" feel="在争谁更痛苦" react="觉得不被支持，情绪升级" />
        </div>
      </FadeUp>

      {/* S7 */}
      <FadeUp delay={50}><h2 className="sec-heading">07 · 作为男友，你能做什么</h2></FadeUp>
      <FadeUp delay={80}>
        <Callout type="key" label="✦ 核心原则">
          先「接住情绪」，再谈道理。顺序反了，什么都没用。
        </Callout>
      </FadeUp>
      <FadeUp delay={100}>
        <div className="tips-grid">
          <div className="tips-col tips-do-col">
            <div className="tips-col-title">✅ 有效的做法</div>
            <TipsItem variant="do" text="降低声音、放慢语速——给她神经系统发「安全信号」" />
            <TipsItem variant="do" text="先验证感受：「我听到你了，你现在很难受」" />
            <TipsItem variant="do" text="「我不想吵，我想理解你，你愿意慢慢说吗」" />
            <TipsItem variant="do" text="给她空间但不消失：「我先缓一下，但我不走」" />
            <TipsItem variant="do" text="情绪退潮后再讨论，才有真正沟通的可能" />
            <TipsItem variant="do" text="一致性最重要：说到做到，不轻易威胁离开" />
          </div>
          <div className="tips-col tips-dont-col">
            <div className="tips-col-title">❌ 尽量避免</div>
            <TipsItem variant="dont" text="「你怎么又这样」——「又」把她定义成反复犯错的问题" />
            <TipsItem variant="dont" text="情绪高峰期讲道理——前额叶已下线，说什么都没用" />
            <TipsItem variant="dont" text="「你这样我没法沟通」——听起来像威胁，触发遗弃恐惧" />
            <TipsItem variant="dont" text="跟她争谁更委屈——两人都在抢被看见的位置" />
            <TipsItem variant="dont" text="走开不解释——沉默+离开 = 遗弃信号" />
          </div>
        </div>
      </FadeUp>
      <FadeUp delay={120}>
        <h3 className="sub-heading">具体可以说的话</h3>
        <div className="script-section">
          <ScriptBox label="当她开始激动时">「我注意到你现在很难受，我想听。你是觉得 __ 吗？」</ScriptBox>
          <ScriptBox label="当她说「你不懂我」">「你说得对，我可能没有完全理解，你可以帮我理解吗？」</ScriptBox>
          <ScriptBox label="需要暂停时">「我想先暂停一下，不是不想谈，是我想我们都冷静了再聊。我不走。」</ScriptBox>
          <ScriptBox label="事后复盘时">「昨天的事，我想聊聊。我想知道我有没有什么地方让你觉得不安全。」</ScriptBox>
        </div>
      </FadeUp>

      {/* S8 */}
      <FadeUp delay={50}><h2 className="sec-heading">08 · 写给她自己</h2></FadeUp>
      <FadeUp delay={80}>
        <blockquote className="pull-quote">
          你情绪不稳定，不是因为你「太难搞」，不是因为天生有问题，
          不是因为不够成熟，不是因为不爱他。<br /><br />
          是因为你用一个孩子的方式，在一个不安全的地方活下来了。
          那些让你存活的反应方式，现在跟着你进入了爱情。
        </blockquote>
      </FadeUp>
      <FadeUp delay={100}>
        <Callout type="info" label="💙 给她的方向">
          学习「情绪命名」：感受来临时说出「我现在感到恐惧/羞耻/委屈」而不是直接爆发。<br />
          寻找创伤疗愈方向的咨询师：NPD原生家庭的创伤需要专业支持。<br />
          了解自己的触发点：知道「这个反应是对现在还是对过去」。<br />
          给自己时间：创伤疗愈是神经系统层面的重新学习，需要时间和安全。
        </Callout>
      </FadeUp>
      <FadeUp delay={120}>
        <blockquote className="pull-quote">
          你值得一段让你感到安全的爱。不是那种需要你缩小自己才能维持的，
          而是那种可以让你慢慢学会伸展的爱。
        </blockquote>
      </FadeUp>

      {/* Footer nav */}
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
