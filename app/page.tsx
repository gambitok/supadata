'use client';

import { Button } from "@/components/ui/button"

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Supadata</h1>
        <p className="text-lg text-gray-600 mt-4">Your ultimate platform for online courses and learning.</p>
      </header>
      
      <main className="flex flex-col items-center justify-center space-y-6">
        <Button className="w-full max-w-md px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Link href="/courses">Explore Courses</Link>
        </Button>

        <Button variant="outline" className="w-full max-w-md px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
          <Link href="/signup">Sign Up</Link>
        </Button>

        <div className="text-gray-600 mt-8">
          <p>Already have an account?</p>
          <Link href="/login" className="text-blue-600 hover:underline">Login here</Link>
        </div>
      </main>

      <footer className="w-full py-8 bg-gray-800 text-white text-center mt-12">
        <p>&copy; 2025 Supadata. All rights reserved.</p>
      </footer>
    </div>
  )
}
