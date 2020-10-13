import React from 'react';

const AuthLayout = ({children, className}) => (
  <div className={className}>
    <div className="flex justify-center w-1/3 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 h-full">
        {children[0]}
    </div>
    <div className="w-2/3 bg-green-600 h-full">
        {children[1]}
    </div>
  </div>
);

export default AuthLayout;