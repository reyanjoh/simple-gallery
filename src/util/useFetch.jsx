import { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(()=>{
        const getData = async() =>{
            
            try {
                const res = await fetch(url);
                const data = await res.json()
                // const err = await res.err();
                setData(data);
                setIsLoading(false);
            } catch (err) {
                setErr(err)
            }        
                
        }
        getData()
    },[url]);

  return {data, isLoading, err}
}

export default useFetch