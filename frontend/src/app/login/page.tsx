import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <Input placeholder="Email" className="mb-2" />
      <Input placeholder="Password" type="password" className="mb-4" />
      <Button className="w-full">Login</Button>
      <p className="text-sm text-center mt-2">
        Don’t have an account? <a href="/register" className="underline">Register</a>
      </p>
    </div>
  )
}
