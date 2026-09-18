import { createNeonAuth } from '@neondatabase/auth/next/server'

export const auth = createNeonAuth({
  baseUrl: process.env.NEON_AUTH_BASE_URL!,
  cookies: {
    secret: process.env.NEON_AUTH_COOKIE_SECRET!,
    // sessionDataTtl: 300, // optional session_data cache TTL in seconds (default: 300)
  },
  // logLevel: 'silent', // disable Managed Better Auth logging
  // logLevel: 'debug',  // verbose proxy/upstream logging
})

export function getSession() {
  return auth.getSession()
}
