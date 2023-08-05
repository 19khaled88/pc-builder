'use client'
import { useCreatePcBuilderMutation } from "@/pages/redux/api/api";
import Image from "next/image";
import React from "react";

const ChooseDevice = ({ display }) => {
  
  const [postPcBuilder, { isLoading, isSuccess, isError }] =
    useCreatePcBuilderMutation();
console.log(isLoading,isSuccess,isError)
const addHandler=(data)=>{
    const options ={data}
    postPcBuilder(options)
}
  const showDevices = (display) => {
    let array = [];
    display.map((data, index) => {
      array.push(
        <div
          key={index}
          className="flex flex-row bg-white justify-center items-center"
        >
          <Image
            className="w-1/6"
            src={data.image}
            width={100}
            height={100}
            alt="No Image"
          />
          <div className="w-4/6">
            <p className="sm:text-lg md:text-lg lg:text-lg text-md xl:text-2xl">
              {data.name}
            </p>
            <p>Type :{data.category}</p>
            <p>Rating :{data.rating}</p>
            <p>Status :{data.status}</p>
          </div>
          <div className="flex flex-col items-center gap-2 w-1/6">
            <p className="text-center">Price : {data.price}</p>
            <button
              onClick={() => addHandler(data)}
              className="bg-blue-500 w-2/3 p-1 rounded-md"
            >
              Add
            </button>
          </div>
        </div>
      );
    });
    return array;
  };
  return (
    <div className="w-4/5 m-auto flex flex-col gap-5 border border-rose-400 p-2">
      {showDevices(display)}
    </div>
  );
};

export default ChooseDevice;
