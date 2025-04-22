import { useState } from 'react';
import './app.css'

import InputBox from './components/Input';
function App() {
  
const [input, setInput] = useState();
const [addText, setAddText] = useState([]);

const handleAdd = () => {
  setAddText([...addText,input]);
  setInput(" ");
}

  return (
    <>
    <div className="main">
      
      <div />
     <InputBox setInput={setInput} handleAdd={handleAdd}/>
     {
      addText.map((item,index)=>(
          <h4 className="item" key={index}>{item}</h4>
      )  )   
     }
    </div>
    </>
  )
}

export default App
