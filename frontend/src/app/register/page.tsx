import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function RegisterPage() {
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Register</h1>
      <Input placeholder="Username" className="mb-2" />
      <Input placeholder="Email" className="mb-2" />
      <Input placeholder="Password" type="password" className="mb-4" />
      <Button className="w-full">Sign Up</Button>
    </div>
  )
}
