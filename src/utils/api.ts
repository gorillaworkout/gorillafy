// utils/api.ts


export async function fetchProvince():Promise<any>{
    return new Promise(async(resolve)=>{
        const province = await fetch(`https://api.rajaongkir.com/starter/province`,{
            headers:{
                key:'a3ffd2ed3d4c653138d606e0c50dc747'
            }
        })
        if(province){
            resolve(province.json())
        }
    })
}



export async function fetchCity():Promise<any>{
    return new Promise(async(resolve)=>{
        const city = await fetch(`https://api.rajaongkir.com/starter/city`,{
            headers:{
                key:'a3ffd2ed3d4c653138d606e0c50dc747'
            }
        })
        if(city){
            resolve(city.json())
        }
    })
}


export async function fetchCost():Promise<any>{
    return new Promise(async(resolve)=>{
        const cost = await fetch(`https://api.rajaongkir.com/starter/cost`,{
            method:'post',
            headers:{
                key:'a3ffd2ed3d4c653138d606e0c50dc747',
                'content-type': 'application/x-www-form-urlencoded'
            },
            form: {origin: '501', destination: '114', weight: 1700, courier: 'jne'}
        })
        if(cost){
            resolve(cost.json())
        }
    })
}

