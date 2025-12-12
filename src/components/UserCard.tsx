import Image from "next/image"
import React from "react"

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className='rounded-2xl odd:bg-vsPurple even:bg-purple-300 p-4 flex-1 min-w-[130]'>
      <div className='flex justify-between items-center mb-2'>
        <span className='bg-white rounded-md px-2 py-1 text-[10px]'>
          2025/26
        </span>
        <Image src='/more.png' alt='more' width={20} height={20} />
      </div>
      <h2 className='text-2xl font-semibold mb-2'>1234</h2>
      <h4 className='capitalize font-medium text-gray-900'>{type}</h4>
    </div>
  )
}

export default UserCard
