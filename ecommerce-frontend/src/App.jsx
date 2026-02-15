import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState("Loading from backend...")

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => setMessage("Backend not reachable ❌"))
  }, [])

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🛒 DevOps E-Commerce App</h1>
      <h2>Frontend + Backend + Docker</h2>
      <p><b>Backend Response:</b> {message}</p>
    </div>
  )
}

export default App
