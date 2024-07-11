import React from 'react';

const ImportModal = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white w-4/12 p-4 rounded-lg">
                <div className="flex justify-between">
                    <p className="text-center font-bold text-lg">Import File</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="text-gray-500" viewBox="0 0 24 24">
                        <g fill="none" fillRule="evenodd">
                            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                            <path fill="#ec7965" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"/>
                        </g>
                    </svg>
                </div>
                <div className="mt-6 w-full h-40 border-dashed border-2 border-light-blue-500 flex justify-center items-center">
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="opacity-20" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M62.7 85.3H20V512h384v-42.7H62.7zM361.3 0v128h128zM340 0H105.3v426.7h384V149.3H340zm64 298.7h-64V384h-85.3v-85.3h-64L297.3 192z"/>
                        </svg>
                        <p className="text-xs text-center py-4 text-gray-500">Please import your file by clicking the button<br/>or dragging it into this area.</p>
                        <a href="#" className="text-blue-500 text-xs cursor-pointer">Choose a file</a>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button className="text-sm hover:bg-gray-300 text-gray-100 font-medium py-2 px-4 mr-2 rounded">
                        Cancel
                    </button>
                    <button className=" text-sm text-[#303079] border-blue-500 hover:bg-[#303079] hover:text-white font-medium py-2 px-4 rounded">
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImportModal;
