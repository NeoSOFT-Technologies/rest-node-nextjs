import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { KeepAlive, AliveScope } from 'react-activation'

function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      count: {count}
      {console.log(count)}
      <button onClick={() => setCount((count) => count + 1)}>add</button>
    </>
  )
}

function App() {
  const [show, setShow] = useState(true)

  return (
  <>
      <button onClick={() => setShow((show) => !show)}>Toggle</button>
      <div>without {`<KeepAlive>`}</div>
      {show && <Counter />}
      <div>with {`<KeepAlive>`}</div>
      {show && (
     
          <Counter />
     
       

      )}
  </>
  )
}

export default App;

