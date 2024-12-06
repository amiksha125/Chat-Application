import React from 'react'
import Sidebar from '../component/sidebar/Sidebar.jsx'
//rafce for boiler plate
const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-200'>
      <Sidebar />
    </div>
  )
}

export default Home