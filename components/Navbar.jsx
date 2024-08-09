import React from 'react'

function Navbar() {
  return (
    <div>
    <nav className='flex justify-around bg-red-500 text-white py-0'>
        <div className="logo">
            <span className='font-bold text-xl mx-10 justify-between
            '>My Todo</span>
        </div>
      <ul className="flex gap-10
       mx-10">
        {/* <li className='cursor-pointer hover:font-bold transition-all font-bold justify-center'>Their is malik Todo

        </li> */}
        <li className='cursor-pointer hover:font-bold transition-all'></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
