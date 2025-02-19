import React from 'react'
import { BsList } from "react-icons/bs"

const Planner = () => {
  return (
    <main>
      <nav className='w-screen border grid place-items-center'>
        <button>
          <BsList size={40}/>
        </button>
      </nav>
      <section>

      </section>
      <drawer className='border'>
        <searchnav className="flex border w-screen gap-2">
          <input type='text' placeholder='search' className='border'/>
          <button className='border'>
            Filter
          </button>
          <button className='border'>
            Sort
          </button>
        </searchnav>
        <productlist className=''>
        </productlist>
      </drawer>
    </main>
  )
}

export default Planner