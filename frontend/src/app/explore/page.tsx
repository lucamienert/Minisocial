import PostCard from "@/components/post-card"
import { Input } from "@/components/ui/input"

export default function ExplorePage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Explore</h1>
      <a href="/explore/search" className="underline">Search</a>
      <div className="space-y-4">
        <PostCard username="randomuser" content="Exploring new posts 🔥" />
      </div>
    </div>
  )
}
