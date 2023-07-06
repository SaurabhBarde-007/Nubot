import React from 'react'
import Card from "@/components/Card"
import Button from "@/components/Button"

const Index = () => {
  return (
    <div className='w-[100vw] h-[88.5vh] bg-white mt-[76px]'>
        <div className='w-[100vw] h-[200px] flex justify-center content-center relative' >
            <div className='absolute z-20 top-[80px] flex justify-center content-center'>
                <div className='w-[90vw] sm:w-[80vw] md:w-[600px]  rounded-lg h-[60px] bg-white flex justify-start content-center p-1 relative'>
                    <Button src="./eth.png" text="Ethereum"/>
                    <div className='w-[2px] h-[50px] rounded-lg bg-[#aaa] mx-2 flex self-center'></div>
                    <div className='w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[40vw] xl:w-[27vw] h-[50px] rounded-lg bg-black flex self-center'>
                        <input type='text' placeholder='Mention @ to tag NFT collections or Marketplaces' className='w-[100%] h-[100%] rounded-sm p-2 text-[#000] focus:outline-none' />
                    </div>
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