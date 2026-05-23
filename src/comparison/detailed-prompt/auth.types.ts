export type AuthErrorCode = 'INVALID_CREDENTIALS' | 'ACCOUNT_LOCKED' | 'NETWORK_ERROR'

export interface AuthError {
  code: AuthErrorCode
  message: string
}

export interface LoginCredentials {
  email: string
  password: string
}
