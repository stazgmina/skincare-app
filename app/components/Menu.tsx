'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiArrowLeft, FiPrinter, FiSave } from 'react-icons/fi'

interface MenuProps {
  isClosing: boolean
  onAnimationComplete: () => void
}

const Menu: React.FC<MenuProps> = ({ isClosing, onAnimationComplete }) => {
  const navBarHeight = 64  // 64px === 4rem
  const [menuHeight, setMenuHeight] = useState('0px')

  // On mount, animate to full height (viewport height minus navbar)
  useEffect(() => {
    const finalHeight = `calc(100vh - ${navBarHeight}px)`
    const timer = setTimeout(() => {
      setMenuHeight(finalHeight)
    }, 10)
    return () => clearTimeout(timer)
  }, [])

  // When closing, collapse height to 0
  useEffect(() => {
    if (isClosing) {
      setMenuHeight('0px')
    }
  }, [isClosing])

  return (
    <div
      className="fixed left-0 right-0 bg-white z-50 shadow-lg p-4 overflow-y-auto border border-pink-200"
      style={{
        top: `${navBarHeight}px`,
        height: menuHeight,
        transition: 'height 0.3s ease-out'
      }}
      onTransitionEnd={() => {
        if (isClosing) onAnimationComplete()
      }}
      aria-label="Main menu"
    >
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="border border-pink-200 p-2 w-full rounded-full outline-none text-pink-500"
          aria-label="Title input"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Link href="/" passHref>
          <button className="flex items-center justify-start w-full border border-pink-200 p-2 rounded-full text-pink-500" aria-label="Go back">
            <FiArrowLeft className="mr-2" />
            Go Back
          </button>
        </Link>
        <button className="flex items-center justify-start w-full border border-pink-200 p-2 rounded-full text-pink-500" aria-label="Print">
          <FiPrinter className="mr-2" />
          Print
        </button>
        <button className="flex items-center justify-start w-full border border-pink-200 p-2 rounded-full text-pink-500" aria-label="Save">
          <FiSave className="mr-2" />
          Save
        </button>
      </div>
    </div>
  )
}

export default Menu
