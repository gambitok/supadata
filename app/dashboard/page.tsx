// /app/dashboard/page.tsx
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies: () => cookies() })

  // Перевіряємо сесію
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    console.error("Error fetching user:", error)
    redirect('/login')  // Якщо немає користувача — редірект на login
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Вітаю, {user.email}</h1>
    </div>
  )
}
