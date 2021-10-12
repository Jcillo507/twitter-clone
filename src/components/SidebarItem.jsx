import React from 'react'

const SidebarItem = ({Icon, text}) => {
  return (
    <div className='sidebarItem'>
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarItem