import React from 'react'

interface DividerProps {
    text?: string
}
const Divider: React.FC<DividerProps> = ({text}) => {
  return (
   <div className="relative flex py-1 items-center">
        <div className="flex-grow border-t border-gray-200"></div>
            { text && <span className="flex-shrink mx-4 text-gray-400">{ text }</span> }
        <div className="flex-grow border-t border-gray-200"></div>
    </div>
  )
}

export default Divider