'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      toast.error(`Помилка: ${error.message}`)
    } else {
      toast.success("Успішний вхід")
      router.push("/login")
    }
  }

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Реєстрація</h1>
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-3" />
      <Input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-6" />
      <Button onClick={handleRegister}>Зареєструватись</Button>
    </div>
  )
}
