'use client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [messages, setMessages] = useState<string[]>([])

  useEffect(() => {
    const evtSource = new EventSource('/api/demo/sse', {
      withCredentials: true
    })

    evtSource.onmessage = event => {
      setMessages(messages => [...messages, `Kan: ${event.data}`])
    }
    evtSource.onerror = error => console.log('onerror', error)
    evtSource.onopen = open => console.log('onopen', open)

    return () => evtSource.close()
  }, [])

  return (
    <div className='p-5'>
      <div className='flex justify-center'>Demo SSE</div>
      <ul className='border p-2 mt-2'>
        {messages.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
