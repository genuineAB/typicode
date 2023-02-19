import React, { Component } from 'react'

export class Sidebar extends Component {
  render() {
    return (
      <div className='bg-sidebar text-3xl grid grid-cols-[20%_60%_20%] grid-rows-[5%_25%_20%_50%] gap-2 content-center items-center justify-items-center h-screen'> 
         <div className='mt-32 items-center py-4 rounded-xl mb-20 row-start-2 col-start-2 sm:hidden'>
            <img alt="User" src="https://th.bing.com/th/id/OIP.C2VSlbfVJfqpA55ZP_lX2wHaKQ?w=186&h=258&c=7&r=0&o=5&pid=1.7" className='  rounded-full h-[8rem] w-[8rem] md:h-[6rem] md:w-[6rem]' />
            <div className='text-sm text-white text-center xl:text-lg 2xl:text-xl font-semibold'>User ID: 2346224</div>
          </div>
          <div className='row-start-3 col-start-1 col-span-3 sm:hidden'>
            Row 2
          </div>
          <div className='row-start-4 col-start-1 col-span-3 sm:hidden'>
            Row 3
          </div>
      </div>
    )
  }
}

export default Sidebar