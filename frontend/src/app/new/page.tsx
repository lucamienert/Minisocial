import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function NewPostPage() {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create a Post</h1>
      <Textarea placeholder="What's on your mind?" className="mb-4" />
      <Button>Publish</Button>
    </div>
  )
}
