import React from 'react';

const Conversation = () => {
  return (
    <>
      <div className='flex gap-2 items-center hover:bg-blue-400 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/302/462/original/eps10-grey-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"
              alt=""
            />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-medium text-slate-600'>Amiksha</p>
          </div>
        </div>
      </div>

      <div className='divider my-0 py-0 h-1'></div>
    </>
  );
};

export default Conversation;
