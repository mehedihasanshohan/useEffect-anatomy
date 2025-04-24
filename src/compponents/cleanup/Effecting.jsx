import React, { useEffect, useState } from 'react'

const Effecting = () => {
  const [click, setClick] = useState(0);

  useEffect(()=>{
    console.log("effecting");
    // cleanup function
    return ()=>{
        console.log('cleanup')
    }
  },[]);


  return (
    <div>Effecting
    <button
        className='bg-blue-900 text-white px-2 rounded-sm ml-2'
        onClick={()=> setClick(click+1)}>clicked: {click}</button>
    </div>
  )
}

export default Effecting