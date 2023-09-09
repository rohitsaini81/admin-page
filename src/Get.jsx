import axios from 'axios';
import React from 'react'

export default function Get({uri}) {
  const link = uri+"movies/"; 

    const getfun= ()=>{
axios.get(link).then(e=>console.log(e.data))
    }
  return (
    <div>
        <button onClick={getfun}>Get</button>
    </div>
  )
}
