import { useRef, useEffect, type ReactNode } from 'react'

// ── FadeUp hook ──────────────────────────────────────────────────────────
export function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

// ── FadeUp wrapper ────────────────────────────────────────────────────────
interface FadeUpProps {
  children: ReactNode
  delay?: number
  className?: string
}
export function FadeUp({ children, delay = 0, className = '' }: FadeUpProps) {
  const ref = useFadeUp()
  return (
    <div ref={ref} className={`fade-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

// ── Back + Share nav ──────────────────────────────────────────────────────
interface ArticleNavProps {
  onBack: () => void
  onShare: () => void
}
export function ArticleNav({ onBack, onShare }: ArticleNavProps) {
  return (
    <nav className="article-nav">
      <button className="back-btn" onClick={onBack}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        返回目录
      </button>
      <button className="share-btn-sm" onClick={onShare}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
        分享
      </button>
    </nav>
  )
}

// ── Callout ───────────────────────────────────────────────────────────────
interface CalloutProps {
  type?: 'warn' | 'warm' | 'info' | 'key'
  label?: string
  children: ReactNode
}
export function Callout({ type = 'key', label, children }: CalloutProps) {
  return (
    <div className={`callout callout-${type}`}>
      {label && <div className="callout-label">{label}</div>}
      <div className="callout-body">{children}</div>
    </div>
  )
}

// ── Script box ────────────────────────────────────────────────────────────
interface ScriptBoxProps {
  label: string
  children: ReactNode
}
export function ScriptBox({ label, children }: ScriptBoxProps) {
  return (
    <div className="script-box">
      <div className="script-label">{label}</div>
      <div className="script-text">{children}</div>
    </div>
  )
}
