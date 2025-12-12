import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

export default function AdminPage() {
  return (
    <div className='flex p-4 flex-col gap-4 md:flex-row'>
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* user card */}
        <div className='flex gap-4 justify-between items-center flex-wrap'>
          <UserCard type='Student' />
          <UserCard type='Teacher' />
          <UserCard type='Parent' />
          <UserCard type='Staff' />
        </div>
        {/* middle chart */}
        <div className='flex flex-col lg:flex-row gap-4'>
          {/* count chart */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          {/* attendance chart */}
          <div className='w-full lg:w-2/3 h-[450px]'>
            <AttendanceChart />
          </div>
        </div>
        {/* bottom chart */}
        <div className='w-full h-[500px]'>
          <FinanceChart />
        </div>
      </div>
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  )
}
