
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
                size: 2,
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
                list: async (loadMore = false) => {
                    const {
                        testo: { page, size , list }
                    } = get();


                    const request = await PokerApi.get<Testimonial[]>(api.testimonialBaseUrl("/testimonials"), {
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
                            // list: request.data,
                            list :loadMore ? [...list , ...request.data] : request.data,
                            current_page:page,
                                        total_pages: Math.ceil(request.total / size),

                        }
                    }))

                }
            },

  incrementPage: () => {
        const { testo } = get();
        set({
          testo: {
            ...testo,
            page: testo.page + 1,
            
          },
        });
      },
    })
  )
);

export default useTestominalStore