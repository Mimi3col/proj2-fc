import { useState } from 'react'
import Card from '../components/Card'
import './App.css'
import info from './cardinfo'
import Header from '../components/Header'


function App(props) {
  const [Count, setCount] = useState(0)
  const size = info.length;


  return (
    <div className="App">
       <Header/>
       <Card question={info[1].front} answer={info[1].back}/>
       <button onClick={ () =>setCount(Count - 1)}>←</button>
       <button onClick={ ()=>setCount(Count + 1)}>→</button>
       <p>You are on Card:{Count}</p>
    </div>
  )
}

export default App
