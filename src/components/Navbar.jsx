import React, { Component } from 'react'
import { FaRegBell, FaSignOutAlt, FaChevronDown } from 'react-icons/fa'

export class Navbar extends Component {
  render() {
    return (
      <div className='w-screen bg-navbar h-[100%] flex justify-end  text-[1.2rem] text-white px-10 py-3' >
        <div className='w-[12rem] h-[3rem] mr-5 bg-profile rounded-3xl text-lg grid grid-cols-[30%_40%_30%] justify-center text-center'>
            <img alt="User" src={`https://source.unsplash.com/random/300x200?sig=${Math.random()}`} className=' rounded-full md:w-[1.5rem] md:h-[1.5rem] sm:w-[1.5rem] sm:h-[1.5rem] lg:h-[2rem] lg:w-[2rem] xl:h-[2rem] xl:w-[2rem] 2xl:h-[2rem] 2xl:w-[2rem] m-[0.5rem] ' />
            <div className=' flex flex-col gap-0 text-left '>
                <div className='text-[1rem] font-semibold  '>
                    Sam Joe
                </div>
                <div className='text-[0.7rem] -mt-3'>
                    Data Manager
                </div>
            </div>
            <div className='text-right m-[1rem]'>
                <FaChevronDown />
            </div>
        </div>
        <div className='p-4 mr-5 bg-profile rounded-full'>
        <FaRegBell/>
        </div>
        <div className='p-4 mr-5 bg-profile rounded-full'>
            < FaSignOutAlt />
        </div>
      </div>
    )
  }
}

export default Navbar