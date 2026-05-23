import type { LoginCredentials, AuthError } from '../types/auth'

export async function loginUser(credentials: LoginCredentials): Promise<void> {
  // Replace this with your real API call.
  // Throws an AuthError-shaped object on failure.
  throw new Error('loginUser is not implemented — wire up your API here.')
  void credentials
}

export function isAuthError(err: unknown): err is AuthError {
  return (
    typeof err === 'object' &&
    err !== null &&
    'code' in err &&
    'message' in err
  )
}
