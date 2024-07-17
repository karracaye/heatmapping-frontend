"use client";
import Link from 'next/link';
import axios from '@/lib/axios';
import { useState, useEffect } from 'react';
import EditProfile from './EditProfile';
type PropsUser = {
  addNewClick: () => void
}
type processedData = {
  fullname: string;
  email: string;
  status: string
}

const UserRightSection: React.FC<PropsUser> = ({addNewClick}) => {
  const [dataValue, setDataValue] = useState<processedData[]>([]);
  const [newDataValue, setNewDataValue] = useState<processedData[]>([]);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [totalNumber, setTotalNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); //Track the current page
  const recordPerPage = 7; //Number of data or id that will be shown
  const lastIndex: number = currentPage * recordPerPage; //Getting the last index per page
  const firstIndex: number = lastIndex - recordPerPage; //Getting the first index per page
  const records: any = dataValue.slice(firstIndex, lastIndex); //Get the data
  const nPage: number = Math.ceil(dataValue.length / recordPerPage); //Number of pages
useEffect(() => {
   const fetchData = async () => {//This will help to compile the full name of the user
      try {
      const response = await axios.instance.get('/users');
      const processedData = response.data.map((item: any) => ({
        fullname: `${item.firstname} ${item.middle_name ? item.middle_name + ' ' : ''}${item.lastname}`.trim(),//This will access by the accessor
        email: item.email,//This will access by the accessor
        status: item.status//This will access by the accessor
      }));
      setDataValue(processedData);
      console.log(processedData.status);
      } catch (error) {
      console.error(error);
      }
   };
   fetchData();
}, [currentPage]);

const previousPage = () => {
  if (currentPage !== 1) {
    setCurrentPage(currentPage - 1);
  }
};

const nextPage = () => {
  if (currentPage !== nPage) {
    setCurrentPage(currentPage + 1);
  }
};

useEffect(() => {
  setTotalNumber(dataValue.length + 1);
});

return (
  <div className="w-[100%] h-[100%] grow pt-5 pl-[3%] pr-[2.5%]">
        <div className="relative max-h-[100%] min-h-[80vh] bg-white rounded-[10px] shadow-[0_0_1px_2.9px_rgba(0,0,0,0.03)]">
            <div className="flex justify-between items-center pl-14 pr-9 pt-5 pb-2">
                <p className="text-base font-semibold">Users</p>
                <div className="h-[54px] flex flex-row items-center justify-end gap-2">
                      <div>
                            <button onClick={addNewClick} className='bg-[#303079] rounded-[10px] font-medium text-xs text-white h-[40px] px-4 cursor-pointer hover:opacity-10 duration-300 transition'>Add New User</button>
                      </div>
                      <div className='relative '>
                            <input className='border-[#0000001a] border-[1px] h-[40px] w-[240px] rounded-[10px] font-normal text-[12px] texts pl-[30px]' type="text" placeholder='Who are you looking for?'/>
                            <img className='absolute h-[20px] w-[20px] opacity-10 top-[10px] left-2' src="/icon/glass.svg" alt="" />
                      </div>
                </div>
            </div>
            <table className="w-full table-auto">
                <thead>
                <tr className="bg-[#F2F2F2] text-black font-semibold text-[15px] leading-normal">
                  <th className="py-3 pl-[65px] px-6 text-left font-medium w-[30%]">Name</th>
                  <th className="py-3 px-6 text-left font-medium w-[30%]">Email Address</th>
                  <th className="py-3 px-6 text-left font-medium w-[18%]">Status</th>
                  <th className="py-3 px-6 text-left font-medium w-[15%]">Action</th>
                </tr>
                </thead>
                <tbody className="font-normal text-[15px] text-black">
                {records.map((user, index) => (
                  <tr key={index} className="border-b">
                      <td className="pr-3 px-6 text-left pl-[40px] w-[30%]">{user.fullname}</td>
                      <td className="py-3 px-6 text-left w-[35%]">{user.email}</td>
                      <td className="py-3 px-6 text-left flex items-center">
                        <div className={`w-[9px] h-[9px] mr-2 shadow-[0_2px_1px_0_rgba(0,0,0,0.25)] rounded-full ${user.status === "active" ? 'bg-[#ffff00]' : 'bg-[#ff0000]'}`}></div>
                        <p>{user.status === "active" ? "Active" : "Deactivated"}</p>
                      </td>
                      <td className="py-3 px-6 text-left w-[15%]">
                      <div className='w-[90px] flex justify-between pr-[5px] items-center'>
                        <Link href="/profile/[id]" as={`/profile/${10002}`}>
                        <button className='font-semibold text-[15px] text-[#0500e8]'>View</button>
                        </Link>
                        <button  onClick={() => setEditProfileOpen(true)} className='font-semibold text-[15px] text-[#daa318]'>Edit</button>
                      </div>
                      </td>
                  </tr>
                ))}
                </tbody>
            </table>
            <div className="w-[100px] flex justify-center items-center mt-1 absolute bottom-[10px] left-[45%] ">
              <div className="flex flex-row justify-center items-center">
                <p className="font-normal text-[11px] text-black">
                  {firstIndex + 1}-{lastIndex} of {totalNumber}
                </p>
                <img
                  onClick={previousPage}
                  className="ml-1 w-3 h-3"
                  src="/icon/lessthan.svg"
                />
                <img
                  onClick={nextPage}
                  className="w-3 h-3 ml-2"
                  src="/icon/greaterthan.svg"
                />
              </div>
            </div>
        </div>
        <EditProfile
        editProfileOpen={editProfileOpen}
        setEditProfileOpen={setEditProfileOpen}/>
  </div>
);
};

export default UserRightSection