import { addBuilder } from '@/pages/redux/features/builderSlice'
import Image from 'next/image'
import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
const ChooseDevice = ({display}) => {

    const dispatch = useDispatch()
   const addHandler=(data)=>{
    dispatch(addBuilder(data))
   }
  const showDevices=(display)=>{
    let array =[]
    display.map((data,index)=>{
        array.push(
            <div key={index} className="flex flex-row bg-white justify-center items-center">
                <Image className='w-1/6' src={data.image} width={200} height={200} alt="No Image"/>
                <div className='w-4/6'>
                    <p>{data.name}</p>
                </div>
                <div className='flex flex-col items-center gap-2 w-1/6'>
                    <p className='text-center'>Price : {data.price}</p>
                    <button onClick={()=>addHandler(data)} className='bg-blue-500 w-2/3 p-1 rounded-md'>Add</button>
                </div>
            </div>
        )
    })
    return array
  }
    return (
    <div className='w-4/5 m-auto flex flex-col gap-5 border border-rose-400 p-2'>
        {showDevices(display)}
    </div>
  )
}

export default ChooseDevice
