import { Suspense } from 'react'
import { SiTypescript } from 'react-icons/si'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/atoms/accordion'
import { AsideLink } from '@/components/atoms/aside-link'
import { FadeInStagger, FadeIn } from '@/components/atoms/fade-in'

import { listDemo } from './constant'

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='grid grid-cols-12 overflow-hidden h-full'>
      <aside className='md:col-span-3 lg:col-span-2 border-r border-lines md:block hidden overflow-y-auto'>
        <Accordion type='single' collapsible defaultValue='demo'>
          <AccordionItem value={'demo'} defaultChecked>
            <AccordionTrigger className='border-b border-lines px-5 py-2.5 text-left' data-umami-event='accordion-demo'>
              Demo
            </AccordionTrigger>
            <AccordionContent className='mt-5 space-y-1'>
              <FadeInStagger faster>
                {Object.values(listDemo).map(({ title, slug }) => (
                  <FadeIn key={slug}>
                    <Suspense fallback={<>Loading...</>}>
                      <AsideLink href={`/demo/${slug}`} key={slug} title={title}>
                        <SiTypescript className='w-4 h-4 shrink-0' />
                        {title}
                      </AsideLink>
                    </Suspense>
                  </FadeIn>
                ))}
              </FadeInStagger>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
      <section className='md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84dvh] md:h-auto'>{children}</section>
    </section>
  )
}
