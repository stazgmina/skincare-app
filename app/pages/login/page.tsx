'use client'
import Link from 'next/link'
import React from 'react'

const login = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission, send data through JSON
  }

  return (
    <main className="flex flex-col md:flex-row">
      <section className="bg-[url('/banner.webp')]  bg-cover bg-center grid place-items-center p-8 order-2 md:order-1 h-[500px] md:h-screen w-screen md:w-1/2">
        
        <h1 className='bg-gradient-to-r from-pink-600 to-pink-200 inline-block text-transparent bg-clip-text text-6xl md:text-7xl lg:text-8xl text-center font-serif'>
          Join<br/> 
          the<br/>  
          Helldivers
        </h1>
      </section>
      <section className="grid place-items-center order-1 md:order-2 h-1/2 md:h-screen w-screen md:w-1/2 p-8 text-pink-500">
        <h1 className="text-2xl bg-gradient-to-r from-pink-500 to-pink-200 p-4 w-full max-w-[500px] text-white text-center rounded-full">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="grid place-items-center gap-4 w-full">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required className="text-center border-2 border-pink-200 rounded-full p-2 w-full max-w-[500px]"/>
          
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required className="text-center border-2 border-pink-200 rounded-full p-2 w-full max-w-[500px]"/>
          
          <button type="submit" className="login-button border border-pink-200 rounded-full text-white py-2 px-6 w-full max-w-[250px]">
            Login
          </button>
        </form>
        <p className="text-center">
          Don't have an account yet? <Link href={"/pages/register"}>Register.</Link>
        </p>
      </section>
    </main>
  )
}

export default login
