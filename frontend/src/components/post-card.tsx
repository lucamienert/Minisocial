import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"

export default function PostCard({
  username,
  content,
}: {
  username: string
  content: string
}) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Avatar />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">@{username}</h3>
              <Button variant="ghost" size="sm">♥</Button>
            </div>
            <p className="text-sm mt-2">{content}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
