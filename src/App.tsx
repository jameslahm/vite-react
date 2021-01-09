import React, { useState } from 'react'
import { Button } from "antd";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Button type="primary" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
  )
}

export default App
