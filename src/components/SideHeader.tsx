'use client'
import React, { Component } from 'react'
import {BiSolidHomeAlt2} from 'react-icons/bi'
import {BsSearch,BsArrowRight,BsArrowLeft} from 'react-icons/bs'
import {BiSolidSearch,BiGridAlt} from 'react-icons/bi'
import {GoHome} from 'react-icons/go'
import {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
export default function SideHeader(){
    const [isActive, setIsActive] = useState(1)
    const [isOpen,setIsOpen] = useState(false)
    const onActiveHeader=(value:number)=>{
        setIsActive(value)
        console.log(value,'value')
    }
    return (
        <>
            <div className={`${isOpen ? 'w-11/12' : 'w-1/3'} h-screen flex flex-col px-2 py-2`}>
                <div className="w-full h-1/6 bg-[#121212] px-4 py-1 mb-2 rounded-lg">
                    {
                        isActive === 1 ?
                        <>
                            <div className="w-full h-[50px] flex justify-start flex-row items-center hover:cursor-pointer " onClick={(e)=>onActiveHeader(1)}>
                                <BiSolidHomeAlt2 size="1.5rem" className="mx-2 text-gray-300" />
                                <p className="text-base  font-semibold ml-2 text-gray-300	">Home</p>
                            </div>
                            <div className="w-full h-[50px] flex justify-start flex-row items-center hover:cursor-pointer" onClick={(e)=>onActiveHeader(2)}>
                                <BsSearch size="1.5rem" className="mx-2 hover:text-white"/>
                                <p className="text-base font-semibold ml-2 text-gray-300	">Search</p>
                            </div>
                        </>
                        :
                        <>
                        <div className="w-full h-[50px] flex justify-start flex-row items-center hover:cursor-pointer" onClick={(e)=>onActiveHeader(1)}>
                            <GoHome size="1.5rem" className="mx-2 text-white"/>
                            <p className="text-base font-semibold ml-2 text-gray-300	">Home</p>
                        </div>
                        <div className="w-full h-[50px] flex justify-start flex-row items-center hover:cursor-pointer" onClick={(e)=>onActiveHeader(1)}>
                            <BiSolidSearch size="1.5rem" className="mx-2 text-gray-300"/>
                            <p className="text-base font-semibold ml-2 text-gray-300	">Search</p>
                        </div>
                    </>
                    }
                </div>
                <div className="w-full h-[70%] bg-[#121212]  mb-2 px-2 rounded-lg">
                    <div className="w-full h-[50px] flex justify-between flex-row items-center hover:cursor-pointer px-2 mb-2">
                        <div className='flex flex-row'>
                            <BiGridAlt size="1.5rem" className="mx-2 text-gray-300"/>
                            <p className="text-base font-semibold text-gray-300	">Your Library</p>
                        </div>
                        <div className='flex flex-row px-2'>
                            <AiOutlinePlus size="1.3rem" className="mr-2 text-gray-300"/>
                            {isOpen?
                                <BsArrowLeft size="1.3rem" className="ml-3 text-gray-300" onClick={()=>setIsOpen(false)}/>
                                :
                                <BsArrowRight size="1.3rem" className="ml-3 text-gray-300" onClick={()=>setIsOpen(true)}/>
                            }
                        </div>
                    </div>
                    <div className="w-full h-[140px] flex flex-col justify-between bg-[#242424] rounded-lg p-5 mb-6">
                        <p className="text-md mb-3 tracking-normal">Create your first playlist</p>
                        <p className="text-xs mb-4 tracking-wide">It's easy, we'll help you</p>
                        <div className="w-fit rounded-2xl bg-white flex justify-center items-center px-4 py-1 mt-2">
                            <p className="text-black font-semibold text-sm">Create playlist</p>
                        </div>
                    </div>
                    <div className="w-full h-[140px] flex flex-col justify-between bg-[#242424] rounded-lg p-5">
                        <p className="text-md mb-3 tracking-normal">Let's find some podcast to follow</p>
                        <p className="text-sm mb-4 tracking-normal">We'll keep you updated on new episodes</p>
                        <div className="w-fit rounded-2xl bg-white flex justify-center items-center px-4 py-1 mt-2">
                            <p className="text-black font-semibold text-sm tracking-normal">Browse podcasts</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}