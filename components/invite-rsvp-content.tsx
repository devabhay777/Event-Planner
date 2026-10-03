import Link from 'next/link'
import { Button } from './ui/button'
import { prisma } from '@/lib/prisma'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import type { RsvpStatus as PrismaRsvpStatus } from '@/app/generated/prisma/enums'
import { Badge } from './ui/badge'
import { notFound } from 'next/navigation'
import { Form } from 'react-hook-form'
import { FormField } from './ui/form'
import { Label } from './ui/label'
import { Field } from './ui/field'
import { Input } from './ui/input'
import { submitOrUpdateRsvpAction } from '@/lib/actions/event'

export async function InviteRsvpContent({
  token,
  submitted,
}: {
  token: string
  submitted: boolean
}) {
  const row = await prisma.eventInvite.findFirst({
    where: { token },
    include: {
      event: {
        select: {
          id: true,
          title: true,
          description: true,
          location: true,
          eventDate: true,
        },
      },
    },
  })

  if (!row) {
    notFound()
  }

  const e = row.event
  const event = {
    title: e.title,
    description: e.description,
    location: e.location,
    eventDate: e.eventDate ? e.eventDate.toISOString() : null,
  }

  const submitRsvpForToken = submitOrUpdateRsvpAction.bind(null, token)

  return (
    <div className="mx-auto w-full max-w-2xl">
      <Card>
        <CardHeader className="space-y-3">
          <Badge variant="secondary" className="w-fit">
            RSVP
          </Badge>
          <CardTitle>{event.title}</CardTitle>
          <p className="text-sm text-[var[--muted-foreground]]">
            {event.eventDate
              ? new Date(event.eventDate).toLocaleString()
              : 'No date selected'}

            {event.location ? `- ${event.location}` : ''}
          </p>
          {event.description ? (
            <p className="text-sm text-[var(--muted-foreground)]">
              {event.description}
            </p>
          ) : null}
        </CardHeader>
        <CardContent>
          {submitted ? (
            <p className="mb-4 rounded-md border border-[var(--accent)]/50 bg-[var(--accent)]/15 px-2 py-2">
              Thanks. Your RSVP has been recorded (or updated)
            </p>
          ) : null}
          <form action={submitRsvpForToken}>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="mb-2"
              ></Input>
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="mb-2"
              ></Input>
            </Field>

            <Field>
              <Label htmlFor="status">Attendance</Label>
              <select
                id="status"
                name="status"
                required
                defaultValue=""
                className="flex h-10 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 mb-2"
              >
                <option value="going" className="bg-[#2b2b2b]">
                  Going
                </option>
                <option value="maybe" className="bg-[#2b2b2b]">
                  Maybe
                </option>
                <option value="not_going" className="bg-[#2b2b2b]">
                  Not going
                </option>
              </select>
            </Field>
            <Button type="submit">Submit RSVP</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
