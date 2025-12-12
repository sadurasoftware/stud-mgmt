import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import Performance from "@/components/Performance"
import Image from "next/image"
import Link from "next/link"

export default function singleStudentPage() {
  return (
    <div className='flex flex-1 p-4 flex-col gap-4 md:flex-row'>
      <div className='w-full lg:w-2/3 '>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='bg-vsSky px-4 py-6 rounded-md flex-1 flex gap-4'>
            <div className='w-1/3'>
              <Image
                width={144}
                src='https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200'
                alt='Student name'
                height={144}
                className='w-36 h-36 rounded-full object-cover'
              />
            </div>
            <div className='w-2/3 flex flex-col justify-between gap-4'>
              <h2 className='text-xl font-semibold'>John Duo</h2>
              <span>Class name</span>
              <p className='text-sm text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='flex flex-col  gap-2  font-medium text-sm'>
                <div className='flex gap-2 items-center w-full'>
                  <Image
                    src='/blood.png'
                    alt='blood type'
                    width={14}
                    height={14}
                  />
                  <span>O+</span>
                </div>
                <div className='flex gap-2 items-center w-full '>
                  <Image src='/date.png' alt='date' width={14} height={14} />
                  <span>April 2025</span>
                </div>
                <div className='flex gap-2 items-center w-full'>
                  <Image src='/mail.png' alt='mail' width={14} height={14} />
                  <span>bhanumathi.a@gmail.com</span>
                </div>
                <div className='flex gap-2 items-center w-full'>
                  <Image
                    src='/phone.png'
                    alt='phone number'
                    width={14}
                    height={14}
                  />
                  <span>9876543210</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1 flex  gap-4 justify-between flex-wrap'>
            <div className='bg-white p-4 rounded-md w-full flex gap-4 md:w-[46%] xl:w-[45%] 2xl:w-[48%]'>
              <Image
                src='/singleAttendance.png'
                alt='attendance'
                width={24}
                height={24}
                className='w-6 h-6'
              />
              <div>
                <h3 className='text-xl font-semibold'>90%</h3>
                <span className='text-sm text-gray-400'>Attendance</span>
              </div>
            </div>
            <div className='bg-white p-4 rounded-md w-full flex gap-4 md:w-[46%] xl:w-[45%] 2xl:w-[48%]'>
              <Image
                src='/singleBranch.png'
                alt='attendance'
                width={24}
                height={24}
                className='w-6 h-6'
              />
              <div>
                <h3 className='text-xl font-semibold'>6th</h3>
                <span className='text-sm text-gray-400'>Grade</span>
              </div>
            </div>
            <div className='bg-white p-4 rounded-md w-full flex gap-4 md:w-[46%] xl:w-[45%] 2xl:w-[48%]'>
              <Image
                src='/singleLesson.png'
                alt='attendance'
                width={24}
                height={24}
                className='w-6 h-6'
              />
              <div>
                <h3 className='text-xl font-semibold'>17</h3>
                <span className='text-sm text-gray-400'>Lessons</span>
              </div>
            </div>
            <div className='bg-white p-4 rounded-md w-full flex gap-4 md:w-[46%] xl:w-[45%] 2xl:w-[48%]'>
              <Image
                src='/singleClass.png'
                alt='attendance'
                width={24}
                height={24}
                className='w-6 h-6'
              />
              <div>
                <h3 className='text-xl font-semibold'>6A</h3>
                <span className='text-sm text-gray-400'>Classes</span>
              </div>
            </div>
          </div>
        </div>
        <div className=' bg-white p-4 rounded-md mt-4 h-[800px]'>
          <div className='text-lg font-semibold my-4'>Student's Schedule</div>
          <BigCalendar />
        </div>
      </div>
      <div className='w-full lg:w-1/3 flex flex-col gap-4'>
        <div className='bg-white rounded-md p-4'>
          <div className='text-lg font-semibold my-4'>Shortcuts</div>
          <div className='flex  gap-4 mt-4 flex-wrap text-sm text-gray-400'>
            <Link className='p-3 rounded-md bg-sky-50' href=''>
              Student's Teachers
            </Link>
            <Link className='p-3 rounded-md bg-pink-100' href=''>
              Student's Lessons
            </Link>
            <Link className='p-3 rounded-md bg-yellow-100' href=''>
              Student's Results
            </Link>
            <Link className='p-3 rounded-md bg-green-100' href=''>
              Student's Exams
            </Link>
            <Link className='p-3 rounded-md bg-sky-50' href=''>
              Student's Assignments
            </Link>
          </div>
        </div>

        <Performance />

        <Announcements />
      </div>
    </div>
  )
}
