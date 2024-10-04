import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import Api from '@/api/Api';
import api from '@/configs/api';

export type ConsultantProfile = {
    id: number
    first_name: string
    last_name: string
    email: string
    consultant_type: number
    consultant_class: number
    description: string
    services: string
    categories: Array<number>
    skills: Array<number>
    date_of_birth: string
    address: string
    country: string
    pincode: string
    languages: Array<string>
    experience: any
    gender: number
    marital_status: number
    currently_employed: number
    currently_employed_working_hours: string
    highest_qualification: string
    degree_diploma: string
    college_school_university: string
    social_media: {
        x: string
        other: string
        tiktok: string
        youtube: string
        facebook: string
        linkedin: string
        instagram: string
    }
    from_where_did_you_learn_flute: string
    status: number
    device_type: number
    fcm_token: any
    lifetime_earning: number
    current_wallet_balance: number
    created_at: string
    updated_at: string
    deleted_at: any
    photos: Array<{
        url: string
        photo_type: number
    }>
    profile_photo?: {
        url: string
        photo_type: number
    }
    service_status: Array<{
        id: number
        consultant_id: number
        type: number
        status: number
    }>
    price_list: Array<{
        id: number
        consultant_id: number
        feature: Feature
        category: number
        current_price: number
        discount_price: number
        commission: number
        status: number
        created_at: string
        updated_at: string
    }
    >
    chat_price?: {
        id: number
        consultant_id: number
        feature: Feature
        category: number
        current_price: number
        discount_price: number
        commission: number
        status: number
        created_at: string
        updated_at: string
    }
    audio_call_price?: {
        id: number
        consultant_id: number
        feature: Feature
        category: number
        current_price: number
        discount_price: number
        commission: number
        status: number
        created_at: string
        updated_at: string
    }
    video_call_price?: {
        id: number
        consultant_id: number
        feature: Feature
        category: number
        current_price: number
        discount_price: number
        commission: number
        status: number
        created_at: string
        updated_at: string
    }
    rating_review: {
        avgRating: string
        totalRatings: number
    }
    reviews_list: {
        avg_rating: string
        rating_count: {
            "1": number
            "2": number
            "3": number
            "4": number
            "5": number
        }
        total_user_count: number
    }
    sessions: number | { count: any }

    categories_name: Array<string>
    category_name: Array<string>
    session_count: number
    age: number
    is_followed: boolean
    is_favourited: boolean
    is_live?: boolean
};
export enum Feature {
    CHAT = 1,
    AUDIO_CALL = 2,
    VIDEO_CALL = 3,
    ANONYMOUS_CALL = 4,
    PRIVATE_CALL = 5,
    LIVE_CHAT = 6,
    LIVE_AUDIO_CALL = 7,
    LIVE_VIDEO_CALL = 8,
}

export enum ServiceType {
    CHAT = 1,
    AUDIO_CALL = 2,
    VIDEO_CALL = 3,
    ANONYMOUS_CALL = 4,
    PRIVATE_CALL = 5,
    LIVE = 6,
    LIVE_VIDEO = 7,
    LIVE_AUDIO = 8,
    LIVE_CHAT = 9,
}
export enum ServiceStatus {
    OFFLINE = 0,
    AVAILABLE = 1,
    BUSY = 2,
    STREAMING = 3,
}

let timeOut: any


const useConsultantProfileStore = create(
    combine(
        {
            consultant_profile: {
                id: null as any,
                list: [] as ConsultantProfile[],
                detail: null as ConsultantProfile | null,
                total: 0,
                page: 0,
                size: 10,
                search: null as string | null,
                paginate: true as boolean,
                skill_id: null as string | null,
                consultant_type: null as string | null,
                category_id: null as string | null,
                sort: 'asc' as 'asc' | 'desc',
                // timeOut: null as any
            }
        },
        (set, get) => ({
            get: {
                list: async () => {

                    const {
                        consultant_profile: { page, size, search, paginate, skill_id, consultant_type, category_id }
                    } = get();

                    const request = await Api.get<{ records: ConsultantProfile[] }>(api.consultantProfileBaseUrl("/"), {
                        query: {
                            page, size, skill_id, ...(
                                search && {
                                    name: search,
                                }
                            ),
                            ...(
                                consultant_type
                                && {
                                    consultant_type: consultant_type,
                                }
                            ),
                            ...(category_id && {
                                category_id: category_id,
                            })
                        }
                    })

                    if (!request.status) {
                        return;
                    }
                    for (let item of request.data?.records) {

                        item.chat_price = item.price_list?.find(f => f.feature === Feature.CHAT);
                        item.audio_call_price = item.price_list?.find(f => f.feature === Feature.AUDIO_CALL);
                        item.video_call_price = item.price_list?.find(f => f.feature === Feature.VIDEO_CALL);

                        item.profile_photo = item.photos.find(f => f.photo_type === 1);
                        item.is_live = item.service_status.some(f => [ServiceType.LIVE, ServiceType.LIVE_AUDIO, ServiceType.LIVE_CHAT, ServiceType.LIVE_VIDEO].includes(f.type) && f.status == ServiceStatus.STREAMING)
                    }
                    set(prev => ({ ...prev, consultant_profile: { ...prev.consultant_profile, list: request.data?.records } }))
                },

                detail: async (id: string | number) => {


                    const request = await Api.get<ConsultantProfile>(api.consultantProfileBaseUrl(`/${id}`), {
                        query: {
                        }
                    })

                    if (!request.status) {
                        return;
                    }
                    // request.data.chat_price = request.data.price_list?.find(f => f.feature === Feature.CHAT);
                    // request.data.audio_call_price = request.data.price_list?.find(f => f.feature === Feature.AUDIO_CALL);
                    // request.data.video_call_price = request.data.price_list?.find(f => f.feature === Feature.VIDEO_CALL);

                    // request.data.profile_photo = request.data.photos.find(f => f.photo_type === 1);
                    // request.data.is_live = request.data.service_status?.some(f => [ServiceType.LIVE, ServiceType.LIVE_AUDIO, ServiceType.LIVE_CHAT, ServiceType.LIVE_VIDEO].includes(f.type) && f.status == ServiceStatus.STREAMING)
                    set(prev => ({ ...prev, consultant_profile: { ...prev.consultant_profile, detail: request.data } }))
                },
                paginate: ({
                    page,
                    size,
                    search,
                    paginate,
                    skill_id,
                    consultant_type,
                    category_id,
                }: {
                    page?: number
                    size?: number
                    search?: string
                    paginate?: boolean
                    skill_id?: string
                    consultant_type?: string
                    category_id?: string
                }) => {
                    set(prev => ({ consultant_profile: { ...prev.consultant_profile, search: search || '' } }))

                    clearTimeout(timeOut)

                    const init = () => {
                        set(prev => ({
                            consultant_profile: {
                                ...prev.consultant_profile,
                                page: page || prev.consultant_profile.page,
                                size: size || prev.consultant_profile.size,
                                search: search || prev.consultant_profile.search,
                                paginate: paginate ?? true,
                                skill_id: skill_id || "",
                                consultant_type: consultant_type || "",
                                category_id: category_id || "",
                            }
                        }))
                        useConsultantProfileStore.getState().get.list()
                    }

                    if (search) {
                        timeOut = setTimeout(() => {
                            init()
                        }, 500)
                        set(prev => ({ consultant_profile: { ...prev.consultant_profile, search: search } }))
                        return
                    }
                    init()
                },
                sort: (type: "asc" | "desc") => {
                    set(prev => ({
                        ...prev, consultant_profile: {
                            ...prev.consultant_profile, list: [...prev.consultant_profile.list], sort: type,

                        }
                    }))

                }
            },

        })
    )
)

export default useConsultantProfileStore
