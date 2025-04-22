import Component from './components/Component'
import './App.css'
import { useState } from 'react'
import AddName from './components/AddName'

function App() {

  const [state, setState] = useState(true)

  const [name, setName] = useState()
  const [names, setNames] = useState([])
  

  return (
    <>
     <div>
      {
        state?<Component/>:<h3>no Display</h3>
      }
      <button onClick={()=>setState(!state)}>toggle</button>
     </div>
     {
      name.map((name,index)=>{
        <h4 key={index}>
          name
        </h4>
        })
     }
     <AddName setName={setName}/>
    </>
  )
}

export default App
