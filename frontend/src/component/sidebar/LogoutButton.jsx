// import React from 'react';
// import { BiLogout } from 'react-icons/bi';

// const LogoutButton = () => {
//   console.log('LogoutButton rendered'); // Check if this appears in the browser console

//   return (
//     <div className='mt-auto'>
//        <BiLogout className='w-6 h-6 text-red-600 cursor-pointer' />
//     </div>
//   );
// };

// export default LogoutButton;

import { BiLogOut } from 'react-icons/bi'; // Corrected icon name

const LogoutButton = () => {
  console.log('LogoutButton rendered'); // Check if this appears in the browser console

  return (
    <div className="mt-auto">
      <BiLogOut className="w-6 h-6 text-red-600 cursor-pointer" />
    </div>
  );
};

export default LogoutButton;
