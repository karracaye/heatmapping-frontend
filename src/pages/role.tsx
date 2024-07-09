import { useState, useEffect } from "react";
import { axiosInstance, axiosBaseUrl } from "@/utils/axios";
import PopUp from "@/components/modals/pop-up";
import Verification from "@/components/modals/verification";

export default function Role() {
    const head = [
        'Name',
        'Role',
        'Email Address',
        'Action',
    ]

    const [ body, setBody ] = useState([
        {
            name: '',
            role: '',
            email: '',
        },
    ]);

    useEffect(() => {
        axiosInstance.get(axiosBaseUrl('/users/roles'))
        .then((response) => {
            setBody(response.data);
        })
    }, [])

    const role = [
        'Superadmin',
        'Admin',
        'Secretary',
    ]

    const [ newRole, setNewRole ] = useState(false);
    const [ confirm, setConfirm ] = useState(false);

    return (
        <>
            <div className="h-20 flex justify-between items-center pl-14 pr-9 pt-4">
                <p className="text-base font-semibold">Roles and Permission</p>
                <div className="w-[30%] flex gap-3 z-10">
                    <PopUp name='Roles'>
                        <div className="px-5 pt-5">
                            <p className="text-lg font-medium">Roles</p>
                            <p className="text-xs font-normal text-gray-500">
                                These role descriptions outline the core responsibilities and duties
                            </p>
                        </div>

                        <div className="h-[146px] p-4 grid grid-cols-3 grid-rows-3 gap-2">
                            {
                                role.map((item) => (
                                    <div className="flex justify-between py-2 px-4 bg-guardsman-red rounded-[20px]">
                                        <p className="w-full text-white text-xs text-center">{ item }</p>
                                        <Verification 
                                            button='/icons/cross.svg'
                                            icon='/icons/warning.svg'
                                            message={ `You’re going to delete this role.\nAre you sure?` }
                                        />
                                    </div>
                                ))
                            }
                            {
                                newRole && (
                                    <input type="text" 
                                        className="text-xs border-[1px] border-guardsman-red rounded-[20px] py-2 px-4 outline-none"
                                    />
                                )
                            }
                            {
                                confirm ? (
                                    <button onClick={ () => ( setNewRole(false), setConfirm(false) ) }
                                        className="h-[32px] flex justify-center items-center rounded-full aspect-square shadow-[0_2px_2px_2px_rgba(0,0,0,0.1)]"
                                    >
                                        <img src="/buttons/check.svg" alt="" />
                                    </button>
                                ) : (
                                    <button onClick={ () => ( setNewRole(true), setConfirm(true) ) }
                                        className="h-[32px] flex justify-center items-center rounded-full aspect-square shadow-[0_2px_2px_2px_rgba(0,0,0,0.1)]"
                                    >
                                        <img src="/buttons/add.svg" alt="" />
                                    </button>
                                )
                            }
                        </div> 
                    </PopUp>

                    <div className="w-full flex items-center relative">
                        <img src="/icons/magnifying-glass.svg" alt=""
                            className="absolute px-2 opacity-30"
                        />
                        <input type="search" name="" id="" placeholder="Who are you looking for?"
                            className="w-full h-10 pl-8 pr-2 border border-gray-400 outline-none font-normal rounded-[10px] text-sm"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full h-full absolute top-0 pt-[80px]">
                <div className="overflow-y-auto h-full rounded-b-[10px]">
                    <table className="w-full text-sm">
                        <thead className="sticky top-0">
                            <tr className="h-12 bg-[#F2F2F2] font-semibold text-left">
                                <th></th>
                                {
                                    head.map((item) => (
                                        <th>{ item }</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                body.map((item, index) => (
                                    <tr className="h-12 border-b border-[#F2F2F2]">
                                        <td className="w-12 p-3">
                                            <p 
                                                className="bg-[#D9D9D9] text-white flex items-center justify-center rounded-full aspect-square"
                                            >
                                                { index + 1 }
                                            </p>
                                        </td>
                                        <td>{ item.name }</td>
                                        <td>{ item.role }</td>
                                        <td className="text-gray-400">
                                            { item.email }
                                        </td>
                                        <td className="h-12 flex gap-3 items-center font-semibold">
                                            <button
                                                className="text-[#0500E8]"
                                            >
                                                View
                                            </button>
                                            <button
                                                className="text-[#DAA318]"
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}