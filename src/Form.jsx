import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Form({link}) {
  const uri = link+"movie/data"; 
  const { register, handleSubmit } = useForm();
  const [response, setResponse]= useState("")
  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await axios.post(uri, data, { timeout: 5000 }); 
      console.log(response.data);
      setResponse(response.data)
    } catch (error) {
      console.error("Error:", error);
      setResponse(error);
    }
  }

  return (<div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Title" {...register("title", { required: true })} />
      <br />
      <input placeholder="Description" {...register("decription", { required: true })} /> 
      <br />
      <input placeholder="Link" {...register("link", { required: true })} />
      <br />
      <input placeholder="Prelink" {...register("prelink")} /> 
      <br />
      <input placeholder="Text1" value={"no data"}{...register("text1")} /> 
      <br />
      <input placeholder="Text2" value={"no data"}{...register("text2")} /> 
      <br />
      <input placeholder="Text3" value={"no data"}{...register("text3")} /> 
      <br />
      <input placeholder="Text4" value={"no data"}{...register("text4")} /> 
      <br />
     
      <input type="submit" />
    </form>
    <h3>{response.title}</h3>
    </div>
  );
}
