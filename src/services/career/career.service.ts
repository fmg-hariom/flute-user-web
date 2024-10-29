import { create } from "zustand";
import { combine } from "zustand/middleware";

import PokerApi from "@/api/PokerApi";
import api from "@/configs/api";
import Api from "@/api/Api";

export type Careers = {
  ID: number;
  title: string;
  location: string;
  google_form_url: string;
  job_type: string;
  total_posts: number;
  total_pages: number;
  current_page: number;
  posts_per_page: number;
};

const useCareer = create(
  combine(
    {
      Career: {
        list: [] as Careers[],
        ID: null as any,
        title: null as any,
        location: null as any,
        google_form_url: null as any,
        job_type: null as any,
        total_posts: null as any,
        total_pages: null as any,
        current_page: null as any,
        posts_per_page: null as any,
      },
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            Career: { total_pages, posts_per_page },
          } = get();

          const request = await PokerApi.get<Careers[]>(
            api.careerBaseUrl("/career?job_type=remote&page=1&size=10"),
            {
              query: {
                total_pages,
                posts_per_page,
              },
            }
          );

          if (!request.status) {
            return;
          }

          set((prev) => ({
            ...prev,
            Career: {
              ...prev.Career,
              list: request.data,
            },
          }));
        },
      },
    })
  )
);

export default useCareer;
