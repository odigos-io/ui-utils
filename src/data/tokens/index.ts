import { TokenPayload } from '../../@types'

export const MOCK_TOKENS: TokenPayload[] = [
  {
    name: 'Odigos',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    issuedAt: 0,
    // in 30 days - should be OK
    expiresAt: new Date().getTime() + 1000 * 60 * 60 * 24 * 30,
  },
  {
    name: 'Odigos',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    issuedAt: 0,
    // in 24 hours - should show warning
    expiresAt: new Date().getTime() + 1000 * 60 * 60 * 24,
  },
  {
    name: 'Odigos',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    issuedAt: 0,
    // 24 hours ago - should show error
    expiresAt: new Date().getTime() - 1000 * 60 * 60 * 24,
  },
]
