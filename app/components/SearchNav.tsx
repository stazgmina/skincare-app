import React from 'react'
import { BsSearch } from "react-icons/bs"

const SearchNav = () => {
  return (
    <div className="flex border border-pink-200 w-screen gap-2 bg-white text-pink-500">
      <div className="flex items-center border border-pink-200 p-1">
        <BsSearch />
        <input type='text' placeholder='search' className='border-none outline-none text-pink-500' />
      </div>
      <button className='border border-pink-200 px-2 text-pink-500'>Filter</button>
      <button className='border border-pink-200 px-2 text-pink-500'>Sort</button>
    </div>
  )
}

export default SearchNav
