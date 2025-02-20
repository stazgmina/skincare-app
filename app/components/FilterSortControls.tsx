'use client'
import React from 'react'

const FilterSortControls = () => {
  return (
    <div className='flex gap-2' role='group' aria-label='Filter and sort controls'>
      <button className='border border-pink-200 py-1 px-4 rounded-full text-pink-500'>Filter</button>
      <button className='border border-pink-200 py-1  px-4 rounded-full text-pink-500'>Sort</button>
    </div>
  )
}

export default FilterSortControls
