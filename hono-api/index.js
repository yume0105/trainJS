import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.use('*', cors()) // Add

app.get('/', (c) => {
  return c.text('Hello from Hono!')
})

app.get('/api/message', (c) => {
  return c.json({ message: 'こんにちは！Reactからのリクエスト成功！' })
})

serve(app)

