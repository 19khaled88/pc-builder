import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { removeBuilder } from "../redux/features/builderSlice";
import { useDispatch } from "react-redux";

const PcBuilder = ({ display, selectedCat }) => {
  const displayable = display.features;
  const dispatch = useDispatch()
  const router = useRouter();

  const chooseHandler = (category) => {
    router.push(`/pcbuilder/${category}`);
  };
  const cancelHandler=(category)=>{
    console.log(category)
    dispatch(removeBuilder(category))
  }

  const isSelected =(selectedCat ,current)=>{
    let isTrue = false
    selectedCat.find((element)=> element.category === current.category && (isTrue = true))    
    if(isTrue === false){
      return<p onClick={() => chooseHandler(current.category)} className="w-1/4 mr-5 p-2 rounded-md  flex flex-row justify-center items-center border border-blue-400 hover:bg-blue-400 cursor-pointer">Choose</p>
    }else{
      return<p onClick={()=>cancelHandler(current.category)} className="cursor-pointer w-1/4 mr-5 p-2 rounded-md  flex flex-row justify-center items-center border border-rose-400 hover:bg-rose-400">Cancel</p>
    }
  }
 
  const allDevices = (displayable) => {
    let array = [];
    displayable.map((data, index) => {
      array.push(
        <div className="flex flex-row gap-5" key={index}>
          <Image
            className="w-1/4 p-2 m-2"
            src={data.image}
            width={100}
            height={100}
            alt="No Image"
          />
          <div className="flex flex-row w-3/4 items-center">
            <p className="w-3/4 text-left">{data.name}</p>
            {isSelected(selectedCat,data)}
            
          </div>
        </div>
      );
    });
    return array;
  };
  return (
    <div className="w-2/4 border border-rose-400 m-auto">
      {allDevices(displayable)}
    </div>
  );
};

export default PcBuilder;
