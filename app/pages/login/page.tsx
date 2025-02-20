'use client'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <main role="main" className="flex flex-col md:flex-row min-h-screen">
      <section className="bg-[url('/banner.webp')] bg-cover bg-center grid place-items-center p-8 order-2 md:order-1 h-[500px] md:h-screen w-screen md:w-1/2" aria-label="Welcome section">
        <h1 className="bg-gradient-to-r from-pink-600 to-pink-200 inline-block text-transparent bg-clip-text text-6xl md:text-7xl lg:text-8xl text-center font-serif">
          Join<br/>the<br/>Helldivers
        </h1>
      </section>
      <section className="bg-[url('https://t3.ftcdn.net/jpg/02/10/09/58/360_F_210095815_Bg6E1AVIZIHi4GIm9ydpB2hUDWsHlXBn.jpg')] bg-cover bg-center grid place-items-center order-1 md:order-2 h-1/2 md:h-screen w-screen md:w-1/2 p-8 text-pink-500" aria-label="Login form section">
        <h1 className="text-2xl bg-gradient-to-r from-pink-500 to-pink-200 p-4 w-full max-w-[500px] text-white text-center rounded-full">
          Sign in
        </h1>
        <form onSubmit={handleSubmit} className="grid place-items-center gap-2 md:gap-4 w-full" aria-label="Login form">
          <label htmlFor="username" className="text-lg">Username</label>
          <input type="text" id="username" name="username" required className="text-center focus:border-4 border-2 border-pink-200 rounded-full p-2 w-full max-w-[500px] focus:font-bold bg-transparent"/>
          
          <label htmlFor="password" className="text-lg">Password</label>
          <input type="password" id="password" name="password" required className="text-center focus:border-4 border-2 border-pink-200 rounded-full p-2 w-full max-w-[500px] focus:font-bold bg-transparent"/>
          
          <button type="submit" className="auth-button border border-pink-200 rounded-full text-white py-2 px-6 w-full max-w-[250px]">
            Login
          </button>
        </form>
        <p className="text-center">
          Don&apos;t have an account yet? <Link href="/pages/register"><b>Sign up</b></Link>
        </p>
      </section>
    </main>
  )
}

export default Login
