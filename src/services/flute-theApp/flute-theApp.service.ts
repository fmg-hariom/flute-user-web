import { create } from "zustand";
import { combine } from "zustand/middleware";

import PokerApi from "@/api/PokerApi";
import api from "@/configs/api";
import Api from "@/api/Api";

export type Accordions = {
  ID: number;
  title: string;
  descriptions: string;
  number: number;
  page: number;
};

const useAccordion = create(
  combine(
    {
      Accordion: {
        list: [] as Accordions[],
        ID: null as any,
        title: null as any,
        descriptions: null as any,
        number: null as any,
        page: null as any,
        size: null as any,
      },
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            Accordion: { page, size },
          } = get();

          const request = await PokerApi.get<Accordions[]>(
            api.accordionBaseUrl("/the-app"),
            {
              query: {
                page,
                size,
              },
            }
          );

          if (!request.status) {
            return;
          }

          set((prev) => ({
            ...prev,
            Accordion: {
              ...prev.Accordion,
              list: request.data,
            },
          }));
        },
      },
    })
  )
);

export default useAccordion;
