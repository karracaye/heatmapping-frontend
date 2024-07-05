'use client';
import { useState, useEffect } from "react";
import { navigate } from "@/utils/navigate";
import Intro from "@/components/splashscreen/intro";
import Loader from "@/components/splashscreen/loader";
import Login from "@/pages/login";
import Layout from "@/components/templates/layout";

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

    const [ login, setLogin ] = useState(false);
    const [ content, setContent ] = useState('');

    return (
        <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
            {
                transition == 'intro' ? (
                    <Intro />
                ): transition == 'loader' ? (
                    <Loader />
                ): transition == 'login' ? (
                    <Login config={ () => ( setTransition(''), setLogin(true) ) } />
                ): ''
            }
            {
                login ? (
                    <Layout role='Superadmin' content={ (page) => ( setContent(page), setLogin(!login) ) }>
                        { navigate('dashboard') }
                    </Layout>
                ): ''
            }
            {
                content ? (
                    <Layout role='Superadmin' content={ (page) => setContent(page) }>
                        { navigate(content) }
                    </Layout>
                ): ''
            }
        </div>
    )
}
