// ── Auth helpers ──────────────────────────────────────────────────────────
// SHA-256 of 'baw:jakeby@0703'
const EXPECTED_HASH = '29426e61041adbf9a482c3641e920e5fdcec561cd8c2ee6e64f1dd5b12905b71'
const SESSION_KEY = 'baw_notes_auth'

async function sha256(str: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function login(username: string, password: string): Promise<boolean> {
  const hash = await sha256(`${username}:${password}`)
  if (hash === EXPECTED_HASH) {
    sessionStorage.setItem(SESSION_KEY, '1')
    return true
  }
  return false
}

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(SESSION_KEY) === '1'
}

export function logout(): void {
  sessionStorage.removeItem(SESSION_KEY)
}
