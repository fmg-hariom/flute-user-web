
import { create } from 'zustand'
import { combine } from "zustand/middleware"

import PokerApi from '@/api/PokerApi';
import api from '@/configs/api';
import Api from '@/api/Api';

export type Testimonial = {
    id: number
    title: string
    content: string
    author: string
}

let timeOut: any


const useTestominalStore = create(
    combine(
        {
            testo: {
                list: [] as Testimonial[],
                id: null as any,
                title: null as any,
                content: null as any,
                author: null as any,
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
        (set, get) => ({
            get: {
                list: async () => {
                    const {
                        testo: { page, size }
                    } = get();


                    const request = await Api.get<Testimonial[]>(api.testimonialBaseUrl("/testimonials"), {
                        query: {
                            page, size,
                        }
                    });

                    if (!request.status) {
                        return;
                    }

                    set(prev => ({
                        ...prev, testo: {
                            ...prev.testo,
                            list: request.data,
                        }
                    }))




                }


            }
        })
    )
)


export default useTestominalStore