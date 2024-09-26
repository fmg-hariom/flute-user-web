import Link from "next/link";
const FollowIcon = () => {
    return (
        <svg width="32" height="33" viewBox="0 0 32 33" className="inline" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_2_10358)">
                <rect x="2" width="28" height="28" rx="14" fill="#F9F9F9" shape-rendering="crispEdges" />
                <path d="M16.7384 20.9185C16.5004 21.0025 16.1084 21.0025 15.8704 20.9185C13.8404 20.2255 9.30435 17.3345 9.30435 12.4345C9.30435 10.2715 11.0474 8.52148 13.1964 8.52148C14.4704 8.52148 15.5974 9.13748 16.3044 10.0895C17.0114 9.13748 18.1454 8.52148 19.4124 8.52148C21.5614 8.52148 23.3044 10.2715 23.3044 12.4345C23.3044 17.3345 18.7684 20.2255 16.7384 20.9185Z" stroke="#111111" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_2_10358" x="0.173913" y="0" width="31.6522" height="32.2609" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="2.43478" />
                    <feGaussianBlur stdDeviation="0.913043" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_10358" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_10358" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}
const Chat = () => {
    const contacts = [
        { firstName: 'John', lastName: 'Doe', message: 'Last message preview or status', image: '' },
        { firstName: 'Jane', lastName: 'Smith', message: 'Another message preview', image: 'https://via.placeholder.com/48' },
        { firstName: 'Alice', lastName: 'Johnson', message: 'Recent message or status', image: '' },
        { firstName: 'Michael', lastName: 'Brown', message: 'Hey, what’s up?', image: 'https://via.placeholder.com/48' },
        { firstName: 'Emily', lastName: 'Davis', message: 'Can you send me the file?', image: '' },
        { firstName: 'Sarah', lastName: 'Wilson', message: 'Meeting tomorrow at 10AM', image: 'https://via.placeholder.com/48' },
        { firstName: 'David', lastName: 'Taylor', message: 'Thanks for your help!', image: '' },
        { firstName: 'Laura', lastName: 'Moore', message: 'Don’t forget the deadline!', image: 'https://via.placeholder.com/48' },
        { firstName: 'Chris', lastName: 'Anderson', message: 'Let’s catch up soon.', image: '' },
        { firstName: 'Jessica', lastName: 'Thomas', message: 'Can we reschedule?', image: 'https://via.placeholder.com/48' },
        { firstName: 'Daniel', lastName: 'Jackson', message: 'I’ll call you later.', image: '' },
        { firstName: 'Olivia', lastName: 'White', message: 'Got the documents, thanks!', image: 'https://via.placeholder.com/48' },
        { firstName: 'Matthew', lastName: 'Harris', message: 'Do you have the update?', image: '' },
        { firstName: 'Sophia', lastName: 'Martin', message: 'Nice work on the project!', image: 'https://via.placeholder.com/48' },
        { firstName: 'James', lastName: 'Garcia', message: 'See you at the event.', image: '' },
        { firstName: 'Mia', lastName: 'Rodriguez', message: 'Quick question about the task.', image: 'https://via.placeholder.com/48' },
        { firstName: 'Andrew', lastName: 'Martinez', message: 'Can you review this?', image: '' },
        { firstName: 'Charlotte', lastName: 'Lee', message: 'How was your weekend?', image: 'https://via.placeholder.com/48' },
        { firstName: 'Ethan', lastName: 'Walker', message: 'Let’s discuss this further.', image: '' },
        { firstName: 'Amelia', lastName: 'Hall', message: 'Looking forward to the meeting.', image: 'https://via.placeholder.com/48' },
    ];

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    return (
        <>
            <div className="p-0 p-0 max-w-lg rounded-lg w-1/2 min-w-1/2">
                <div className="modal-cards h-[9%] rounded-tl-lg rounded-tr-lg p-3 flex justify-between items-center">
                    <div className="">
                        <h2 className="card-title text-[16px] xl:text-[24px]">
                            Samiksha &nbsp; <span className="inline"><FollowIcon></FollowIcon></span>
                        </h2>
                        <p className="text-[#FFA643] text-base -mt-2">& Akshay</p>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <button
                            className="flex items-center border border-white space-x-1 bg-[#242424] text-white font-semibold py-1 px-2 rounded-md shadow hover:bg-gray-800"
                        >
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10" width="3" height="13" fill="white" />
                                <rect x="5" y="4" width="3" height="9" fill="white" />
                                <rect y="7" width="3" height="6" fill="white" />
                            </svg>

                            <span className="text-sm">59m 24s</span>
                        </button>
                        <button
                            className="flex items-center space-x-1 bg-white text-black font-semibold py-1 px-2 rounded-md shadow hover:bg-gray-100"
                        >
                            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3606 9.85237C17.3606 10.844 16.9995 11.7951 16.3568 12.4963C15.7141 13.1975 14.8424 13.5915 13.9335 13.5915C13.0246 13.5915 12.1529 13.1975 11.5102 12.4963C10.8675 11.7951 10.5064 10.844 10.5064 9.85237C10.5064 8.8607 10.8675 7.90965 11.5102 7.20843C12.1529 6.50722 13.0246 6.11328 13.9335 6.11328C14.8424 6.11328 15.7141 6.50722 16.3568 7.20843C16.9995 7.90965 17.3606 8.8607 17.3606 9.85237Z" stroke="#242424" stroke-width="1.46875" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M0.986946 9.85246C2.81472 4.74612 8.60571 1.12793 13.9337 1.12793C19.2616 1.12793 25.0526 4.74612 26.8804 9.85246C25.0526 14.9588 19.2616 18.577 13.9337 18.577C8.60571 18.577 2.81472 14.9588 0.986946 9.85246Z" stroke="#242424" stroke-width="1.46875" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className="text-sm">24K</span>
                        </button>
                        <Link href={`/coaches`}>
                            <div className="cursor-pointer">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="1.49" y1="1.29783" x2="22.7211" y2="22.5289" stroke="white" stroke-width="1.45296" />
                                    <path d="M21.9937 1.81155L0.762578 23.0426" stroke="white" stroke-width="1.45296" />
                                </svg>
                            </div>
                        </Link>

                    </div>
                </div>
                <div className="h-[80%] max-h-[80%] overflow-auto text-black">
                    <div className="h-full max-h-[600px]">
                        {contacts.map((contact, index) => {
                            const initials = `${contact.firstName[0]}${contact.lastName[0]}`;
                            const hasImage = contact.image !== '';
                            const randomColor = getRandomColor();
                            return (
                                <li key={index} className="flex items-center p-2 pl-4 pr-4 bg-white rounded-lg hover:bg-gray-50 cursor-pointer">
                                    {hasImage ? (
                                        <img
                                            src={contact.image}
                                            alt={`${contact.firstName} ${contact.lastName}`}
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 bg-gray-300 text-white flex items-center justify-center rounded-full mr-4" style={{ backgroundColor: randomColor }}>
                                            <span className="text-lg font-semibold">{initials}</span>
                                        </div>
                                    )}
                                    <div>
                                        <p className="text-[15px] font-medium">{`${contact.firstName} ${contact.lastName}`}</p>
                                        <p className="text-[15px] text-gray-500">{contact.message}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </div>
                </div>
                <div className="w-full h-[1%] bg-white"></div>
                <div className="h-[10%] modal-cards rounded-b-lg p-3 flex justify-center items-center pl-6 pr-6">
                    <div className="flex items-center bg-white rounded-3xl px-2 overflow-hidden w-full p-2">
                        <button className="bg-white p-2 ">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.64145 10.6323H16.41" stroke="#242424" stroke-width="1.81603" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.97653 19.433H11.4157L16.3543 22.718C17.0868 23.2063 18.0745 22.6847 18.0745 21.7969V19.433C21.4039 19.433 23.6235 17.2134 23.6235 13.884V7.22525C23.6235 3.89586 21.4039 1.67627 18.0745 1.67627H6.97653C3.64714 1.67627 1.42755 3.89586 1.42755 7.22525V13.884C1.42755 17.2134 3.64714 19.433 6.97653 19.433Z" stroke="#242424" stroke-width="1.81603" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                        <input
                            type="text"
                            placeholder="Type a message"
                            className="flex-1 px-4 py-2 text-black focus:outline-none chat-input"
                        />
                        <button className="bg-white text-white p-2 ">
                            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3094 11.2193L16.362 7.99724M25.0667 2.54895C23.1056 -0.793863 2.23529 1.71375 1.70343 4.19628C1.099 7.01243 8.4532 9.54584 10.4144 10.596C11.5939 11.2277 11.8511 11.6628 11.8488 13.0461C11.8409 19.3086 11.8443 22.4266 13.3309 22.8249C15.7035 23.4614 26.98 5.81051 25.0667 2.54895Z" stroke="#242424" stroke-width="1.81603" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Chat;