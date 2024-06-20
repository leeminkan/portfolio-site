import { Suspense } from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs, TbBrandLaravel, TbBrandNodejs } from 'react-icons/tb'
import { HiTerminal } from 'react-icons/hi'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/atoms/accordion'
import { AsideLink } from '@/components/atoms/aside-link'
import { FadeInStagger, FadeIn } from '@/components/atoms/fade-in'
import { ENV } from '@/lib/constants'
import { generateSEO } from '@/lib/generateSEO'

const title = 'projects'
const description =
  'Explore the dynamic range of my projects, traverse my refined portfolio, and immerse yourself in a preview of my robust technical capabilities. Embark on a journey where innovation harmonizes with practicality, demonstrated through meticulously crafted Node.js and React.js applications. Elevate your digital journey with a seamless fusion of creativity and technical acumen.'
const url = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/projects`
const image = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og?title=${title}`

export const metadata = generateSEO(title, description, image, url)

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='grid grid-cols-12 overflow-hidden h-full'>
      <aside className='md:col-span-3 lg:col-span-2 border-r border-lines md:block hidden overflow-y-auto'>
        <Accordion type='single' collapsible defaultValue='item-0'>
          {data.map((item, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger className='border-b border-lines px-5 py-2.5 text-left' data-umami-event='accordion-project'>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className='mt-5 space-y-1'>
                <FadeInStagger faster>
                  {item.list.map((listItem, j) => (
                    <FadeIn key={j}>
                      <Suspense fallback={<>Loading...</>}>
                        <AsideLink href={listItem.href} title={listItem.title}>
                          {listItem.icon}
                          {listItem.title}
                        </AsideLink>
                      </Suspense>
                    </FadeIn>
                  ))}
                </FadeInStagger>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </aside>
      <section className='md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84dvh] md:h-auto'>{children}</section>
    </section>
  )
}

const data = [
  {
    title: 'Projects',
    list: [
      {
        title: 'All Projects',
        href: '/projects',
        icon: <HiTerminal className='w-4 h-4' />
      },
      {
        title: 'NodeJS',
        href: '/projects?tag=NodeJS',
        icon: <TbBrandNodejs className='w-4 h-4' />
      },
      {
        title: 'Laravel',
        href: '/projects?tag=Laravel',
        icon: <TbBrandLaravel className='w-4 h-4' />
      },
      {
        title: 'React',
        href: '/projects?tag=React',
        icon: <RiReactjsLine className='w-4 h-4' />
      },
      {
        title: 'Next',
        href: '/projects?tag=Next',
        icon: <TbBrandNextjs className='w-4 h-4' />
      }
    ]
  }
]
