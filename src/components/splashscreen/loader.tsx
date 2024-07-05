import { useState, useEffect } from "react"

export default function Loader() {
    const [ message, setMessage ] = useState('')

    useEffect(() => {
        setMessage('I’m Excited to see you!');
        
        setTimeout(() => {
            setMessage('Almost there!')
        }, 1200)

        setTimeout(() => {
            setMessage('Finally!')
        }, 2500)
    }, [])

    return (
        <div className="w-2/5 flex flex-col items-center gap-2">
            <img src="/logos/undraw-world.svg" alt="" />

            <div className="w-3/4">
                <div className="animate-[loading_3s_ease] flex justify-end">
                    <div className="min-w-5 flex flex-col items-center gap-1 translate-x-2">
                        <img src="/icons/point-map.svg" alt="" 
                            className="h-5"
                        />
                        <div className="w-2 h-2 bg-[#FF7373] rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="w-3/4 bg-[#EDEDED] h-4 rounded-[20px] overflow-hidden">
                <div className="animate-[loading_3s_ease] h-full bg-guardsman-red rounded-[20px]"></div>
            </div>

            <p className="text-xs text-gray-500 font-normal">{ message }</p>
        </div>
    )
}