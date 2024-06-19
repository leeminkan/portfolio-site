import { ENV } from '@/lib/constants'
import { generateSEO } from '@/lib/generateSEO'

export async function generateMetadata() {
  const title = 'Demo'
  const description = 'demo'
  const image = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og?title=${title}`

  return {
    ...generateSEO(title, description, image, `/projects/${title}`)
  }
}

export default async function Page() {
  return null
}
