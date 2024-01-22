"use client"

import Link from "next/link";
import { useState } from "react";

async function handleLogin(username: string) {
  const res = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ username })
  })
  const userExists = await res.json()
  console.log(userExists)
}

export default function Page() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')



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
          className="bg-slate-700 rounded-lg shadow px-2 py-1"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-slate-200 ml-3 font-semibold text-sm">Password</div>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          className="bg-slate-700 rounded-lg shadow px-2 py-1"
        />
      </div>
      <button
        className="bg-slate-700 text-slate-200 px-4 py-2 w-fit rounded-lg font-bold shadow mt-4"
        onClick={() => handleLogin(username)}
      >
        Submit
      </button>
    </div>
  );
}
