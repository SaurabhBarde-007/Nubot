import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = (props) => {
    const{src,text,func} = props
  return (
    <button className='w-[300px] sm:w-[450px] h-[90px] bg-[#000] flex justify-center content-center self-center rounded-lg gap-4 p-[20px]' onClick={()=>{
      func();
    }}>
      <img src={src} className='w-[30px] h-[30px] felx self-center'/>
      <span className="felx self-center whitespace-normal text-start text-white w-[300px]">
        {text}
      </span >
      <AiOutlineArrowRight className='w-[25px] h-[25px] felx self-center'/>
    </button>
  )
}

export default Card