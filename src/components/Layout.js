import React from 'react'

const Layout = ({children,className=""}) => {
  return (
    <div className={`w-10/13 h-1/2 inline-block z-0 bg-light p-32 ${className}`}>
        {children}
    </div>
  )
}

export default Layout