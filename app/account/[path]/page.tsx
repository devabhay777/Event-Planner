import { AccountView } from '@neondatabase/auth/react'

export default async function AccountPage({
  params,
}: {
  params: Promise<{ path: string }>
}) {
  return (
    <main className="container p-4 md:p-6">
      <AccountView />
    </main>
  )
}
