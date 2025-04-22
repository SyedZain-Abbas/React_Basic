import React, {useId} from 'react'

function InputBox ({
    label,
    amount,
    onAmountChange,
    oncurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
})  {
    const amountInputId = useId()

  return (
    <div>
        <label htmlFor={amountInputId}>
            {label}
        </label>
        <input
        id={amountInputId}
        type="number"
        placeholder="Amount" 
        disabled = "{amountDisable}"
        value = {amount}
        onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value)) }/>
        InputBox
        <div>
            <select name="" id="" value={selectCurrency}
            onChange={(e)=>oncurrencyChange && oncurrencyChange(e.target.value)}
            disabled={currencyDisable}>
               {currencyOptions.map((currency) => {(<option key={currency} value={currency}>{currency}</option>)})
            } 
            </select>
        </div>
        </div>
  );
}

export default InputBox;