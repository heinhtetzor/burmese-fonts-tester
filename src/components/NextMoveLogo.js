import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
    weight: "300",
    subsets: ["latin"],
});

const NextMoveLogo = ({ theme }) => {

    const bgColor = theme === 'light' ? 'bg-white' : 'bg-black';
    const textColor = theme === 'light' ? 'text-black' : 'text-white';

    return (
        <div
            className={`flex items-center justify-center h-5 w-5 rounded-full shadow ${bgColor}`}
        >
            <span className={`text-xs italic ${raleway.className} ${textColor}`}>
                [\]
            </span>
        </div>
    );
};

export default NextMoveLogo;
