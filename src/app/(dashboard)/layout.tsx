import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/Menu"
import NavBar from "@/components/NavBar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className='h-screen flex'>
        <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4'>
          <Link href='/' className='global-flex-center lg:justify-start  gap-2'>
            <Image src='/logo.png' alt='Vidya' width={32} height={32} />
            <span className='hidden lg:block'>
              <Image src='/logo.svg' alt='Vidya' width={150} height={95} />
            </span>
          </Link>
          <Menu />
        </div>
        <div className='w-[86%] md:w-[92%] lg:w-[84%] xl-w-[86%] bg-[#f7f8fa] overflow-y-auto flex flex-col'>
          <NavBar />
          {children}
        </div>
      </div>
    </>
  )
}
