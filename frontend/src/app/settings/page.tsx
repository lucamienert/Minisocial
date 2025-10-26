import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>
      <Input placeholder="Display Name" className="mb-2" />
      <Input placeholder="Bio" className="mb-2" />
      <Input placeholder="Avatar URL" className="mb-4" />
      <Button>Save Changes</Button>
    </div>
  )
}
