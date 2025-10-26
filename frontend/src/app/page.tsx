import PostCard from "@/components/post-card";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold mb-4">Home Feed</h1>
      <PostCard username="test1" content="Hello world" />
      <PostCard username="test2" content="Hello world" />
    </div>
  )
}
