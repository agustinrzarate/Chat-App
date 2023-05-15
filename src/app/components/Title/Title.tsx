import React from 'react'

interface TitleProps {
    title: string
}

const Title: React.FC<TitleProps> = ({title}) => {
  return (
    <div className="my-2 text-center text-2xl font-bold tracking-tight text-slate-600">
       {title}
    </div>
  )
}

export default Title