import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="flex rounded-lg overflow-hidden bg-gray-800 text-white max-w-4xl mx-auto shadow-lg">
                {/* Video Section */}
                <div className="w-2/3 bg-black relative">
                    <img
                        src="/images/sample-image.jpg"
                        alt="Video"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                        <button className="bg-white text-black p-2 rounded-full">
                            📹
                        </button>
                        <button className="bg-white text-black p-2 rounded-full">
                            🎙️\
                        </button>
                        <button className="bg-white text-black p-2 rounded-full">
                            🔇
                        </button>
                    </div>
                </div>

                {/* Chat Section */}
                <div className="w-1/3 bg-white text-black p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">Samiksha</h3>
                        <div className="flex items-center space-x-2">
                            <span>21K</span>
                            <button className="text-gray-500">◉</button>
                        </div>
                    </div>

                    <div className="overflow-y-auto h-[calc(100vh-200px)] space-y-3">
                        {/* Chat Messages */}
                        <div className="flex items-center space-x-2">
                            <img
                                src="/images/user1.jpg"
                                alt="User"
                                className="w-8 h-8 rounded-full"
                            />
                            <div>
                                <span className="font-semibold">Shrijana Rijal</span>
                                <p>How to impress a boy of different age.</p>
                            </div>
                        </div>

                        {/* Repeat similar chat messages */}
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">A</div>
                            <div>
                                <span className="font-semibold">Akshita Sharma</span>
                                <p>I want to know how to forget my bf of 5 years.</p>
                            </div>
                        </div>

                        {/* Add more chat messages as per the design */}
                    </div>

                    {/* Input Section */}
                    <div className="flex mt-4">
                        <input
                            type="text"
                            placeholder="Type a message"
                            className="flex-1 border rounded-full py-2 px-4 text-gray-800"
                        />
                        <button className="ml-2 bg-blue-500 text-white rounded-full p-2">
                            📨
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page