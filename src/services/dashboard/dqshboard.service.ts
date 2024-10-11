import { create } from 'zustand'
import { combine } from 'zustand/middleware'

import Api from '@/api/Api';
import api from '@/configs/api';
import PokerApi from '@/api/PokerApi';

export type Dashboard = {
    id: number
    content_type: number
    category_ids: Array<number>
    preferred_ids: Array<number>
    consultant_type: number
    title: string
    display_order: number
    status: number
    createdAt: string
    updatedAt: string
    list: Array<{
        // for consultant list
        id: number
        first_name: string
        last_name: string
        photos: {
            url: string
        }[]

        // for promotional cards
        card_image: string
        type: number
        status: string
        category_name: string
        category_id: number
    }>
    categories: Array<{
        "id": 4,
        "category_name": "Dating Coach",
        "category_bg_color": [
            "rgba(17, 17, 17, 1)",
            "rgba(17, 17, 17, 1)"
        ],
        "category_card_bg_color": [
            {
                "color": "rgba(169, 180, 222, 1)",
                "offset": 0
            }
        ],
        "image": "https://user-profile-dating.s3.eu-north-1.amazonaws.com/MetadataService/2ba40683-4fa6-4f11-91a4-b9966a0543db_13.jpg",
        "status": "active"
    }>
}
    ;

export type Banner = {
    id: number
    title: string
    media: string
    media_type: string
    mobile_media: string
}


let timeOut: any


const useDashboardStore = create(
    combine(
        {
            dashboard: {
                id: null as any,
                list: [] as Dashboard[],
                total: 0,
                page: 0,
                size: 10,
                search: null as string | null,
                paginate: true as boolean,
                banners: [] as Banner[]
                // timeOut: null as any
            }
            //
        },
        (set, get) => ({
            get: {
                list: async () => {

                    const {
                        dashboard: { page, size, search, paginate }
                    } = get();

                    const request = await Api.get<Dashboard[]>(api.consultantProfileBaseUrl("/dashboard"), {
                        query: {
                            page, size,
                        }
                    })

                    

                    if (!request.data.length) {
                        return;
                    }

                    set(prev => ({ ...prev, dashboard: { ...prev.dashboard, list: request.data } }))
                },
                banners: async () => {
                    const request = await PokerApi.get<Banner[]>(api.dashboardBaseUrl("/web_banners"), {

                    })

                    if (!request.data?.length) {
                        return;
                    }

                    set(prev => ({ ...prev, dashboard: { ...prev.dashboard, banners: request.data } }))
                },
                paginate: ({
                    page,
                    size,
                    search,
                    paginate
                }: {
                    page?: number
                    size?: number
                    search?: string
                    paginate?: boolean
                }) => {
                    set(prev => ({ dashboard: { ...prev.dashboard, search: search || '' } }))

                    clearTimeout(timeOut)

                    const init = () => {
                        set(prev => ({
                            dashboard: {
                                ...prev.dashboard,
                                page: page || prev.dashboard.page,
                                size: size || prev.dashboard.size,
                                search: search || prev.dashboard.search,
                                paginate: paginate ?? true
                            }
                        }))
                        useDashboardStore.getState().get.list()
                    }

                    if (search) {
                        timeOut = setTimeout(() => {
                            init()
                        }, 1000)
                        set(prev => ({ dashboard: { ...prev.dashboard, search: search } }))
                        return
                    }
                    init()
                }
            },
        })
    )
)

export default useDashboardStore
