import { useState } from "react";
const axiosInstance = require("@/utils/axios-instance");

export default function Login(props) {
    const [ loginData, setLoginData ] = useState({
        username: '',
        password: '',
    })

    const handleLoginData = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        setLoginData((prevState) => ({
            ...prevState,
            [ name ]: value
        }));
    }

    const submitLoginData = () => {
        axiosInstance.login.get('/', {
            email: loginData.username,
            password: loginData.password,
        })
        .then((response) => {
            console.log(response.data);
        })
    }

    return (
        <div className="w-full h-full px-[6%] py-[4%]">
            <img src="/images/heatmapping-tracker-system.svg" alt=""
                className="h-full absolute top-0 left-0"
            />

            <div className="w-full h-full flex items-center justify-center rounded-[20px] border-2 border-gray-100 shadow-[0_0_2px_2px_rgba(0,0,0,0.01)]">
                <div className="w-[32.5%] h-full flex flex-col items-center justify-center translate-x-1/2">
                    <img src='/logos/intelliseven-logo.svg' alt='' 
                        className='w-[30%]'
                    />

                    <p className='font-semibold text-3xl'>Login</p>
                    <p className='font-normal text-lg text-gray-500'>Hello, Welcome back!</p>

                    <div className='w-full my-6 flex flex-col items-center gap-2'>
                        <div className='w-3/4 relative flex items-center'>
                            <img src='/icons/at.svg' alt='' 
                                className='w-9 absolute opacity-30 px-2 border-r-2 border-gray-500'
                            />
                            <input type='text' placeholder='username'
                                className='w-full h-9 border border-gray-400 rounded-[10px] text-sm font-normal pl-10 pr-2'
                                name='username'
                                value={ loginData.username }
                                onChange={ handleLoginData }
                            />
                        </div>

                        <div className='w-3/4 relative flex items-center'>
                            <img src='/icons/padlock.svg' alt='' 
                                className='w-9 absolute opacity-30 px-2 border-r-2 border-gray-500'
                            />
                            <input type='password' placeholder='password'
                                className='w-full h-9 border border-gray-400 rounded-[10px] text-sm font-normal pl-10 pr-2'
                                name='password'
                                value={ loginData.password }
                                onChange={ handleLoginData }
                            />
                        </div>
                    </div>

                    <button 
                        onClick={ submitLoginData }
                        // onClick={ props.config }
                        className='h-9 w-3/4 bg-guardsman-red font-semibold text-md text-white rounded-[10px]'
                    >
                        Log in
                    </button>
                    
                    <div className='w-3/4 flex justify-end'>
                        <button
                            className='font-normal text-xs text-right text-gray-400 my-2'
                        >
                            Forgot Password?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}