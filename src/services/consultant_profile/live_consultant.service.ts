import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import Api from '@/api/Api';
import api from '@/configs/api';

export type ConsultantProfile = {
    id: number
    first_name: string
    languages: Array<string>
    profile_image: string
    rating_review: {
        avgRating: number
        totalRatings: number
    }
    categories_name: Array<string>
    viewer_count: number
}
    ;
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


const useLiveConsultantProfileStore = create(
    combine(
        {
            live_consultant_profile: {
                id: null as any,
                list: [] as ConsultantProfile[],
                home_list: [] as ConsultantProfile[],
                detail: null as ConsultantProfile | null,
                total: 0,
                page: 1,
                size: 10,
                search: null as string | null,
                paginate: false as boolean,
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
                        live_consultant_profile: { page, size, search, paginate, skill_id, consultant_type, category_id }
                    } = get();

                    const request = await Api.get<{ records: ConsultantProfile[] }>(api.consultantProfileBaseUrl("/live-consultant"), {
                        query: {
                            page, size, ...(
                                skill_id && {
                                    skill_id: skill_id,
                                }
                            ), ...(
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

                        // item.chat_price = item.price_list?.find(f => f.feature === Feature.CHAT);
                        // item.audio_call_price = item.price_list?.find(f => f.feature === Feature.AUDIO_CALL);
                        // item.video_call_price = item.price_list?.find(f => f.feature === Feature.VIDEO_CALL);

                        // item.profile_photo = item.
                        // item.is_live = item.service_status.some(f => [ServiceType.LIVE, ServiceType.LIVE_AUDIO, ServiceType.LIVE_CHAT, ServiceType.LIVE_VIDEO].includes(f.type) && f.status == ServiceStatus.STREAMING)
                    }
                    set(prev => ({ ...prev, live_consultant_profile: { ...prev.live_consultant_profile, list: paginate ? [...prev.live_consultant_profile.list, ...request.data?.records] : request.data?.records } }))
                },

                home_list: async () => {



                    const request = await Api.get<{ records: ConsultantProfile[] }>(api.consultantProfileBaseUrl("/live-consultant"), {
                        query: {
                            page: 1, size: 10,
                        }
                    })

                    if (!request.status) {
                        return;
                    }
                    set(prev => ({ ...prev, live_consultant_profile: { ...prev.live_consultant_profile, home_list: request.data?.records } }))
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
                    set(prev => ({ ...prev, live_consultant_profile: { ...prev.live_consultant_profile, detail: request.data } }))
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
                    set(prev => ({ live_consultant_profile: { ...prev.live_consultant_profile, search: search || '' } }))

                    clearTimeout(timeOut)

                    const init = () => {
                        set(prev => ({
                            live_consultant_profile: {
                                ...prev.live_consultant_profile,
                                page: page || prev.live_consultant_profile.page,
                                size: size || prev.live_consultant_profile.size,
                                search: search || prev.live_consultant_profile.search,
                                paginate: paginate ?? false,
                                skill_id: skill_id || "",
                                consultant_type: consultant_type || "",
                                category_id: category_id || "",
                            }
                        }))
                        useLiveConsultantProfileStore.getState().get.list()
                    }

                    if (search) {
                        timeOut = setTimeout(() => {
                            init()
                        }, 500)
                        set(prev => ({ live_consultant_profile: { ...prev.live_consultant_profile, search: search } }))
                        return
                    }
                    init()
                },
                sort: (type: "asc" | "desc") => {
                    set(prev => ({
                        ...prev, live_consultant_profile: {
                            ...prev.live_consultant_profile, list: [...prev.live_consultant_profile.list], sort: type,

                        }
                    }))

                }
            },

        })
    )
)

export default useLiveConsultantProfileStore
