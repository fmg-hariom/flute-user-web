import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import Api from '@/api/Api';
import PokerApi from '@/api/PokerApi';
import api from '@/configs/api';

export type Buzz = {
    id: number
    title: string
    excerpt: string
    content: string
    author: string
    date: string
    views: string
    featured_image_mobile: string
    featured_image_web: string
    title_image_web: string
    title_image_mobile: string
    category_names: any

    author_image: string
    author_names: string
};


export type MagazineCategory = {
    id: number
    name: string
    slug: string
}


let timeOut: any


const useBuzzStore = create(
    combine(
        {
            buzz: {
                id: null as any,
                list: [] as Buzz[],
                home_list: [] as Buzz[],
                detail: null as Buzz | null,
                category_list: [] as MagazineCategory[],
                total: 0,
                page: 1,
                size: 10,
                search: null as string | null,
                paginate: true as boolean,
                category: null as string | null,
                sort: 'asc' as 'asc' | 'desc'
                // timeOut: null as any
            }
        },
        (set, get) => ({
            get: {
                list: async () => {
                    set(prev => ({ ...prev, buzz: { ...prev.buzz, list: [] } }))
                    const {
                        buzz: { page, size, category, search }
                    } = get();

                    const request = await PokerApi.get<{ records: Buzz[] }>(api.buzzBaseUrl('/buzz'), {
                        query: {
                            paged: page, size, search,
                        }
                    })

                    if (!request?.status || !request?.data?.records?.length) {
                        return;
                    }

                    set(prev => ({ ...prev, buzz: { ...prev.buzz, list: request.data?.records } }))
                },
                home_list: async () => {
                    set(prev => ({ ...prev, buzz: { ...prev.buzz, home_list: [] } }))
                    const {
                        buzz: { page, size, category, search }
                    } = get();

                    const request = await PokerApi.get<Buzz[]>(api.contentManagementProfileBaseUrl("/home_blogs"), {

                    })

                    if (!request?.status || !request?.data?.length) {
                        return;
                    }

                    set(prev => ({ ...prev, buzz: { ...prev.buzz, home_list: request.data } }))
                },
                category_list: async () => {


                    const request = await PokerApi.get<MagazineCategory[]>(api.contentManagementProfileBaseUrl("/categories"), {
                    })

                    if (!request?.status || !request?.data?.length) {
                        return;
                    }

                    set(prev => ({ ...prev, buzz: { ...prev.buzz, category_list: request.data } }))
                },
                detail: async (id: string) => {


                    const request = await PokerApi.get<Buzz>(api.contentManagementProfileBaseUrl(`/blogs/${id}`), {
                    })

                    if (!request?.status || !request?.data) {
                        return;
                    }

                    set(prev => ({ ...prev, buzz: { ...prev.buzz, detail: request.data } }))
                },
                paginate: ({
                    page,
                    size,
                    search,
                    paginate, category,
                }: {
                    page?: number
                    size?: number
                    search?: string
                    paginate?: boolean
                    category?: string
                }) => {
                    set(prev => ({ buzz: { ...prev.buzz, search: search || '', category: category || '' } }))

                    clearTimeout(timeOut)

                    const init = () => {
                        set(prev => ({
                            buzz: {
                                ...prev.buzz,
                                page: page || prev.buzz.page,
                                size: size || prev.buzz.size,
                                search: search || prev.buzz.search,
                                paginate: paginate ?? true,
                                category: category || prev.buzz.category,
                            }
                        }))
                        useBuzzStore.getState().get.list()
                    }

                    if (search) {
                        timeOut = setTimeout(() => {
                            init()
                        }, 500)
                        set(prev => ({ buzz: { ...prev.buzz, search: search } }))
                        return
                    }
                    init()
                },
                sort: (type: "asc" | "desc") => {
                    set(prev => ({
                        ...prev, buzz: {
                            ...prev.buzz, list: [...prev.buzz.list.sort(
                                (a, b) => type === "asc" ? (new Date(b.date) as any) - (new Date(a.date) as any) : (new Date(b.date) as any) - (new Date(a.date) as any)
                            )], sort: type,

                        }
                    }))

                }
            },
        })
    )
)

export default useBuzzStore
