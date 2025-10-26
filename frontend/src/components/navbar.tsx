"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="border-b p-3 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        MicroSocial
      </Link>
      <div className="space-x-2">
        <Link href="/explore"><Button variant="ghost">Explore</Button></Link>
        <Link href="/new"><Button variant="ghost">New Post</Button></Link>
        <Link href="/settings"><Button variant="ghost">Settings</Button></Link>
      </div>
    </nav>
  )
}
