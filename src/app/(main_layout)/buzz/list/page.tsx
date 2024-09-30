"use client";

import { useEffect } from "react";
import useBuzzStore from "@/services/buzz/buzz.service";

export default function FluteBuzzView(props: any) {
  const buzzStore = useBuzzStore();

  const current_page = buzzStore?.buzz.current_page;
  const total_pages = buzzStore?.buzz.total_pages;

  useEffect(() => {
    buzzStore.get.paginate({}); // Initial fetch
  }, []);

  const handlePaginate = () => {
    if (current_page < total_pages) {
      buzzStore.get.paginate({ page: buzzStore?.buzz?.page + 1 });
    }
  };

  return (
    <div className="py-4 sm:py-8  bg-black text-white">
      <main>
        <div className="relative isolate overflow-hidden bg-[#82BBE0] py-22">
          <div className="mx-auto px-6 lg:px-8">
            <div className="mx-auto  lg:mx-0 text-center">
              <h2 className="  heading-2 !text-[26px] md:!text-[40px]    text-dark  ">
                FLUTE BUZZ: Hot off The Press
              </h2>
              <span className="x-arrow"></span>
              <p className="mt-14 text-lg header-p  !text-[14px] md:!text-[16px]	 text-dark">
                All the Freash Buzz About the Flute
              </p>
            </div>
          </div>
        </div>

        <div className="magazine-view">
          <div className="container py-33 px-[10px] md:px-[36px] mx-auto">
            <div className="gap-10 grid md:grid-cols-3">
              {buzzStore?.buzz?.list.length ? (
                buzzStore?.buzz?.list.map((item) => {
                  return (
                    <a
                      href={item?.reference_link}
                      target="_blank"
                      key={item.id}
                    >
                      <div className="card-design rounded-lg mb-8">
                        <img
                          className="rounded-t-lg w-full responsive-image hidden md:block"
                          src={`${item?.image}`}
                          alt="Flute Buzz"
                        />
                        <img
                          className="rounded-t-lg w-full responsive-image block md:hidden"
                          src={`${item.featured_image_mobile}`}
                          alt="Flute Buzz Mobile"
                        />
                        <div className="p-5">
                          <a href="#">
                            <h5 className="mb-6 line-clamp-1">
                              {item.id} {item.title}
                            </h5>
                          </a>
                          <div className="flex justify-end ">
                            <div>
                              <span className="inline-block align-middle opacity-50">
                                {item.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })
              ) : (
                <></>
              )}
            </div>

            <div>
              <div className="flex items-center flex-wrap justify-center px-4 py-3 sm:px-6">
                <div className="hidden md:flex sm:flex-1 sm:items-center sm:justify-center">
                  <div>
                    <nav
                      aria-label="Pagination"
                      className="isolate inline-flex  rounded-md shadow-sm"
                    >
                      <button
                        className={`bg-[#302C28] hover:bg-[#222222] text-[#82BBBE] text-xl sm:text-2xl font-bold py-2 px-12 rounded-xl ${
                          current_page === total_pages ? "hidden" : ""
                        }`}
                        onClick={handlePaginate}
                        disabled={current_page === total_pages}
                      >
                        {current_page !== total_pages && "Show More"}
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
