import { useState } from 'react'
import Card from '../components/Card'
import './App.css'
import info from './cardinfo'
import Header from '../components/Header'


function App(props) {
  const [Count, setCount] = useState(0)
  const size = info.length 

  return (
    <div className="App">
       <Header/>
       <Card question={info[Count].front} answer={info[Count].back}/>
       <button onClick={() =>setCount(Count - 1)}>←</button>
       <button onClick={() =>setCount(Math.floor(Math.random() * size))}>→</button>
    </div>
  )
}

export default App
