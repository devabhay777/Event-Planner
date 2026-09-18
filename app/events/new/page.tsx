import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card'
import { Form, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from 'radix-ui'
import { useForm } from 'react-hook-form'

export default async function NewEventPage() {
  const form = useForm()
  return (
    <div className="mx-auto w-full max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Create Event</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <FormField>
              <Label>Title</Label>
              <Input
                id="title"
                name="title"
                required
                placeholder="Team dinner..."
              />
            </FormField>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
