import React from 'react'


const Mssg = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
      
            <img src="https://static.vecteezy.com/system/resources/previews/008/302/462/original/eps10-grey-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg" alt="user " />
          </div>
        </div>

        <div className="chat-bubble text-white bg-blue-500">Hello</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-950 ">10:40</div>
    </div>
  )
}

export default Mssg;