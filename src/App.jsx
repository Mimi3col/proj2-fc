import { useState } from 'react'
import Card from '../components/Card'
import './App.css'



function App() {
  const [nextCount, setNextCount] = useState(0)
  const [backCount, setBackCount] = useState(0)

  return (
    <div className="App">
       <h1>My FlashCards (part 1)</h1>
       <p>These are my flash cards for learning jsx</p>
       <h1>{backCount}:{nextCount}</h1>
       <button onClick={ () =>setBackCount(backCount + 1)}>←</button>
       <button onClick={ ()=>setNextCount(nextCount + 1)}>→</button>
    </div>
  )
}

export default App
