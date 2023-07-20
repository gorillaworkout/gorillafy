import Image from "next/image";
import SideHeader from "../components/SideHeader";
import { AiOutlineLeft, AiOutlineRight,AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BiUser } from "react-icons/bi";
// import badge from "../assets/badge_alt.png";
// import CardContainer from "@/components/CardContainer/CardContainer";
// import {useState} from 'react'
import OngkirContainer from "@/components/OngkirContainer/OngkirContainer";
export default function Home() {

  const data = [
    {id:1},
    {id:2},
    {id:3}
  
  ]
  return (
    <main className="w-screen h-screen flex flex-row">
      <SideHeader />
      <div className="w-3/4 h-screen flex flex-col py-2 pr-2">
        <div className="w-full h-screen overflow-y-auto  bg-[#121212] rounded-lg">
          <div className="w-full flex flex-col ">
            <div className="w-full  sticky top-0 flex flex-row justify-between items-center px-5 py-4">
              <div className="flex flex-row">
                <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-[#080808] mr-1">
                  <AiOutlineLeft className="text-white " size="1.3rem" />
                </div>
                <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-[#080808] ml-1">
                  <AiOutlineRight className="text-white " size="1.3rem" />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="h-[35px] flex justify-center items-center rounded-full bg-white mr-1 px-4 py-1">
                  <p className="text-black text-sm font-semibold">
                    Explore Premium
                  </p>
                </div>
                <div className="h-[35px] flex justify-center items-center rounded-full bg-[#080808] mr-1 px-3 py-2 ml-1">
                  <MdOutlineDownloadForOffline
                    className="text-white mr-1"
                    size="1.3rem"
                  />
                  <p className="text-white text-sm font-semibold">
                    Install App
                  </p>
                </div>
                <div className="bg-[#080808] h-[35px] w-[35px] rounded-full flex justify-center items-center">
                  <BiUser className="text-white" size="1.3rem" />
                </div>
              </div>
            </div>
            <div className="w-full px-5">
            <OngkirContainer/>
           
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
