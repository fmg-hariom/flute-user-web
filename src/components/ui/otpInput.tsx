import { useState, useRef } from 'react';

export default function OTPInput() {
    // Initialize state with an array of six empty strings
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Handler for input changes
    const handleChange = (element: HTMLInputElement, index: number) => {
        const value = element.value.replace(/[^0-9]/g, ''); // Only allow numeric input

        if (value.length > 1) return; // Prevent entering more than one digit in a single input

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to the next input if available
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handler for handling backspace
    const handleBackspace = (element: HTMLInputElement, index: number) => {
        if (element.value === '') {
            // Move focus to the previous input if it's empty
            if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    return (
        <>
            <div className="flex space-x-3"> {/* Changed to have 12px gap (space-x-3) */}
                {otp.map((data, index) => (
                    <input
                        key={index}
                        type="text"
                        className="w-[4rem] h-[4rem] bg-[#141312]  text-center text-lg rounded-[19px] text-white" // Updated styles
                        maxLength={1} // Set maxLength to a number
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onKeyDown={(e) => {
                            if (e.key === 'Backspace') {
                                handleBackspace(e.target as HTMLInputElement, index);
                            }
                        }}
                        ref={(el) => {
                            inputRefs.current[index] = el;
                        }}
                    />
                ))}
            </div>
            
        </>
    );
}
