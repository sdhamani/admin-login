import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginFormValues } from './loginSchema'
import { loginUser, isAuthError } from './auth.service'
import type { AuthErrorCode } from './auth.types'

const AUTH_ERROR_MESSAGES: Record<AuthErrorCode, string> = {
  INVALID_CREDENTIALS: 'The email or password you entered is incorrect.',
  ACCOUNT_LOCKED:
    'Your account has been locked due to too many failed attempts. Contact support to regain access.',
  NETWORK_ERROR:
    'Unable to reach the server. Check your internet connection and try again.',
}

const REMEMBER_ME_KEY = 'login_remembered_email'

export default function LoginPage() {
  const [serverError, setServerError] = useState<string | null>(null)
  const [rememberMe, setRememberMe] = useState(
    () => !!localStorage.getItem(REMEMBER_ME_KEY)
  )

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  useEffect(() => {
    const savedEmail = localStorage.getItem(REMEMBER_ME_KEY)
    if (savedEmail) {
      setValue('email', savedEmail)
    }
  }, [setValue])

  const onSubmit = async (data: LoginFormValues) => {
    setServerError(null)
    try {
      await loginUser(data)
      if (rememberMe) {
        localStorage.setItem(REMEMBER_ME_KEY, data.email)
      } else {
        localStorage.removeItem(REMEMBER_ME_KEY)
      }
    } catch (err) {
      if (isAuthError(err)) {
        setServerError(AUTH_ERROR_MESSAGES[err.code] ?? err.message)
      } else {
        setServerError(AUTH_ERROR_MESSAGES.NETWORK_ERROR)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600">
            <LockIcon />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            Admin Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Sign in to your account to continue
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          {/* Server-level error banner */}
          {serverError && (
            <div
              role="alert"
              className="mb-6 flex gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
            >
              <AlertIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              <span>{serverError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={[
                  'block w-full rounded-lg border px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition',
                  'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0',
                  errors.email
                    ? 'border-red-400 bg-red-50 focus:ring-red-400'
                    : 'border-gray-300 bg-white hover:border-gray-400',
                ].join(' ')}
                placeholder="you@company.com"
                {...register('email')}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                  <InlineAlertIcon />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <a
                  href="/reset-password"
                  className="text-xs font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus-visible:underline"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? 'password-error' : undefined}
                className={[
                  'block w-full rounded-lg border px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition',
                  'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0',
                  errors.password
                    ? 'border-red-400 bg-red-50 focus:ring-red-400'
                    : 'border-gray-300 bg-white hover:border-gray-400',
                ].join(' ')}
                placeholder="••••••••"
                {...register('password')}
              />
              {errors.password && (
                <p id="password-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                  <InlineAlertIcon />
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 accent-indigo-600 focus:ring-2 focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={[
                'mt-2 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2',
                isSubmitting
                  ? 'cursor-not-allowed bg-indigo-400'
                  : 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800',
              ].join(' ')}
            >
              {isSubmitting ? (
                <>
                  <SpinnerIcon />
                  Signing in…
                </>
              ) : (
                'Sign in'
              )}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Internal use only &mdash; unauthorized access is prohibited.
        </p>
      </div>
    </div>
  )
}

// ── Inline SVG icons ──────────────────────────────────────────────────────────

function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-white"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3A5.25 5.25 0 0 0 12 1.5Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function InlineAlertIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-3.5 w-3.5 shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9c.577 1-.144 2.25-1.299 2.25H2.804c-1.155 0-1.875-1.25-1.299-2.25l5.196-9ZM8 5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 8 5Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function SpinnerIcon() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4Z"
      />
    </svg>
  )
}
