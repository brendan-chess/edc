"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleLogin() {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username })
    })

    const {user, success, error} = await res.json()

    if(!success) {
      setError(error)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-xl text-slate-200 my-4 underline underline-offset-8">
        Log in
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-slate-200 ml-3 font-semibold text-sm">Username</div>
        <input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
          className="bg-slate-950 border-2 border-slate-700 text-slate-200 rounded shadow px-2 py-1"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-slate-200 ml-3 font-semibold text-sm">Password</div>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          className="bg-slate-950 border-2 border-slate-700 text-slate-200 rounded shadow px-2 py-1"
        />
      </div>
      <button
        className="bg-slate-700 text-slate-200 text-sm px-4 py-2 w-fit rounded font-semibold shadow mt-4"
        onClick={handleLogin}
      >
        Submit
      </button>
      {error && (
        <div className="text-red-700">{error}</div>
      )}
    </div>
  );
}
