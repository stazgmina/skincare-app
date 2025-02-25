'use client'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
  return (
    <div className=' gap-2 flex items-center border border-pink-200 py-1 px-2 w-full md:w-auto bg-white text-pink-500 rounded-full' role='search'>
      <BsSearch aria-label='search icon'/>
      <input type='text' placeholder='Search' className='border-none outline-none  w-full text-pink-500 rounded-full' aria-label='search input'/>
    </div>
  )
}

export default SearchBar
