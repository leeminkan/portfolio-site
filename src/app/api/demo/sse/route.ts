import { NextRequest } from 'next/server'

export const runtime = 'nodejs'
// This is required to enable streaming
export const dynamic = 'force-dynamic'

import { content } from './constant'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function GET(req: NextRequest) {
  let responseStream = new TransformStream()
  const writer = responseStream.writable.getWriter()
  const encoder = new TextEncoder()

  req.signal.onabort = () => {
    writer.close()
  }

  setImmediate(async () => {
    try {
      for (const sentence of content) {
        await writer.write(encoder.encode('data: ' + sentence + '\n\n'))
        await sleep(1000)
      }
      writer.close().catch(() => {})
    } catch (error: any) {
      // if error does not come from closed writer
      if (error.code !== 'ERR_INVALID_STATE') {
        writer.write(encoder.encode('data: ' + 'An error occurred during sse request')).catch(() => {})
        writer.close().catch(() => {})
      }
    }
  })

  return new Response(responseStream.readable, {
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      Connection: 'keep-alive',
      'Cache-Control': 'no-cache, no-transform',
      'X-Accel-Buffering': 'no',
      'Content-Encoding': 'none'
    }
  })
}
