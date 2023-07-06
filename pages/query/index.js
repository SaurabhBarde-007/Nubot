import React from 'react'
import Card from "@/components/Card"

const Index = () => {
  return (
    <div className='w-[100vw] h-[88.5vh] bg-white mt-[76px]'>
        <div className='w-[100vw] h-[200px] flex justify-center content-center relative' >
            <div className='absolute z-20 text-white top-[80px]'>
                <div className='w-[90vw] sm:w-[80vw] md:w-[600px]  rounded-lg h-[50px] bg-white'>

                </div>
            </div>
            <div className='w-[100vw] h-[200px]'>
                <img src='./background.jpg' className='w-[100vw] h-[200px] object-cover'/>
            </div>
            
        </div>
        <div className='w-[100vw] h-[403px] flex flex-col justify-center gap-2'>
            <div className='w-[300px] sm:w-[450px] h-[30px] flex self-center'>
                <span className='text-black flex self-start '>Try These</span>
            </div>
            
            <Card src="./eth.png" text="top 5 collections on Blur marketplace in last 7 days"/>
            <Card src="./sol.png" text="top 5 top 10 holders of DeGods collection"/>
            <Card src="./pol.png" text="top 10 sales of y00ts collection"/>
        </div>
    </div>
  )
}

export default Index