import { getSession } from '@/lib/auth/server'
import { EventDetailContent } from '@/components/event_detail_content'

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ eventId: string }>
}) {
  const { eventId } = await params

  const session = await getSession()

  return <EventDetailContent userId={session.data?.user.id} eventId={eventId} />
}
