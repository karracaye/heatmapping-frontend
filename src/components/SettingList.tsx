'use client';
import { ReactNode, MouseEventHandler } from 'react';

export default function SettingList({children, onSelect }:any){
    return (
        <>
            <p className="text-sm text-black cursor-pointer pb-2 pt-2 pl-9" onClick={onSelect}>
                {children}
            </p>
        </>
    );
}

