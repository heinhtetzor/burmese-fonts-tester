import React from "react";

const Toggle = ({ value, onChange }) => {
    return (
        <div 
            class={`relative flex h-7 w-12 items-center rounded-full transition-all duration-300 border-2 ${ value ? 'border-sky-800 bg-sky-700' : 'border-sky-400 bg-sky-300'}`}
            onClick={onChange}
        >
            <div class={`absolute h-6 w-6 rounded-full cursor-pointer transition-all duration-300 shadow ${ value ? 'right-0 bg-gray-300' : 'right-5 bg-yellow-500' }`}>
            </div>
        </div>
    );
};
                
export default Toggle;