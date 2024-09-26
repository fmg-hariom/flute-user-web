import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import Api from '@/api/Api';
import api from '@/configs/api';

export type Skill = {
    id: number
    category_id: number
    skill_name: string
    icon: string
    status: string
    createdAt: string
    updatedAt: string
    CoachCategory: {
        id: number
        category_name: string
    }
};

let timeOut: any


const useSkillStore = create(
    combine(
        {
            skill: {
                id: null as any,
                list: [] as Skill[],
                total: 0,
                page: 0,
                size: 10,
                search: null as string | null,
                paginate: true as boolean
                // timeOut: null as any
            }
        },
        (set, get) => ({
            get: {
                list: async () => {

                    const {
                        skill: { }
                    } = get();

                    const request = await Api.get<Skill[]>(api.metaBaseUrl("/coach_skill/get_all"), {});
                    console.log("🚀 ~ request ~ request:", request)

                    if (!request?.status) {
                        return;
                    }

                    set(prev => ({ ...prev, skill: { ...prev.skill, list: request.data } }))
                }
            },
        })
    )
)

export default useSkillStore
