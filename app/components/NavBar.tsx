'use client'
import React, { useState, useEffect } from 'react'
import { BsList } from 'react-icons/bs'
import { FiX } from 'react-icons/fi'
import Menu from './Menu'

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
      <nav className="w-screen h-16 border border-pink-200 bg-white grid place-items-center z-60 text-pink-500" role="navigation" aria-label="Main navigation">
        <button onClick={toggleMenu} aria-label="menu toggle">
          {menuOpen ? <FiX size={40} className="text-pink-500" /> : <BsList size={40} className="text-pink-500" />}
        </button>
      </nav>
      {menuOpen && (
        <Menu isClosing={isClosing} onAnimationComplete={handleAnimationComplete} />
      )}
    </>
  )
}

export default NavBar
