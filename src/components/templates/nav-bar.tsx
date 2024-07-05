import { useState } from "react";

export default function NavBar(props) {
    const roleBasedButtons = [
        {
            Superadmin: [
                {
                    name: 'Dashboard',
                    path: '/buttons/dashboard.svg',
                },
                {
                    name: 'User',
                    path: '/buttons/user.svg',
                },
                {
                    name: 'Role',
                    path: '/buttons/role.svg',
                },
                {
                    name: 'Logs',
                    path: '/buttons/logs.svg',
                },
                {
                    name: 'Transaction',
                    path: '/buttons/transaction.svg',
                },
                {
                    name: 'Settings',
                    path: '/buttons/settings.svg',
                },
            ]
        },
        {
            Admin: [
                {
                    name: 'Dashboard',
                    path: '/buttons/dashboard.svg',
                },
                {
                    name: 'Approvals',
                    path: '/buttons/approvals.svg',
                },
                {
                    name: 'Transaction',
                    path: '/buttons/transaction.svg',
                },
                {
                    name: 'Settings',
                    path: '/buttons/settings.svg',
                },
            ]
        },
        {
            Secretary: [
                {
                    name: 'Dashboard',
                    path: '/buttons/dashboard.svg',
                },
                {
                    name: 'Transaction',
                    path: '/buttons/transaction.svg',
                },
                {
                    name: 'Settings',
                    path: '/buttons/settings.svg',
                },
            ]
        },
    ]

    const [ red, setRed ] = useState('');
    const [ path, setPath ] = useState('');

    const configButton = (name, path) => {
        let newPath = path.replace('\/buttons', '/buttons-red') 
        setRed(name);
        setPath(newPath);
    }

    return (
        <div className="h-screen w-[6.5%] relative bg-white flex items-center justify-center shadow-[2px_0_2px_2px_rgba(0,0,0,0.05)]">
            <img src="/logos/intelliseven-logo.svg" alt="" 
                className="w-[70%] absolute top-2"
            />
            <div className="w-[25%] flex flex-col gap-5 font-normal">
                {
                    roleBasedButtons.map((item1) => (
                        'Superadmin' == props.role ? (
                            item1.Superadmin?.map((item2) => (
                                <button onClick={ () => ( configButton(item2.name, item2.path), props.move(item2.name.toLowerCase()) ) }
                                    className="flex flex-col items-center"
                                >
                                    <img src={ red != item2.name ? item2.path: path } alt=""
                                        className={ red != item2.name ? 'opacity-50': '' }
                                    />
                                    <p className={ `${ red != item2.name ? 'text-gray-500': 'text-guardsman-red' } text-xs` }>{ item2.name }</p>
                                </button>
                            ))
                        ): 'Admin' == props.role ? (
                            item1.Admin?.map((item2) => (
                                <button onClick={ () => ( configButton(item2.name, item2.path), props.move(item2.name.toLowerCase()) ) }
                                    className="flex flex-col items-center"
                                >
                                    <img src={ red != item2.name ? item2.path: path } alt=""
                                        className={ red != item2.name ? 'opacity-50': '' }
                                    />
                                    <p className={ `${ red != item2.name ? 'text-gray-500': 'text-guardsman-red' } text-xs` }>{ item2.name }</p>
                                </button>
                            ))
                        ): 'Secretary' == props.role ? (
                            item1.Secretary?.map((item2) => (
                                <button onClick={ () => ( configButton(item2.name, item2.path), props.move(item2.name.toLowerCase()) ) }
                                    className="flex flex-col items-center"
                                >
                                    <img src={ red != item2.name ? item2.path: path } alt=""
                                        className={ red != item2.name ? 'opacity-50': '' }
                                    />
                                    <p className={ `${ red != item2.name ? 'text-gray-500': 'text-guardsman-red' } text-xs` }>{ item2.name }</p>
                                </button>
                            ))
                        ): ''
                    ))
                }
            </div>
        </div>
    )
}