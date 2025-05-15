// /app/login/page.tsx
'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      alert(error.message)
    } else {
      // Це важливо — оновлюємо куки
      router.refresh() // Оновлення сторінки
      router.push("/dashboard")
    }
  }

  return (
    <div className="p-10 max-w-md mx-auto">
      <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="mb-3" />
      <Input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Пароль" className="mb-6" />
      <Button onClick={handleLogin}>Увійти</Button>
    </div>
  )
}
