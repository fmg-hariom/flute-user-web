import React from 'react'
import MenuBar from '../menu/menu'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import DownloadAppDialog from '../common/dialogs/DownloadAppDialog'

type Props = {}

const MainHeader = (props: Props) => {
    return (
        <header className="flex sm:flex-row justify-between items-center py-2  bg-black px-2 sm:px-16">
            <div className="flex items-center mb-4 sm:mb-0">
                <MenuBar />
                {
                    /* 
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.48779 10.9995H38.4152M5.48779 21.9972H32.4284M5.48779 32.9949H23.4482" stroke="white" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    */
                }
                <Link href={"/"} >
                    <Logo width={98} height={99} />
                </Link>
            </div>
            <div className="flex items-center">
                <DownloadAppDialog trigger={
                    <Button className="mr-3   md:flex bg-[#FFA843] text-black rounded-[32.2px]">
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='sm:mr-4' >
                            <path d="M21.7682 16.7963C21.7682 17.1263 21.6921 17.4655 21.5302 17.7955C21.3684 18.1255 21.159 18.4371 20.8829 18.7305C20.4165 19.2255 19.9024 19.583 19.3218 19.8121C18.7506 20.0413 18.1319 20.1605 17.4655 20.1605C16.4946 20.1605 15.457 19.9405 14.3622 19.4913C13.2675 19.0421 12.1728 18.4371 11.0876 17.6763C9.99292 16.9063 8.95532 16.0538 7.96532 15.1096C6.98484 14.1563 6.09955 13.1571 5.30945 12.1121C4.52888 11.0671 3.90061 10.0221 3.44369 8.98632C2.98676 7.94132 2.7583 6.94215 2.7583 5.98881C2.7583 5.36548 2.87253 4.76965 3.10099 4.21965C3.32945 3.66048 3.69119 3.14715 4.1957 2.68882C4.80494 2.11132 5.47128 1.82715 6.1757 1.82715C6.44224 1.82715 6.70878 1.88215 6.94676 1.99215C7.19426 2.10215 7.4132 2.26715 7.58455 2.50548L9.79301 5.50298C9.96436 5.73215 10.0881 5.94298 10.1738 6.14465C10.2595 6.33715 10.3071 6.52965 10.3071 6.70382C10.3071 6.92382 10.2404 7.14381 10.1071 7.35465C9.9834 7.56548 9.80253 7.78548 9.57407 8.00548L8.85061 8.72965C8.7459 8.83048 8.6983 8.94965 8.6983 9.09632C8.6983 9.16965 8.70782 9.23381 8.72686 9.30715C8.75542 9.38048 8.78397 9.43548 8.80301 9.49048C8.97436 9.79298 9.26945 10.1871 9.6883 10.6638C10.1167 11.1405 10.5736 11.6263 11.0686 12.1121C11.5826 12.598 12.0776 13.0471 12.5821 13.4596C13.0771 13.863 13.4865 14.138 13.8101 14.303C13.8577 14.3213 13.9148 14.3488 13.9815 14.3763C14.0576 14.4038 14.1338 14.413 14.2195 14.413C14.3813 14.413 14.505 14.358 14.6097 14.2571L15.3332 13.5696C15.5712 13.3405 15.7996 13.1663 16.0186 13.0563C16.2375 12.928 16.4565 12.8638 16.6945 12.8638C16.8753 12.8638 17.0657 12.9005 17.2751 12.983C17.4846 13.0655 17.7035 13.1846 17.9415 13.3405L21.0923 15.4946C21.3398 15.6596 21.5112 15.8521 21.6159 16.0813C21.7111 16.3105 21.7682 16.5396 21.7682 16.7963Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" />
                            <path d="M18.465 8.24349C18.465 7.69349 18.0176 6.85016 17.3513 6.16266C16.7421 5.53016 15.9329 5.03516 15.1333 5.03516" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21.7968 8.24381C21.7968 4.69632 18.8172 1.82715 15.1333 1.82715" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='hidden sm:block' >
                            Talk to Live Coach
                        </p>
                    </Button>
                } />

                <DownloadAppDialog trigger={
                    <Button className="sm:mb-0  md:flex bg-[#FFA843] text-black rounded-[32.2px]">
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='sm:mr-4'  >
                            <path d="M8.47729 9.61914H14.894" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.10213 16.8883H10.7688L14.848 19.6017C15.453 20.005 16.2688 19.5742 16.2688 18.8409V16.8883C19.0188 16.8883 20.8521 15.055 20.8521 12.305V6.80501C20.8521 4.05501 19.0188 2.22168 16.2688 2.22168H7.10213C4.35213 2.22168 2.5188 4.05501 2.5188 6.80501V12.305C2.5188 15.055 4.35213 16.8883 7.10213 16.8883Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='hidden sm:block' >
                            Chat with Astrologer
                        </p>

                    </Button>
                } />


                {/* <Link href={'/notification'}>
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-5 cursor-pointer' >
                        <path d="M20.3861 4.94141C14.7723 4.94141 10.21 9.50968 10.21 15.1309V20.0388C10.21 21.0747 9.76902 22.6541 9.24326 23.5372L7.29284 26.7808C6.08866 28.7848 6.91971 31.0095 9.12454 31.7567C16.4344 34.2022 24.3209 34.2022 31.6307 31.7567C33.6829 31.0774 34.5818 28.6489 33.4624 26.7808L31.512 23.5372C31.0032 22.6541 30.5622 21.0747 30.5622 20.0388V15.1309C30.5622 9.52667 25.983 4.94141 20.3861 4.94141Z" stroke="#FFA643" stroke-width="3.05749" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M23.5238 5.43471C22.998 5.28187 22.4553 5.16299 21.8956 5.09506C20.2674 4.89127 18.7071 5.01015 17.2485 5.43471C17.7404 4.17801 18.9615 3.29492 20.3862 3.29492C21.8108 3.29492 23.032 4.17801 23.5238 5.43471Z" stroke="#FFA643" stroke-width="3.05749" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.4745 32.3682C25.4745 35.1703 23.1848 37.4629 20.3864 37.4629C18.9957 37.4629 17.7067 36.8855 16.7908 35.9684C15.875 35.0514 15.2983 33.7607 15.2983 32.3682" stroke="#FFA643" stroke-width="3.05749" stroke-miterlimit="10" />
                    </svg>
                </Link>


                <div className="rounded-full border-4 border-[#FFA843]">
                    <img src="/images/avatars/avatar.png" alt="Profile" className="rounded-full w-10 h-10 object-cover" />
                </div> */}

            </div>
        </header>
    )
}

export default MainHeader