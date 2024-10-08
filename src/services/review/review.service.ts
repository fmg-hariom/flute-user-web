import { create } from 'zustand'
import { combine } from 'zustand/middleware'

import PokerApi from '@/api/PokerApi';
import api from '@/configs/api';
import Api from '@/api/Api';

export interface ReviewRoot {
    reviews: Review[]
    overviews: Overviews
    pagination: Pagination
}

export interface Review {
    id: number
    review_text: string
    createdAt: string
    rating: string
    user_id: number
    first_name: string
    profile_image: string
}

export interface Overviews {
    avg_rating: string
    rating_count: RatingCount
    total_user_count: number
}

export interface RatingCount {
    "1": number
    "2": number
    "3": number
    "4": number
    "5": number
}

export interface Pagination {
    totalRecords: number
    totalPages: number
    currentPage: number
    pageSize: number
}



export type MagazineCategory = {
    id: number
    name: string
    slug: string
}


let timeOut: any


const useReviewStore = create(
    combine(
        {
            review: {
                id: null as any,
                list: [] as Review[],
                detail: null as Overviews | null,
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
                    set(prev => ({ ...prev, review: { ...prev.review, list: [] } }))
                    const {
                        review: { page, size, id }
                    } = get();

                    const request = await Api.get<ReviewRoot>(api.coachRatingBaseUrl(`/user-reviews/${id}`), {
                        query: {
                            page: page, size,
                        }
                    });

                    if (!request?.status || !request?.data) {
                        return;
                    }

                    set(prev => ({
                        ...prev, review: {
                            ...prev.review, list: request.data?.reviews,
                            detail: request.data?.overviews,
                            total_pages: request?.data?.pagination.totalPages,
                            current_page: request?.data?.pagination?.currentPage,
                        }
                    }))
                },

                paginate: ({
                    page,
                    size,
                    search,
                    paginate, category, id
                }: {
                    page?: number
                    size?: number
                    search?: string
                    paginate?: boolean
                    category?: string
                    id?: string | number
                }) => {
                    set(prev => ({ review: { ...prev.review, search: search || '', category: category || '' } }))

                    clearTimeout(timeOut)

                    const init = () => {
                        set(prev => ({
                            review: {
                                ...prev.review,
                                page: page || prev.review.page,
                                size: size || prev.review.size,
                                search: search || prev.review.search,
                                paginate: paginate ?? true,
                                category: category || prev.review.category,
                                id: id || prev.review.id,
                            }
                        }))
                        useReviewStore.getState().get.list()
                    }

                    if (search) {
                        timeOut = setTimeout(() => {
                            init()
                        }, 500)
                        set(prev => ({ review: { ...prev.review, search: search } }))
                        return
                    }
                    init()
                },

            },
        })
    )
)

export default useReviewStore
