import { useEffect,useState } from "react";

function useCurrInfo (currency) {
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch()
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    },[currency])
    return data
}

export default useCurrInfo;