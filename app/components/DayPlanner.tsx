'use client'
import React, { useState } from 'react'
import { BsCloudSun, BsSun, BsMoon } from 'react-icons/bs'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const DayPlanner = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(1)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const swipeThreshold = 50

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => setTouchStartX(e.touches[0].clientX)

  interface TouchEndEvent extends React.TouchEvent<HTMLDivElement> {
    changedTouches: React.TouchList & { [index: number]: Touch }
  }

  const handleTouchEnd = (e: TouchEndEvent): void => {
    if (touchStartX === null) return
    const deltaX = touchStartX - e.changedTouches[0].clientX
    if (deltaX > swipeThreshold) {
      setCurrentDayIndex((currentDayIndex + 1) % days.length)
    } else if (deltaX < -swipeThreshold) {
      setCurrentDayIndex((currentDayIndex - 1 + days.length) % days.length)
    }
    setTouchStartX(null)
  }

  return (
    <div className='flex flex-col h-full overflow-y-auto bg-white text-pink-500' role='region' aria-label='Day Planner'>
      <div
        className='py-2 bg-gradient-to-r from-pink-600 to-pink-300 text-center font-bold text-lg text-white'
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label='Day selector'
      >
        {days[currentDayIndex]}
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <div className='border rounded-md shadow border-pink-200 p-4 w-full aspect-square flex items-start justify-start' role='region' aria-label='Morning Time Slot'>
          <BsCloudSun className='text-pink-500 text-3xl' />
        </div>
        <div className='border rounded-md shadow border-pink-200 p-4 w-full aspect-square flex items-start justify-start' role='region' aria-label='Afternoon Time Slot'>
          <BsSun className='text-pink-500 text-3xl' />
        </div>
        <div className='mb-20 border rounded-md shadow border-pink-200 p-4 w-full aspect-square flex items-start justify-start' role='region' aria-label='Evening Time Slot'>
          <BsMoon className='text-pink-500 text-3xl' />
        </div>
      </div>
    </div>
  )
}

export default DayPlanner
