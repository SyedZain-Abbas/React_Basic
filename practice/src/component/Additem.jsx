import 'react'

// eslint-disable-next-line react/prop-types
const Additem = ({setitem, AddItem}) => {
  return (
    <div>

        <input type="text"  placeholder='enter the item' onChange={(e)=>setitem(e.target.value)}/>
        <button onClick={AddItem}> add </button>
    </div>
  )
}

export default Additem;