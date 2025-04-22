import './InputBox.css'

const InputBox = ({setInput, handleAdd}) => {
  return (
    <div >
    <input className='input' type="text"  onChange={(e)=>setInput(e.target.value)}/>
    <button className="" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default InputBox