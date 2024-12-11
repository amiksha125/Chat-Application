import React from 'react'
import Mssg from './Mssg.jsx'

const Message = () => {
  return (
    <div className="px-4 flex-1 overflow-auto">
        <Mssg />
        <Mssg />
        <Mssg />
        <Mssg />
    </div>
  )
}

export default Message