import React from 'react'
import { IconType } from 'react-icons'

interface SocialIconButtonProps {
    icon: IconType,
    onClick: () => void
} 

const  SocialIconButton: React.FC<SocialIconButtonProps> = ({icon: Icon, onClick}) => {
  return (
    <button
    type='button'
    onClick={onClick}
    className='justify-center rounded-full bg-white px-4 py-4 text-gray-500 hover:shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0 ease-in duration-300 '
    >
     <Icon />
    </button>
  )
}

export default SocialIconButton