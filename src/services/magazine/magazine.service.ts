import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import Api from '@/api/Api';
import PokerApi from '@/api/PokerApi';
import api from '@/configs/api';

export type Magazine = {
    id: number
    title: string
    sub_title: string
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
    total_page:number,
    author_image: string
    author_names: string
};


export type MagazineCategory = {
    id: number
    name: string
    slug: string
}


let timeOut: any


const useMagazineStore = create(
    combine(
        {
            magazine: {
                id: null as any,
                list: [] as Magazine[],
                home_list: [] as Magazine[],
                detail: null as Magazine | null,
                category_list: [] as MagazineCategory[],
                total: 0,
                page: 1,
                size: 10,
                total_pages:0,
                current_page:0,
                per_page:0,
                total_posts:0,
                search: null as string | null,
                paginate: true as boolean,
                category: null as string | null,
                sort: 'ASC' as 'ASC' | 'DESC'
                // timeOut: null as any
            }
        },
        (set, get) => ({
            get: {
                list: async () => {
                    set(prev => ({ ...prev, magazine: { ...prev.magazine, list: [] } }))
                    const {
                        magazine: { page, size, category, search, sort }
                    } = get();

                    const request = await PokerApi.get<{ records: Magazine[] }>(api.contentManagementProfileBaseUrl(category == "all" || !category ? '/blogs' : `/blogs/category/${category}`), {
                        query: {
                            page: page, size, search,

                            ...(
                                sort && {
                                    sorting: sort
                                }
                            )
                        }
                    })

                    if (!request?.status || !request?.data?.records?.length) {
                        return;
                    }
                    // console.log("==>",request?.pagination?.per_page)
                    set(prev => ({ ...prev, magazine: { 
                        ...prev.magazine, list: request.data?.records,
                        total_posts:request?.data?.total_posts,
                        total_pages:request?.data?.total_pages,
                        current_page:request?.pagination?.current_page,
                        per_page:request?.pagination?.per_page,
                     } }))
                },
                home_list: async () => {
                    set(prev => ({ ...prev, magazine: { ...prev.magazine, home_list: [] } }))
                    const {
                        magazine: { page, size, category, search }
                    } = get();

                    const request = await PokerApi.get<Magazine[]>(api.contentManagementProfileBaseUrl("/home_blogs"), {

                    })

                    if (!request?.status || !request?.data?.length) {
                        return;
                    }

                    set(prev => ({ ...prev, magazine: { ...prev.magazine, home_list: request.data } }))
                },
                category_list: async () => {


                    const request = await PokerApi.get<MagazineCategory[]>(api.contentManagementProfileBaseUrl("/categories"), {
                    })

                    if (!request?.status || !request?.data?.length) {
                        return;
                    }

                    set(prev => ({ ...prev, magazine: { ...prev.magazine, category_list: request.data } }))
                },
                detail: async (id: string) => {


                    const request = await PokerApi.get<Magazine>(api.contentManagementProfileBaseUrl(`/blogs/${id}`), {
                    })

                    if (!request?.status || !request?.data) {
                        return;
                    }

                    set(prev => ({ ...prev, magazine: { ...prev.magazine, detail: request.data } }))
                },
                paginate: ({
                    page,
                    size,
                    search,
                    paginate, category,
                    sort,
                }: {
                    page?: number
                    size?: number
                    search?: string
                    paginate?: boolean
                    category?: string
                    sort?: "ASC" | "DESC"
                }) => {
                    set(prev => ({ magazine: { ...prev.magazine, search: search || '', category: category || '' } }))

                    clearTimeout(timeOut)

                    const init = () => {
                        set(prev => ({
                            magazine: {
                                ...prev.magazine,
                                page: page || prev.magazine.page,
                                size: size || prev.magazine.size,
                                search: search || prev.magazine.search,
                                paginate: paginate ?? true,
                                category: category || prev.magazine.category,
                                sort: sort || prev.magazine.sort,
                            }
                        }))
                        useMagazineStore.getState().get.list()
                    }

                    if (search) {
                        timeOut = setTimeout(() => {
                            init()
                        }, 500)
                        set(prev => ({ magazine: { ...prev.magazine, search: search } }))
                        return
                    }
                    init()
                },
                sort: (type: "ASC" | "DESC") => {
                    set(prev => ({
                        ...prev, magazine: {
                            ...prev.magazine, list: [...prev.magazine.list.sort(
                                (a, b) => type === "ASC" ? (new Date(b.date) as any) - (new Date(a.date) as any) : (new Date(b.date) as any) - (new Date(a.date) as any)
                            )], sort: type,

                        }
                    }))

                }
            },
        })
    )
)

export default useMagazineStore
