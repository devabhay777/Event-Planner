import { getSession } from '@/lib/auth/server'
import { DashboardContent } from '@/components/dashboard-content'

export default async function DashboardPage() {
  const session = await getSession()
  return <DashboardContent userId={session.data?.user.id} />
}
