import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"

export default function TeacherPage() {
  return (
    <div className='flex flex-1 p-4 flex-col gap-4 md:flex-row'>
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        <div className='h-full bg-white p-4 rounded-md'>
          <div className='text-lg font-semibold my-4'>Schedule</div>
          <BigCalendar />
        </div>
      </div>
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <Announcements />
      </div>
    </div>
  )
}
