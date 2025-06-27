import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <h1>React × Hono サンプル</h1>
      <p>APIからのメッセージ: {message}</p>
    </div>
  )
}

export default App

