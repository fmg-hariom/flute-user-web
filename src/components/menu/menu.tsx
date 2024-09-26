"use client"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { SidebarMenu } from '../headers/SideBar';
import { useState } from 'react';



export default function MenuBar() {
    const [open, setOpen] = useState(false)
    return (

        < >
            <Sheet open={open} onOpenChange={(val) => {
                setOpen(val);
            }} >
                <SheetTrigger className='text-white mt-2' onClick={() => setOpen(true)} ><MenuBarIcon /></SheetTrigger>
                <SheetContent side={"left"} className="w-[300px] sm:w-[340px] overflow-scroll">
                    <SheetHeader>
                        {/* <SheetTitle className='text-left text-xl font-bold ml-3'>Brand</SheetTitle> */}
                        <SheetDescription className='overflow-scroll' >
                            <SidebarMenu setOpen={setOpen as any} />
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>


            </Sheet>
        </>

    );



}


function MenuBarIcon() {

    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-10 mr-4 cursor-pointer' ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18H10" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L16 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> </g></svg>
    )

}
