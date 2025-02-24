'use client'
import React, { useState, useEffect } from 'react'
import { BsList } from 'react-icons/bs'
import { FiArrowLeft, FiPrinter, FiSave, FiX } from 'react-icons/fi'
import Menu from './Menu'
import Link from 'next/link'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const toggleMenu = () => {
    if (menuOpen) {
      setIsClosing(true)  // Start close animation
    } else {
      setMenuOpen(true)   // Open immediately
    }
  }

  const handleAnimationComplete = () => {
    if (isClosing) {
      setMenuOpen(false)  // Actually close the menu
      setIsClosing(false) // Reset closing state
    }
  }

  // Block scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  return (
    <>
      <nav className="lg:flex lg:justify-between lg:px-4 w-screen h-16 border-b border-pink-500 bg-white grid place-items-center z-60 text-pink-500" role="navigation" aria-label="Main navigation">
        <button onClick={toggleMenu} aria-label="menu toggle" className='lg:hidden'>
          {menuOpen ? <FiX size={40} className="text-pink-500" /> : <BsList size={40} className="text-pink-500" />}
        </button>
        <Link href="/" passHref className='hidden lg:block'>
          <button className="flex font-bold items-center justify-start w-full border-2 border-pink-500 gap-1 p-2 rounded-full text-pink-500" aria-label="Go back">
            <FiArrowLeft size={25}/>
            Go Back
          </button>
        </Link>
        <input
          type="text"
          placeholder="Title"
          className="font-bold hidden lg:block w-full max-w-[500px] lg:max-w-[780px] text-center border-2 border-pink-500 p-2 rounded-full outline-none text-pink-500"
          aria-label="Title input"
        />
        <div className='flex gap-4'>
          <button aria-label="Print" className='hidden lg:flex flex-col items-center font-bold'>
            <FiPrinter size={25}/>
            Print
          </button>
          <button aria-label="Save" className='hidden lg:flex flex-col items-center font-bold'>
            <FiSave size={25}/>
            Save
          </button>
        </div>
      </nav>
      {menuOpen && (
        <Menu isClosing={isClosing} onAnimationComplete={handleAnimationComplete} />
      )}
    </>
  )
}

export default NavBar
