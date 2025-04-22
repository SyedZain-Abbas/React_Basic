import { useState } from "react";
import data from './data.jsx';
import "./Styles.css";

const Accordion = () => {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultpile] = useState([]);

    function handleSingleSelection(getcurrentId){
        setSelected(getcurrentId === selected ? null : getcurrentId);
    }

    function handleMultiSelction(getcurrentId){
            let copyMultiple = [...multiple];
            const findIndexOfCurrentId = copyMultiple.indexOf(getcurrentId)
            console.log(findIndexOfCurrentId);

            if(findIndexOfCurrentId === -1)copyMultiple.push(getcurrentId)
            else copyMultiple.splice(findIndexOfCurrentId, 1)

            setMultpile(copyMultiple);
    }
    console.log(selected,multiple);

  return (
    <div className="wrapper">
        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>
            Enable MultiSelection</button>
      <div className="accordion">
        {
            data && data.length > 0 ? (
                data.map((dataItem)=>(
                    <div className="item" key={data.id}>
                        <div onClick={
                            enableMultiSelection
                             ? ()=>handleMultiSelction(dataItem.id)
                             : ()=>handleSingleSelection(dataItem.id)} 
                             className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection 
                            ? multiple.indexOf(dataItem.id) !== -1 &&
                            <div className="content">{dataItem.answer}</div> :
                            selected === dataItem.id && 
                            <div className="content">{dataItem.answer}</div>

                        }
                        {/*
                            selected === dataItem.id || multiple.indexOf(dataItem.id !== -1) ? (
                            <div className="content">{dataItem.answer} </div>) 
                            :null
                       */ }
                    </div>
                ))
            ):(
                <div>NO Data Found!</div>
            )
        }
      </div>
    </div>
  )
}

export default Accordion