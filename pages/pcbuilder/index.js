import RootLayout from '@/components/Layouts/RootLayout'
import path from 'path'
import fsPromises from 'fs/promises'
import PcBuilder from '@/components/PcBuilder/PcBuilder'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useState } from 'react'
const PcBuilderPage = ({ display }) => {
  const router = useRouter()
  const { data, isLoading, isSuccess, isError } = useSelector(
    (state) => state.builder,
  )
  const numberOfItem = (data) => {
    let amount = 0
    data.map((element) => {
      amount += parseInt(element.price)
    })
    return amount
  }

  console.log(data)
  //  let isExist = false
  //  if(Object.keys(data).length > 0){
  //   data.map((element)=>{
  //    display.all.map((newElement)=>{
  //     if(newElement.id === element.id){
  //         isExist = true
  //      }
  //    } )
  //   })
  //  }

  return (
    <div className="p-2 flex flex-col justify-center text-center">
      <p className="text-2xl p-5">Pc Builder page</p>
      <div className="border border-blue-400 w-3/6 m-auto h-16 mb-2 flex flex-row justify-between ">
        <div className="flex flex-row ml-2 ">
          <button
            className={`border border-rose-400 my-1 px-3 rounded-md hover:bg-rose-400 ${
              Object.keys(data).length < 5
                ? 'opacity-50 cursor-not-allowed'
                : null
            }`}
          >
            Finish
          </button>
        </div>
        <div className="flex flex-col items-start px-3 bg-blue-400 mr-2 my-1 float-right border border-blue-400 rounded-md">
          <p> Items : {Object.keys(data).length}</p>
          <p>
            {' '}
            Total : {Object.keys(data).length > 0 ? numberOfItem(data) : 0}
          </p>
        </div>
      </div>
      <PcBuilder display={display} selectedCat={data} />
    </div>
  )
}

export default PcBuilderPage

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getServerSideProps = async () => {
  if (typeof window === undefined) {
    return {
      props: {
        display: [],
      },
    }
  }
  const filePath = path.join(process.cwd(), 'db.json')
  const jsonData = await fsPromises.readFile(filePath)
  const data = JSON.parse(jsonData)

  return {
    props: {
      display: data,
    },
  }
}
