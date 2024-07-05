import NavBar from "./nav-bar"

export default function Layout(props) {
    return (
        <div className="w-full h-full flex bg-[#F8F8F8]">
            <NavBar move={ (page) => props.content(page) } role={ props.role } />

            <div className="w-[93.5%] h-screen relative">
                <div className="w-full absolute pt-4 pb-3 z-10">
                    <div className="flex items-center justify-end gap-2 px-4">
                        <button
                            className="w-5 h-5 relative flex items-center justify-center rounded-full"
                        >
                            <img src="/buttons/bell.svg" alt="" 
                                className="h-full opacity-70"
                            />
                            <div className="w-2 h-2 absolute rounded-full top-0 right-0 bg-guardsman-red"></div>
                        </button>
                        
                        <button
                            className="flex items-center gap-1"
                        >
                            <img src="/images/sample.jpg" alt="" 
                                className="w-8 rounded-full aspect-square object-cover"
                            />
                            <img src="/buttons/dropdown.svg" alt="" 
                                className="opacity-50"
                            />
                        </button>
                    </div>

                    <div className="px-6">
                        <p className="font-medium text-2xl">Good Morning { props.role }!</p>
                        <p className="font-normal text-sm text-gray-500">Things are looking good.</p>
                    </div>
                </div>

                <div className="w-full h-full absolute top-0 px-6 pt-[114px] pb-6">
                    <div className="min-h-full max-h-full relative bg-white rounded-[10px] shadow-[0_0_2px_2px_rgba(0,0,0,0.03)]">
                        { props.children }
                    </div>
                </div>
            </div>
        </div>
    )
}