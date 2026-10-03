import { NextRequest, NextResponse } from 'next/server'

function isServerActionPost(request: NextRequest) {
  if (request.method !== 'POST') return false
  const h = request.headers
  return Boolean(h.get('Next-Action') ?? h.get('next-action'))
}
export default async function proxy(request: NextRequest) {
  if (isServerActionPost(request)) {
    return NextResponse.next()
  }
  const { auth } = await import('@/lib/auth/server')
  return auth.middleware({ loginUrl: '/auth/sign-in' })(request)
}

export const config = {
  matcher: ['/dashboard/:path', '/events/:path*'],
}
