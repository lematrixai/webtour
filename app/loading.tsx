import { Loader } from 'lucide-react'
import React from 'react'

const loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <Loader className='h-7 w-7 animate-spin text-[#003A56]' />
    </div>
  )
}

export default loading