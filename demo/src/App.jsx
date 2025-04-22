
import './App.css'
import StopWatch from './components/StopWatch'
import { InputBox } from './components'
import useCurrInfo from './hooks/useCurrInfo'
import { useState } from 'react'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmt, setConvertedAmt] = useState(0)

  const currencyInfo = useCurrInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmt(amount)
    setAmount(convertedAmt)
  }

  const convert = () => {setConvertedAmt(amount*currencyInfo[to])}
  
  return (
    
      <div className="App">
       <div>
        <InputBox/>
       </div>
      </div>
      
   
  )
}

export default App
