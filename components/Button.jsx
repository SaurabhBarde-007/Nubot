import React, { useState } from 'react'
import { AiFillCaretDown } from "react-icons/ai";

const Button = (props) => {
    const{src,text} = props

    const[active,setActive] = useState(false);

    const[srcUpdate,setSrcUpdate] = useState(src);
    const[textUpdate,setTextUpdate] = useState(text);

  return (
    <button className='w-[100px] sm:w-[150px]  h-[50px] bg-[#000] flex justify-center content-center self-center rounded-lg gap-2 ' onClick={()=>{
      setActive(!active);
    }}>
      <img src={srcUpdate} className='w-[30px] h-[30px] sm:w-[25px] sm:h-[25px] felx self-center'/>
      <span className=" self-center whitespace-normal text-start text-white w-auto hidden sm:flex">
        {textUpdate}
      </span >
      <AiFillCaretDown className='w-[25px] h-[25px] felx self-center'/>
      {active && 
        <div className='absolute top-[54px] z-40 left-[6px] bg-[#aaa] rounded-lg w-[98px] sm:w-[148px] h-auto p-[5px] flex flex-col justify-center content-center gap-1'>
          
            <button className='p-[10px] w-[90px] sm:w-[140px]  h-[50px] flex justify-center sm:justify-start content-center self-center rounded-lg gap-2 ' onClick={()=>{
              setSrcUpdate("./eth.png");
              setTextUpdate("Ethereum");
            }} >
              <img src="./eth.png" className='w-[30px] h-[30px] sm:w-[25px] sm:h-[25px] felx self-center'/>
              <span className=" self-center whitespace-normal text-start text-white w-auto hidden sm:flex">
                Ethereum
              </span >
            </button>

            <button className='p-[10px] w-[90px] sm:w-[140px]  h-[50px] flex justify-center sm:justify-start content-center self-center rounded-lg gap-2 ' onClick={()=>{
              setSrcUpdate("./sol.png");
              setTextUpdate("Solana");
            }} >
              <img src="./sol.png" className='w-[30px] h-[30px] sm:w-[25px] sm:h-[25px] felx self-center'/>
              <span className=" self-center whitespace-normal text-start text-white w-auto hidden sm:flex">
                Solana
              </span >
            </button>

            <button className='p-[10px] w-[90px] sm:w-[140px]  h-[50px] flex justify-center sm:justify-start content-center self-center rounded-lg gap-2 ' onClick={()=>{
              setSrcUpdate("./pol.png");
              setTextUpdate("Polygon");
            }} >
              <img src="./pol.png" className='w-[30px] h-[30px] sm:w-[25px] sm:h-[25px] felx self-center'/>
              <span className=" self-center whitespace-normal text-start text-white w-auto hidden sm:flex">
                Polygon
              </span >
            </button>

        </div>
        }
    </button>
  )
}

export default Button