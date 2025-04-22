

const AddName = ({setName}) => {
  return (
    <div>
    <input type="text" value={value} name="" id="" onChange={(e)=>setName(e.target.value)}/>
    <button onClick={(value)=>setName(value)}>add</button>
    </div>
  )
}

export default AddName