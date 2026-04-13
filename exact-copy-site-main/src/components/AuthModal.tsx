import { useState } from 'react'
import { supabase, NEXT_APP_URL } from '@/lib/supabase'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

interface AuthModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode?: 'signup' | 'signin'
}

export default function AuthModal({ open, onOpenChange, mode = 'signup' }: AuthModalProps) {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const isSignUp = mode === 'signup'

  const handleGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${NEXT_APP_URL}/auth/callback` },
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSignUp && !agreed) {
      setError('Please agree to the Terms of Service to continue.')
      return
    }
    setLoading(true)
    setError('')
    const { error: authError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${NEXT_APP_URL}/auth/callback`,
      },
    })
    if (authError) {
      setError(authError.message)
    } else {
      setSuccess(true)
    }
    setLoading(false)
  }

  const handleOpenChange = (val: boolean) => {
    if (!val) {
      // Reset state when closing
      setTimeout(() => {
        setEmail('')
        setAgreed(false)
        setSuccess(false)
        setError('')
        setLoading(false)
      }, 200)
    }
    onOpenChange(val)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl p-8">
        <DialogHeader className="mb-2">
          <div className="text-2xl mb-4">📋</div>
          <DialogTitle className="text-xl font-bold">
            {isSignUp ? 'Create your account' : 'Welcome back'}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-1">
            Enter your email — we'll send a magic link. No password needed.
          </DialogDescription>
        </DialogHeader>

        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 border border-input rounded-xl px-4 py-3 text-sm font-medium hover:bg-muted transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Continue with Google
        </button>

        <div className="flex items-center gap-3 my-1">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {success ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-700 leading-relaxed">
            <strong>Check your inbox.</strong> We sent a magic link to <strong>{email}</strong>.
            <br />
            Click it and you'll land straight in the dashboard.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Email address</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@practice.com"
                required
                className="w-full border border-input rounded-xl px-4 py-3 text-sm bg-background text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors"
              />
            </div>

            {isSignUp && (
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                  className="mt-0.5 accent-primary"
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  I agree to the{' '}
                  <a href={`${NEXT_APP_URL}/terms`} target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-2">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href={`${NEXT_APP_URL}/privacy`} target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-2">
                    Privacy Policy
                  </a>
                </span>
              </label>
            )}

            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-semibold text-sm py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send magic link'}
            </button>

            <p className="text-xs text-center text-muted-foreground">
              {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
              <button
                type="button"
                onClick={() => {
                  setError('')
                  // The parent can toggle mode if needed — for now same form handles both
                }}
                className="underline underline-offset-2 text-foreground font-medium"
              >
                {isSignUp ? 'Sign in' : 'Sign up'}
              </button>
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
