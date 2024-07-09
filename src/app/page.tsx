'use client';
import { useState, useEffect } from "react";
import { navigate } from "@/utils/navigate";
import Intro from "@/components/splashscreen/intro";
import Loader from "@/components/splashscreen/loader";
import Login from "@/pages/login";
import Layout from "@/components/templates/layout";
import { axiosInstance } from "@/utils/axios";

export default function Home() {
    const [ transition, setTransition ] = useState('');

    useEffect(() => {
        setTransition('intro');
        
        setTimeout(() => {
            setTransition('loader');
        }, 5000)

        setTimeout(() => {
            setTransition('login');
        }, 8000)
    }, [])

    const [ user, setUser ] = useState(null);
    const authUser = (data) => {
        setUser(data.id);
        
        axiosInstance.interceptors.request.use((config) => {
            config.headers["authorization"] = `bearer ${data.token}`;
            return config;
        }, (error) => {
            Promise.reject(error);
        });

        console.log(data);
    }
    
    const [ content, setContent ] = useState('');

    return (
        <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
            {
                transition == 'intro' ? (
                    <Intro />
                ): transition == 'loader' ? (
                    <Loader />
                ): transition == 'login' ? (
                    <Login config={ (data) => ( authUser(data), setTransition('') ) } />
                ): ''
            }
            {
                user && !content ? (
                    <Layout role='Superadmin' content={ (page) => ( setContent(page) ) }>
                        { navigate('dashboard') }
                    </Layout>
                ): ''
            }
            {
                user && content ? (
                    <Layout role='Superadmin' content={ (page) => setContent(page) }>
                        { navigate(content) }
                    </Layout>
                ): ''
            }
        </div>
    )
}
