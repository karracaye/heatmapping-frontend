'use client';
import { ReactNode, MouseEventHandler } from 'react';

interface TabListButtonProps {
  children: ReactNode;
  onSelect: MouseEventHandler<HTMLButtonElement>;
}

export default function TabListButton({children, onSelect}:TabListButtonProps){
  
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}