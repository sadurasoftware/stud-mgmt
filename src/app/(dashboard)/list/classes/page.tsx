import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { classesData, role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type Class = {
  id: number
  name: string
  capacity: number
  grade: number
  supervisor: string
  actions: string
}

const columns = [
  { header: "Class Name", accessor: "name" },
  {
    header: "Capacity",
    accessor: "capacity",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },

  {
    header: "Actions",
    accessor: "actions",
  },
]

const ClassList = () => {
  const renderRow = (item: Class) => (
    <tr
      key={item.id}
      className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-vsSkyLight '>
      <td className='flex items-center gap-4 p-4'>
        <h3 className='font-semibold'>{item.name}</h3>
      </td>
      <td>{item.capacity}</td>
      <td className='hidden md:table-cell'>{item.grade}</td>
      <td className='hidden md:table-cell'>{item.supervisor}</td>
      <td>
        <div className='flex items-center gap-2'>
          {/* <Link href={`/list/students/${item.id}`}>
            <button className='flex w-7 h-7 items-center justify-center rounded-full bg-vsSky'>
              <Image src='/update.png' alt='edit' width={16} height={16} />
            </button>
          </Link> */}
          {role === "admin" && (
            // <button className='flex w-7 h-7 items-center justify-center rounded-full bg-vsPurple'>
            //   <Image src='/delete.png' alt='delete' width={16} height={16} />
            // </button>
            <>
              <FormModal table='class' type='update' data={item} />
              <FormModal table='class' type='delete' id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  )

  return (
    <div className='h-full m-4 mt-0 bg-white p-4 rounded-md'>
      <div className='flex flex-col md:flex-row  items-center justify-between'>
        <div className=' text-lg font-semibold my-4'>All Classes</div>
        <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
          <TableSearch />
          <div className='flex items-center gap-4 self-end'>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-vsSky'>
              <Image src='/filter.png' alt='filter' width={14} height={14} />
            </button>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-vsSky'>
              <Image src='/sort.png' alt='sort' width={14} height={14} />
            </button>
            {role === "admin" && (
              // <button className='w-8 h-8 flex items-center justify-center rounded-full bg-vsSky'>
              //   <Image src='/create.png' alt='plus' width={14} height={14} />
              // </button>
              <FormModal table='class' type='create' />
            )}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={classesData} />
      <Pagination />
    </div>
  )
}

export default ClassList
