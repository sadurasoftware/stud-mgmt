"use client"
import Image from "next/image"
import React from "react"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Group A", value: 92, fill: "#3a82f7" },
  { name: "Group B", value: 8, fill: "#0056b3" },
]

const Performance = () => {
  return (
    <div className='bg-white rounded-xl w-full h-80'>
      <div className='flex items-center justify-between p-4'>
        <div className='text-lg font-semibold'>Performance</div>
        <Image src='/moreDark.png' alt='more' width={20} height={20} />
      </div>
      <div className='w-full h-full relative'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              dataKey='value'
              startAngle={180}
              endAngle={0}
              data={data}
              cx='50%'
              cy='50%'
              innerRadius={80}
              fill='#8884d8'
            />
          </PieChart>
        </ResponsiveContainer>
        <div className='absolute left-1/2 top-1/2 translate -translate-x-1/2 -translate-y-1/2 text-center'>
          <h2 className='text-3xl font-semibold'>9</h2>
          <p className='text-sm text-gray-500'>of 10 max LTS </p>
          <p className='p-2'> 1st Semester - 2nd Semester</p>
        </div>
      </div>
    </div>
  )
}

export default Performance
