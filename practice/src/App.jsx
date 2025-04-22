 
//import { useSelector, useDispatch } from 'react-redux'
//import { decrement, increment, incrementByAmount, multiply } from './redux/counter/counterSlice'
//import New from './component/New'
import { useState } from 'react'
import './app.css'
import Additem from './component/Additem'

const App = () => {
 // const count = useSelector((state)=> state.counter.value)
 // const dispatch = useDispatch()
  const [bgclr, setBgClr] = useState("red");
  const [item, setitem] = useState('')
  const [items, setItems] = useState([])

  function handleClick () {
    const  color = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBgClr(color)
  }  

  function AddItem () {
    setItems([
      ...items,
      
    ])
  }
  

  return (
    <>
    <div style={{backgroundColor : bgclr}}>
     {/* <New name="zain"/>
      <New>
        <p> Syed Zain Abbas </p>
        <p> I am a Frontend Development Learner</p>
      </New>
*/}
      <button onClick={handleClick}>Change Color</button>
      <Additem setitem={setitem} AddItem={AddItem}/>
      {item}
      {
        items
      }
      
      {/*<button onClick={()=>dispatch(decrement())}>-</button>
      <p>App count is {count}</p>
      <button onClick={()=>dispatch(increment())}>+</button>
      <br />
      <button onClick={()=>dispatch(incrementByAmount(4))}>increment*4</button>
      <br />
      <button onClick={()=>dispatch(multiply())}>*</button>*/}
    </div>
    </>
  )
}

export default App
