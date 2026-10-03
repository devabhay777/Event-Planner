import { Button } from '@/components/ui/button'
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { createEventAction } from '@/lib/actions/event'

export default function NewEventPage() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Create Event</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={createEventAction}>
            <Field>
              <FieldLabel htmlFor="title">Title</FieldLabel>
              <Input
                id="title"
                name="title"
                required
                placeholder="Team dinner..."
              />

              <FieldLabel htmlFor="description">Description</FieldLabel>
              <Input
                id="description"
                name="description"
                placeholder="Optional details about the event"
              />

              <FieldLabel htmlFor="location">Location</FieldLabel>
              <Input
                id="location"
                name="location"
                placeholder="Optional location"
              />

              <FieldLabel htmlFor="eventDate">Date and time</FieldLabel>
              <Input
                id="eventDate"
                name="eventDate"
                type="datetime-local"
                required
              />

              <div className="flex items-center gap-3">
                <Button type="submit">Create event</Button>
                <Button type="button" variant="outline" asChild>
                  <Link href="/dashboard">Cancel</Link>
                </Button>
              </div>
            </Field>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
