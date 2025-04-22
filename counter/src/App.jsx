import { useState } from 'react'
import FirstComp from './components/firstComp';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
        
  function handleClick () {
          setCount(count+1);
        }

  return (
    <>
    <p>this is in App component aka Parent Component</p>
    <p>the count no is: {count}</p>

    <FirstComp count={handleClick}/> 
    
     
   </>
  )
}

export default App
