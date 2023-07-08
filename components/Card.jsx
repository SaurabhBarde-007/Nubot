import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion} from "framer-motion";

const Card = (props) => {
    const{src,text,func} = props
  return (
    <motion.button transition={{duration:0.2}} whileHover={{scale:1.05}} className='w-[300px] sm:w-[450px] h-[90px] bg-[#000] flex justify-center content-center self-center rounded-lg gap-4 p-[20px]' onClick={()=>{
      func();
    }}>
      <img src={src} className='w-[30px] h-[30px] felx self-center'/>
      <span className="felx self-center whitespace-normal text-start text-white w-[300px]">
        {text}
      </span >
      <AiOutlineArrowRight className='w-[25px] h-[25px] felx self-center'/>
    </motion.button>
  )
}

export default Card