import Link from 'next/link'
import { BiGitBranch, BiRefresh, BiXCircle, BiLineChart } from 'react-icons/bi'
import { IoWarningOutline, IoLogoGithub } from 'react-icons/io5'
import { AiOutlineClockCircle } from 'react-icons/ai'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/atoms/tooltip'

export const Footer = async () => {
  return (
    <TooltipProvider>
      <footer className='border-t text-off-white text-xs flex items-center justify-between select-none bg-layout relative z-30'>
        <div className='flex items-center border-r divide-x'>
          <Link
            target='_blank'
            href='https://github.com/leeminkan/portfolio-site'
            className='flex items-center gap-x-2 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors'
          >
            <BiGitBranch className='text-lg' />
            <p>main</p>
          </Link>
          <button
            aria-label='refetch'
            className='items-center gap-x-2 px-2 py-1 md:flex hidden group hover:text-foreground text-muted-foreground transition-colors'
            data-umami-event='footer-refresh-btn'
          >
            <BiRefresh className='text-xl group-active:rotate-180 transition-transform' />
          </button>

          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href='https://umami.leeminkan.dev/share/uzhYvcwXpP4PITmG/leeminkan.dev'
                target='_blank'
                aria-label='statistics'
                className='items-center gap-x-2 px-2 py-1 md:flex hidden hover:text-foreground text-muted-foreground transition-colors'
                data-umami-event='footer-statistics-btn'
              >
                <BiLineChart className='text-xl' />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Statistics</TooltipContent>
          </Tooltip>

          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div className='items-center gap-x-1 px-2 py-1 md:flex hidden text-muted-foreground'>
                <BiXCircle className='text-base' />
                <p>0</p>
                <IoWarningOutline className='text-base' />
                <p>0</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>No problems</TooltipContent>
          </Tooltip>

          <Link
            href='mailto:nguyenhoangphuc.kan@gmail.com'
            target='_blank'
            className='items-center gap-x-1.5 px-2 py-1 md:flex hidden text-muted-foreground hover:text-foreground transition-colors'
          >
            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
            <span>Available for a work!</span>
          </Link>
        </div>

        <div className='flex items-center divide-x divide border-l'>
          <div className='items-center gap-x-2 px-2 py-1 lg:flex hidden text-muted-foreground'>
            <p>Special thanks to:</p>

            <Link href='https://www.behance.net/darelova' target='_blank' className='hover:text-foreground transition-colors'>
              Yanka Darelova
            </Link>
            <p>&</p>
            <Link href='https://www.linkedin.com/in/wiscaksono' target='_blank' className='hover:text-foreground transition-colors'>
              Wiscaksono
            </Link>
          </div>
          <Link target='_blank' href='https://github.com/leeminkan' className='flex items-center gap-x-1 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors'>
            <p>Kan</p>
            <IoLogoGithub className='text-lg' />
          </Link>
        </div>
      </footer>
    </TooltipProvider>
  )
}
