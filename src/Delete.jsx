import axios from 'axios';
import React, { useState } from 'react'

export default function Delete({uri}) {
  const link = uri+"movie/delete/"; 
 

    const [id, setId]=useState("...");
    const clickhandler =()=>{
        delet(link+id)
        }
  return (<>
   <div className='bg-primary'>
    <input type="text" onChange={e=>setId(e.target.value)} value={id}/>
    <button onClick={clickhandler}>Delete</button>
</div>

    </>
  )
}


async function  delet(data){
    try {
        const response = await axios.delete(data, { timeout: 5000 }); 
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error); }}