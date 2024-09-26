import { cn } from "@/lib/utils";
import { Accordion, AccordionItem } from "@radix-ui/react-accordion";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ChevronDownIcon, Home, ListVideo, Menu, Mic2, Music, Play, RadioIcon, SquareStack, User } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { AccordionContent, AccordionTrigger } from "../ui/accordion";
import useSkillStore from "@/services/meta/sills.service";
import { SheetClose, SheetTrigger } from "../ui/sheet";
import DownloadAppDialog from "../common/dialogs/DownloadAppDialog";

type Menu = {
    label: string
    name: string
    icon: React.ReactNode
    submenu?: Submenu[]
    href: string
}

type Submenu = {
    name: string
    icon: React.ReactNode
    href: string
}

type Props = {
    setOpen: (value: boolean) => {}
};
export function SidebarMenu(props: Props) {

    const skillStore = useSkillStore();

    React.useEffect(() => {
        if (!skillStore.skill.list?.length) {
            skillStore.get.list();
        }
    }, []);




    return (
        <ScrollArea className="h-screen w-full rounded-md">
            <div className="md:px-4 sm:p-0 mt-5 ">
                {/* {uniqueLabels.map((label, index) => (
                    <React.Fragment key={label}>
                        {label && (
                            <p className={`mx-4 mb-3 text-xs text-left tracking-wider font-bold text-slate-300 ${index > 0 ? 'mt-10' : ''}`}>
                                {label}
                            </p>
                        )}
                        { */}
                {skillStore.skill.list?.length ?
                    skillStore.skill.list.map((menu) => (
                        // <SheetClose id="" >
                        <React.Fragment key={menu.id}>
                            <div key={menu.id} onClick={() => props.setOpen(false)} >
                                <Link href={`/consultant/astrologer?skill_id=${menu.id}&title=${menu.skill_name}`} className="flex text-xs h-10 text-[#ECEDEF] dark:bg-background my-2 items-center justify-start p-4  dark:hover:bg-none dark:hover:text-background hover:text-white rounded-md">
                                    <div className="w-8 mr-2">
                                        <img src={menu.icon} />
                                    </div>
                                    <p className="text-sm font-semibold" >
                                        {menu.skill_name}
                                    </p>
                                </Link>
                            </div>
                        </React.Fragment>
                        // </SheetClose>
                    )) : <div className="w-full flex items-center justify-center h-96" >
                        <div className="loader">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </div>}
                <hr />

                <DownloadAppDialog trigger={
                    <div onClick={() => props.setOpen(false)}>
                        <div className="flex text-xs h-10 text-[#ECEDEF] dark:bg-background my-2 items-center p-4  dark:hover:bg-none dark:hover:text-background hover:text-white rounded-md cursor-pointer">
                            <div className="w-8 mr-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 17.27L12 14.604L15.5 17.269L14.192 12.935L17.673 10.469H13.408L12 5.923L10.592 10.469H6.327L9.807 12.935L8.5 17.27ZM12.003 21C10.759 21 9.589 20.764 8.493 20.292C7.39767 19.8193 6.44467 19.178 5.634 18.368C4.82333 17.558 4.18167 16.606 3.709 15.512C3.23633 14.418 3 13.2483 3 12.003C3 10.7577 3.23633 9.58767 3.709 8.493C4.181 7.39767 4.82133 6.44467 5.63 5.634C6.43867 4.82333 7.391 4.18167 8.487 3.709C9.583 3.23633 10.753 3 11.997 3C13.241 3 14.411 3.23633 15.507 3.709C16.6023 4.181 17.5553 4.82167 18.366 5.631C19.1767 6.44033 19.8183 7.39267 20.291 8.488C20.7637 9.58333 21 10.753 21 11.997C21 13.241 20.764 14.411 20.292 15.507C19.82 16.603 19.1787 17.556 18.368 18.366C17.5573 19.176 16.6053 19.8177 15.512 20.291C14.4187 20.7643 13.249 21.0007 12.003 21Z" fill="#D8D8D8" />
                                </svg>

                            </div>
                            <p className="text-sm font-semibold" >
                                Join as {" "} <span className="ml-1 text-[#FFA643]" > {" a Coach"} </span>
                            </p>
                        </div>
                    </div>
                }
                />

                <div onClick={() => props.setOpen(false)} >
                    <Link href={`/magazine/list`} className="flex text-xs h-10 text-[#ECEDEF] dark:bg-background my-2 items-center p-4  dark:hover:bg-none dark:hover:text-background hover:text-white rounded-md">
                        <div className="w-8 mr-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 1.875H6.75C5.85489 1.875 4.99645 2.23058 4.36351 2.86351C3.73058 3.49645 3.375 4.35489 3.375 5.25V21C3.375 21.2984 3.49353 21.5845 3.7045 21.7955C3.91548 22.0065 4.20163 22.125 4.5 22.125H18C18.2984 22.125 18.5845 22.0065 18.7955 21.7955C19.0065 21.5845 19.125 21.2984 19.125 21C19.125 20.7016 19.0065 20.4155 18.7955 20.2045C18.5845 19.9935 18.2984 19.875 18 19.875H5.625V19.5C5.625 19.2016 5.74353 18.9155 5.9545 18.7045C6.16548 18.4935 6.45163 18.375 6.75 18.375H19.5C19.7984 18.375 20.0845 18.2565 20.2955 18.0455C20.5065 17.8345 20.625 17.5484 20.625 17.25V3C20.625 2.70163 20.5065 2.41548 20.2955 2.2045C20.0845 1.99353 19.7984 1.875 19.5 1.875ZM18.375 16.125H6.75C6.36669 16.1243 5.98613 16.1896 5.625 16.3181V5.25C5.625 4.95163 5.74353 4.66548 5.9545 4.4545C6.16548 4.24353 6.45163 4.125 6.75 4.125H18.375V16.125Z" fill="#D8D8D8" />
                            </svg>
                        </div>
                        <p className="text-sm font-semibold" >

                            Flute Magazine
                        </p>
                    </Link>
                </div>

                <div onClick={() => props.setOpen(false)} >
                    <Link href={`/`} className="flex text-xs h-10 text-[#ECEDEF] dark:bg-background my-2 items-center p-4  dark:hover:bg-none dark:hover:text-background hover:text-white rounded-md">
                        <div className="w-8 mr-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.80998 14.9299C6.45998 13.8299 6.86998 12.4599 8.02998 12.0899C8.63998 11.8899 9.38998 12.0599 9.81998 12.6499C10.22 12.0399 11 11.8999 11.6 12.0899C12.76 12.4599 13.17 13.8299 12.82 14.9299C12.27 16.6799 10.35 17.5899 9.81998 17.5899C9.27998 17.5799 7.37998 16.6899 6.80998 14.9299Z" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <p className="text-sm font-semibold" >

                            Live Sessions
                        </p>
                    </Link>
                </div>

                <div onClick={() => props.setOpen(false)} >
                    <Link href={`/`} className="flex text-xs h-10 text-[#ECEDEF] dark:bg-background my-2 items-center p-4  dark:hover:bg-none dark:hover:text-background hover:text-white rounded-md">
                        <div className="w-8 mr-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 11.943C20 7.562 16.424 4 12 4C7.576 4 4 7.562 4 11.943C4 13.133 4.147 13.898 4.328 14.459C4.45 14.831 4.741 14.464 4.885 14.329C5.35747 13.8859 5.98345 13.6435 6.6311 13.6529C7.27874 13.6622 7.89749 13.9225 8.357 14.379C9.778 15.791 11.089 17.749 9.278 19.549C8.306 20.515 6.842 20.917 5.728 19.877C4.29 18.533 3.041 16.969 2.426 15.077C2.17 14.283 2 13.304 2 11.942C2 6.445 6.483 2 12 2C17.517 2 22 6.445 22 11.943C22 13.305 21.831 14.284 21.574 15.076C20.959 16.969 19.71 18.533 18.272 19.876C17.158 20.917 15.694 20.516 14.722 19.549C12.912 17.749 14.222 15.791 15.642 14.379C16.1016 13.9222 16.7205 13.6617 17.3684 13.6524C18.0163 13.6431 18.6425 13.8856 19.115 14.329C19.392 14.589 19.529 14.899 19.672 14.459C19.853 13.899 20 13.132 20 11.943Z" fill="white" />
                            </svg>


                        </div>
                        <p className="text-sm font-semibold" >

                            Contact Us
                        </p>
                    </Link>
                </div>
                <DownloadAppDialog trigger={
                    <div onClick={() => props.setOpen(false)} >
                        <div className="flex text-xs h-10 text-[#ECEDEF] dark:bg-background my-2 items-center p-4  dark:hover:bg-none dark:hover:text-background hover:text-white rounded-md cursor-pointer">
                            <div className="w-8 mr-2">
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4582 4.79167V10.5417H13.5794L11.4998 12.6213L9.42025 10.5417H10.5415V4.79167H12.4582ZM14.3748 2.875H8.62484V8.625H4.7915L11.4998 15.3333L18.2082 8.625H14.3748V2.875ZM18.2082 17.25H4.7915V19.1667H18.2082V17.25Z" fill="white" />
                                </svg>
                            </div>
                            <p className="text-sm font-semibold" >
                                Get the App
                            </p>
                        </div>
                    </div>
                } />
            </div>
        </ScrollArea >
    );
}
