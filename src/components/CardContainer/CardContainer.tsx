'use client'
import React, {FC, Component } from "react";
import Image from "next/image";
import badge from "../../assets/badge_alt.png";
import {useEffect,useState} from 'react'
import {data}from '../CardContainer/types'
interface Props {
  title:string,
  id?:number,
  data:data[]
}
interface DataObj<T = string,D=Boolean>{
  id:Number,
  nik:T,
  judul:D
}
const CardContainer: FC<Props> = (props) => {
  const [number,setNumber] = useState<Number>(1)
  const [obj,setObj] = useState<DataObj>({id:1, nik:"sdf",judul:false})
    console.log(props.data,'data')
  const { title } = props;
  console.log(title,'title ')

  useEffect(()=>{
    console.log(title,'title use effect')
  },[])
  return (
    <>
      <div className="w-full flex flex-col mb-8">
        <div className="flex flex-row justify-between items-center w-full mb-7">
          <p className="text-xl font-bold">
            Spotify original & exclusive shows
          </p>
          <p className="text-sm font-semibold text-gray-400 mt-2">Show all</p>
        </div>
        <div className="w-full  flex flex-row wrap justify-between">
          <div className="w-[17%] bg-[#181818] h-[260px] rounded-md p-4">
            <div className="w-full h-full rounded-lg">
              <Image src={badge} alt={"error"} className="h-3/5" />
              <p className="truncate mb-2 text-sm mt-4 font-semibold">
                Pengembangan bro bro bro
              </p>
              <p className="text-sm font-normal text-gray-400">
                Andreas Bordex x Boxsess
              </p>
            </div>
          </div>
          <div className="w-[17%] bg-[#181818] h-[260px] rounded-md p-4">
            <div className="w-full h-full rounded-lg">
              <Image src={badge} alt={"error"} className="h-3/5" />
              <p className="truncate mb-2 text-sm mt-4 font-semibold">
                Pengembangan bro bro bro
              </p>
              <p className="text-sm font-normal text-gray-400">
                Andreas Bordex x Boxsess
              </p>
            </div>
          </div>
          <div className="w-[17%] bg-[#181818] h-[260px] rounded-md p-4">
            <div className="w-full h-full rounded-lg">
              <Image src={badge} alt={"error"} className="h-3/5" />
              <p className="truncate mb-2 text-sm mt-4 font-semibold">
                Pengembangan bro bro bro
              </p>
              <p className="text-sm font-normal text-gray-400">
                Andreas Bordex x Boxsess
              </p>
            </div>
          </div>
          <div className="w-[17%] bg-[#181818] h-[260px] rounded-md p-4">
            <div className="w-full h-full rounded-lg">
              <Image src={badge} alt={"error"} className="h-3/5" />
              <p className="truncate mb-2 text-sm mt-4 font-semibold">
                Pengembangan bro bro bro
              </p>
              <p className="text-sm font-normal text-gray-400">
                Andreas Bordex x Boxsess
              </p>
            </div>
          </div>
          <div className="w-[17%] bg-[#181818] h-[260px] rounded-md p-4">
            <div className="w-full h-full rounded-lg">
              <Image src={badge} alt={"error"} className="h-3/5" />
              <p className="truncate mb-2 text-sm mt-4 font-semibold">
                Pengembangan bro bro bro
              </p>
              <p className="text-sm font-normal text-gray-400">
                Andreas Bordex x Boxsess
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
