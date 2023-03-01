import { useState } from 'react'
import Card from '../components/Card'
import './App.css'



function App() {
  const [Count, setCount] = useState(0)
  

  return (
    <div className="App">
       <h1>My FlashCards (part 1)</h1>
       <p>These are my flash cards for learning jsx</p>
       <Card question='help' answer='no help'/>
       <button onClick={ () =>setCount(Count - 1)}>←</button>
       <button onClick={ ()=>setCount(Count + 1)}>→</button>
       <p>You are on Card:{Count}</p>
    </div>
  )
}

export default App
