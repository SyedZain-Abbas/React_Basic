import { useState } from "react"



function App() {
  
  const [text, setText] = useState('');
  const [addtext, setAddtext] = useState([]);

  const handleAdd = () =>{
    setAddtext([...addtext, text]);
    setText('')
  }

  const handleRemove = (index) =>{
        const newArr = addtext.filter((_,i)=> i !== index);
        setAddtext(newArr);
  }

  return (
    <>
   <div>

    <input type="text" value={text} onChange={e=>setText(e.target.value)}/>

    <h4>{text}</h4>    

    <button onClick={handleAdd}>Add</button>

    <ul>
      {
        addtext.map((item,index)=>(
            <li key={index}>{item} <button onClick={()=>handleRemove(index)}>Remove</button></li>
        ))
      }
    </ul>

   </div>
   </>
  )
}

export default App
