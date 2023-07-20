export interface ProvinceInt{
    rajaongkir:{
        query:[],
        status:{
            code:Number,
            description:String
        },
        results:Province[]
        province:ProvinceSelect[]
        finalCost:ICost
    }
}

export interface Province {
    province_id: string;
    province: string;
  }

export interface ProvinceSelect{
    value:string,
    label:string
}
  

export interface CityInt{
    rajaongkir:{
        query:[],
        status:{
            code:Number,
            description:String
        },
        results:City[]
        city:CitySelect[]
    }
}

export interface City {
    city_id:string,
    province_id: string,
    province:string,
    type: string,
    city_name:string,
    postal_code: string
  }

export interface CitySelect{
    value:string,
    label:string
}
  

export interface ICost{
    rajaongkir:{
        destination_details:{
            city_id:string,
            city_name:string,
            postal_code:string,
            province:string,
            province_id:string,
            type:string,
        },
        origin_details:{
            city_id:string,
            city_name:string,
            postal_code:string,
            province:string,
            province_id:string,
            type:string,
        },
        query:{
            courier:string,
            destination:string,
            origin:string,
            weight:number
        },
        results:[
            {
                code:string,
                name:string,
                costs:[
                    {
                        service:string,
                        description:string,
                        cost:[
                            {
                                etd:string,
                                note:string,
                                value:number
                            }
                        ]
                    }
                ]
            }
        ],
        status:{
            code:number,
            description:string
        }
    }
}
