import PostCard from "@/components/post-card"
import { Avatar } from "@/components/ui/avatar"

export default function ProfilePage({ params }: { params: { username: string } }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="w-16 h-16" />
        <div>
          <h2 className="text-2xl font-bold">@{params.username}</h2>
          <p className="text-sm text-muted-foreground">user</p>
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">Posts</h3>
      <PostCard username={params.username} content="First post on my profile" />
    </div>
  )
}
