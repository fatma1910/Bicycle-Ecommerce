import React from "react";

const AuthLayout = ({ children }) => {
    return (
        <div className="py-16 min-h-screen">
          <div className="flex items-center justify-center">
            {children}
          </div>
      </div>
    )
    
};

export default AuthLayout