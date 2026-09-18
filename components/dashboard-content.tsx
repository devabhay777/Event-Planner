import Link from 'next/link'
import { Button } from './ui/button'

export async function DashboardContent({
  userId,
}: {
  userId: string | undefined
}) {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Your Events</h1>
          <p className="text-sm text-[var(--muted-foreground)]">
            Track attendee responses and manage invite links.
          </p>
        </div>

        <Button asChild>
          <Link href={'/events/new'}>Create Event</Link>
        </Button>
      </div>

      {/* list of events */}
    </div>
  )
}
