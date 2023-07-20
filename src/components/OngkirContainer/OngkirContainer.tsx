
import React from 'react'
import {fetchProvince,fetchCity} from '@/utils/api';
import Tracking from '@/components/Tracking/Tracking'
// async function fetchProvince(){
//     return new Promise(async(resolve)=>{
//         const province = await fetch(`https://api.rajaongkir.com/starter/province`,{
//             headers:{
//                 key:'a3ffd2ed3d4c653138d606e0c50dc747'
//             }
//         })
//         console.log(province)

//         return resolve(province.json())
//     })
// }
// async function fetchData(): Promise<void> {
//     const apiKey = 'a3ffd2ed3d4c653138d606e0c50dc747';
//     const apiUrl = 'https://api.rajaongkir.com/starter/province';
  
//     try {
//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           key: apiKey,
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok.');
//       }
  
//       const data = await response.json();
//       console.log(data); // Process the fetched data here
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
  
  
const OngkirContainer=async()=>{
    const city = await fetchCity()
    const province = await fetchProvince()

    return (
        <>
            <div className="w-full h-screen">
                <Tracking dataProvince={province}  dataCity={city}/>
            </div>
        </>
    )
}

export default OngkirContainer