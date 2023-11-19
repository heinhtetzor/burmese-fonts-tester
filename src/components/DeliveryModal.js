import React from 'react'

const CDNLink = ({ link }) => {

    const copyToClipboard = () => {
        navigator.clipboard.writeText(link);
    };

    return (
        <div className="flex flex-row">
            <input 
                className="flex-1 flex items-center bg-sky-100 rounded-l-lg text-xs h-10 pl-2 pr-1 focus:outline-none"
                value={link}
            />
            <button 
                className="flex items-center justify-center w-12 text-gray-700 bg-sky-300 active:bg-sky-400 rounded-r-lg"
                onClick={copyToClipboard}
            >
                <span className="text-xs">
                    Copy
                </span>
            </button>
        </div>
    )
}

const DeliveryModal = ({ 
    show, 
    onClose, 
    selectedFont 
}) => {

    const cssSelectedLink = `@import url(http://localhost:3000/api/${selectedFont.fileName}.css);`;
    const cssAllLink = `@import url(http://localhost:3000/api/all.css);`;
    const htmlSelectedLink = `<link rel="stylesheet" href="http://localhost:3000/api/${selectedFont.fileName}.css"></link>`;
    const htmlAllLink = `<link rel="stylesheet" href="http://localhost:3000/api/all.css"></link>`;
    const downloadLink = `http://localhost:3000/api/fonts/${selectedFont.fileName}.${selectedFont.extension}`;

    return (
        <div 
            className="flex flex-col justify-center items-center fixed h-screen w-screen bg-opacity-50 top-0 transition-all duration-200"
            style={{
                top: show ? '0' : '120%',
            }}
        >
            {/* card */}
            <div className={`flex flex-col w-96 rounded-lg border border-gray-500 bg-white p-4 shadow-xl transition-all duration-300 ${ show ? 'rotate-0' : '-rotate-45' }`}>

                <div className="flex flex-row items-center justify-end">
                    <button 
                        className="border border-gray-400 rounded w-8 h-8"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>

                <div className="flex justify-center mt-2">
                    <a 
                        className="flex items-center border border-gray-400 rounded shadow active:bg-gray-200"
                        href={downloadLink}
                    >
                        <span className="text-xs px-2 py-1">Download Font</span>
                    </a>
                </div>

                <div className="border-b border-b-gray-300 my-4"/>

                <span className="text-gray-700 font-bold text-lg">CDNs</span>

                <div className="flex flex-col my-3 space-y-2">
                    <span className="text-xs">Import in your CSS file</span>
                    <div>
                        <span className="text-gray-500 text-xs mb-1">For selected font only</span>
                        <CDNLink link={cssSelectedLink}/>
                    </div>
                    <div>
                        <span className="text-gray-500 text-xs mb-1">For all fonts</span>
                        <CDNLink link={cssAllLink}/>
                    </div>
                    
                </div>

                <div className="flex flex-row items-center justify-between space-x-2">
                    <div className="flex-1 border-b border-b-gray-300"/>
                    <span className="text-gray-400 text-sm">OR</span>
                    <div className="flex-1 border-b border-b-gray-300"/>
                </div>

                <div className="flex flex-col mt-3 mb-2 space-y-2">
                    <span className="text-xs">Import in your HTML head</span>
                    <div>
                        <span className="text-gray-500 text-xs mb-1">For selected font only</span>
                        <CDNLink link={htmlSelectedLink}/>
                    </div>
                    <div>
                        <span className="text-gray-500 text-xs mb-1">For all fonts</span>
                        <CDNLink link={htmlAllLink}/>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default DeliveryModal;