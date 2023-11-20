import React from "react";

const DarkModeToggle = ({ value, onChange }) => {
    return (
        <div 
            className={`relative flex h-7 w-12 items-center cursor-pointer rounded-full transition-all duration-300 border-2 ${ value ? 'border-slate-900 bg-slate-800' : 'border-sky-400 bg-sky-300'}`}
            onClick={onChange}
        >
            <div className={`absolute h-6 w-6 rounded-full transition-all duration-300 shadow ${ value ? 'right-0 bg-gradient-to-br from-white to-gray-800 ' : 'right-5 bg-yellow-500' }`}>
            </div>
        </div>
    );
};
                
export default DarkModeToggle;