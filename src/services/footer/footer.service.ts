 
import {create} from "zustand"
import { combine } from "zustand/middleware"

import PokerApi from "@/api/PokerApi"
import api from "@/configs/api"
import Api from "@/api/Api"


export type SocialIcons ={
    id:number,
    url:string,
    image_url:string
}


let timeOut: any

const useSocialIcons = create(
    combine(
        {
            SocialIcon :{
                list :[] as SocialIcons[],
                id:null as any,
                url:null as any,
                image_url:null as any,
                total: 0,
                page: 1,
                size: 6,
                total_pages: 0,
                current_page: 0,
                search: null as string | null,
                paginate: true as boolean,
                category: null as string | null,
                sort: 'asc' as 'asc' | 'desc'

            }
        },
        (set,get) =>({
            get :{
                list : async()=>{
                    const {
                        SocialIcon :{page , size}
                    }=get();

                    const request = await PokerApi.get<SocialIcons[]>(api.socialiconsBaseUrl("/social-icons"),{
                        query:{
                            page , size,
                        }
                    });

                    if(!request.status){
                        return;
                    }

                    set(prev => ({
                        ...prev , SocialIcon:{
                            ...prev.SocialIcon,
                            list:request.data,
                        }
                    }))
                }
            }

        })
    )
)


export default useSocialIcons