import { useState, useEffect } from 'react'
import { isAuthenticated, logout } from './auth'
import { type View } from './types'
import Login from './components/Login'
import Home from './components/Home'
import ArticleNPD from './components/ArticleNPD'
import ArticleSituation from './components/ArticleSituation'
import Article6 from './components/Article6'
import Article3 from './components/Article3'
import Article4 from './components/Article4'
import Article5 from './components/Article5'
import './styles/app.css'

export default function App() {
  const [authed, setAuthed] = useState<boolean>(isAuthenticated())
  const [view, setView] = useState<View>('home')
  const [progress, setProgress] = useState(0)
  const [toast, setToast] = useState(false)

  // Reading progress bar
  useEffect(() => {
    function onScroll() {
      const el = document.documentElement
      const scrolled = el.scrollTop || document.body.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function navigate(v: View) {
    setView(v)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  function handleShare() {
    const url = window.location.href
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(showToast)
    } else {
      const ta = document.createElement('textarea')
      ta.value = url
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      showToast()
    }
  }

  function showToast() {
    setToast(true)
    setTimeout(() => setToast(false), 2500)
  }

  function handleLogout() {
    logout()
    setAuthed(false)
    setView('home')
  }

  if (!authed) {
    return <Login onSuccess={() => setAuthed(true)} />
  }

  return (
    <>
      {/* Reading Progress */}
      {view !== 'home' && (
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      )}

      {/* Logout button */}
      <button className="logout-btn" onClick={handleLogout} title="退出">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      </button>

      {/* Toast */}
      <div className={`toast ${toast ? 'show' : ''}`}>链接已复制</div>

      {/* Views */}
      {view === 'home' && <Home onNavigate={navigate} />}
      {view === 'article-npd' && (
        <ArticleNPD onBack={() => navigate('home')} onShare={handleShare} />
      )}
      {view === 'article-situation' && (
        <ArticleSituation onBack={() => navigate('home')} onShare={handleShare} />
      )}
      {view === 'article-6' && (
        <Article6 onBack={() => navigate('home')} onShare={handleShare} />
      )}
      {view === 'article-3' && (
        <Article3 onBack={() => navigate('home')} onShare={handleShare} />
      )}
      {view === 'article-4' && (
        <Article4 onBack={() => navigate('home')} onShare={handleShare} />
      )}
      {view === 'article-5' && (
        <Article5 onBack={() => navigate('home')} onShare={handleShare} />
      )}
    </>
  )
}
