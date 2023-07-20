'use client'
import React, {FC, useState,useEffect } from 'react'
import { ProvinceInt, CitySelect, ProvinceSelect, CityInt } from './types';
import Select, { ActionMeta, SingleValue } from 'react-select';
import Axios from 'axios'
interface ProvinceData{
    dataProvince:ProvinceInt
    dataCity:CityInt,
    
}


const Tracking:FC<ProvinceData>=(props)=>{
    // const [province,setProvince] = useState<ProvinceSelect[] >([])
    const [city,setCity] = useState<CitySelect[] >([])

    const [origin,setOrigin]=useState<SingleValue<string> | null>(null);
    const [destination,setDestination]=useState<SingleValue<string> | null>(null);
    const [weight,setWeight]=useState<string>('')
    const [finalCost,setFinalCost]=useState<any>([])


    const defineCity=()=>{
        let data = props.dataCity.rajaongkir.results
        let city = data.map((val,index)=>{
            return {
                value:`${val.city_id}`,
                label:`${val.city_name}, ${val.province}, ${val.postal_code}`
            }
        })
        setCity(city)
    }

    const onOriginCheck = (newValue: SingleValue<string>, actionMeta: ActionMeta<string> ) => {
        // console.log(newValue,'new value', newValue?.value)
        setOrigin(newValue)
    };
    const onDestinationCheck = (newValue: SingleValue<string>, actionMeta: ActionMeta<string>) => {
        setDestination(newValue)
    };

    const onWeightCheck = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const inputValue = event.target.value;
        const parsedValue = Number(inputValue);
        if(parsedValue){
            console.log(event.target.value)
            setWeight(inputValue)
        }else {
            setWeight('')
        }
    }
    
    const onCheckHarga=async()=>{
        interface IForm  {
            origin:string,
            destination:string,
            weight:number,
            courier:string
        }
        // console.log(event.target.value)
        // console.log(origin,destination,weight)
        // console.log(origin.value,'origin label')
        let originId = origin?.value
        let destinationId = destination?.value
        let form = {
            origin:originId,
            destination:destinationId,
            weight:parseInt(weight),
            courier:'jne'
        }
        Axios.get(`https://rajaongkirahsan.onrender.com/api/ongkos/${form.origin}/${form.destination}/${form.weight}/${form.courier}`)
        .then((res)=>{
            console.log(res.data,'73')
            console.log(res?.data?.rajaongkir.results[0].costs)
            setFinalCost(res?.data?.rajaongkir.results[0].costs)
            
        }).catch((err)=>{
            console.log(err)
        })
        // const cost = await fetch(`https://api.rajaongkir.com/starter/cost`,{
        //     method:'post',
        //     headers:{
        //         key:'a3ffd2ed3d4c653138d606e0c50dc747',
        //         'content-type': 'application/x-www-form-urlencoded'
        //     },
        //     body: JSON.stringify({origin: '501', destination: '114', weight: 1700, courier: 'jne'})
        //     // form: {origin: '501', destination: '114', weight: 1700, courier: 'jne'}
        // })
        // console.log(cost)
    }  
    

    useEffect(()=>{
        defineCity()
    },[])
    return  (
        <>
            <div className="flex flex-col ">
                <p className="text-bold text-[30px]">TARIF KIRIMAN</p>
                <div className="w-full flex flex-col">
                    <>
                        <Select options={city}  value={origin} onChange={onOriginCheck} placeholder="Origin Shipment" className="text-black w-min-[200px]  mb-2"/>
                    </>
                    <>
                        <Select options={city}  value={destination} onChange={onDestinationCheck} placeholder="Destination Shipment" className="text-black w-min-[200px]  mb-2"/>
                    </>
                    <input type="number" placeholder="weight(gram)" value={weight} onChange={onWeightCheck} className="w-[150px] h-[40px] rounded-md border-slate-100 mb-2 px-2 text-black" />
                </div>
                <div onClick={onCheckHarga} className="p-4 flex justify-center items-center bg-white rounded-md  text-black hover:text-white hover:cursor-pointer hover:bg-[#242424] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mt-4 ">
                    Check Harga
                </div>

                <div className="w-full h-[100px]">
                    
                    {
                        finalCost?.map((val:any,index:any)=>{
                            console.log(val,'val')
                            return (
                                <>
                                    <div className="flex flex-col w-full">
                                        <div className="flex flex-col w-1/2 justify-between bg-white rounded-md my-5 p-4">
                                            <p className="text-black">
                                                Jenis Layanan :  <span> {val.service}</span> 
                                            </p>
                                            <p className="text-black">
                                                Harga :  <span> {val.cost[0].value}</span>
                                            </p>
                                            <p className="text-black">
                                                Description : <span> {val.description}</span>
                                            </p>
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Tracking