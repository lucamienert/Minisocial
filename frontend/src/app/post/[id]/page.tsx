import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <Card className="mb-4">
        <CardContent>
          <h2 className="font-semibold text-lg mb-2">Post #{params.id}</h2>
          <p className="text-muted-foreground">This is the post content.</p>
        </CardContent>
      </Card>

      <h3 className="font-semibold mb-2">Comments</h3>
      <Input placeholder="Write a comment..." className="mb-2" />
      <Button>Post Comment</Button>
    </div>
  )
}
