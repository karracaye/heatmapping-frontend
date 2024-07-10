"use client";
import Link from 'next/link';
import { useState } from 'react';
import EditProfile from './EditProfile';
const Navbar = () => {
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  return (
    <nav>
        <div className="w-full px-[3%]">
            <div className='w-[105px] h-[35px] flex flex-row mt-[20px] ml-[92%]'>
              <img src="../icon/group6.svg" className='w-[30px] h-[30px]'/>
              <div className='relative'>
                <div onClick={() => setEditProfileOpen(!editProfileOpen)} className='flex flex-row cursor-pointer'>
                  <img src="../icon/ellipse5.svg" className='w-[30px] h-[30px] ml-2'/>
                  <img src="../icon/dropdown.svg" className='w-[30px] h-[30px]'/>
                </div>
                {editProfileOpen && <div className='absolute flex flex-col justify-center w-[130px] h-[87px] pb-[10px] bg-white right-[5px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] z-10 rounded-br-[10px] rounded-bl-[10px]'>
                  <button className='h-[50%] font3 text-[15px] text-black hover:bg-[#00000080] hover:opacity-50'>View Profile</button>
                  <button onClick={() => {setEditProfileOpen(false); setEditProfile(true);}} className='h-[50%] font3 text-[15px] text-black hover:bg-[#00000080] hover:opacity-50'>Edit Profile</button>
                  <button className='h-[50%] font3 text-[15px] text-black hover:bg-[#00000080] hover:opacity-50'>Log Out</button>
                </div>}
              </div>
            </div>
            <p className='font-medium text-[25px] mt-[-15px]'>Good Morning Superadmin!</p>
            <p className='font-normal text-[15px] text-black opacity-50'>Things are looking good.</p>
            <EditProfile 
            editProfile={editProfile}
            setEditProfile={setEditProfile}/>
        </div>
    </nav>
  );
};

export default Navbar;
