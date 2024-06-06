import React from 'react'

const TabButton = ({active, selectTab, children}) => {
    const buttonClassses = active ? 'text-orange-400 border-b border-white':'text-[#ADB7BE] '

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClassses} `}>
        {children}
        </p>
        
    </button>
                    
  )
}

export default TabButton