import React, {useState,useEffect} from 'react'

const Timer = () => {
    const [count,setTimer] = useState(10);

    useEffect(()=>{
        const id = setInterval(()=>{
            if(count>=20)
            {
                clearInterval(id);
            }
            else
            {
                setTimer((prev)=>prev+1);
            }
            
        },1000);
        return () => {
            clearInterval(id);
        }
    },[count])
  return (
    <div>
        <h1>Timer</h1>
        <h1>Sec : {count}</h1>
    </div>
  )
}

export default Timer