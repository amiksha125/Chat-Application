import React from 'react'
import Sidebar from '../component/sidebar/Sidebar.jsx'
import MessageContainer from '../component/Messages/MessageContainer.jsx'
//rafce for boiler plate
const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-200'>
      <Sidebar />

      <MessageContainer />
    </div>
  )
}

export default Home