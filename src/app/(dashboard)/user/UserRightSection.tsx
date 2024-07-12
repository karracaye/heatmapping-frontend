"use client";
import { addusers } from '@/utility/cityconstant';
import axios from '@/lib/axios';
import { useState, useEffect } from 'react';
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

useEffect(() => {
   const fetchData = async () => {//This will help to compile the full name of the user
      try {
      const response = await axios.instance.get('/users');
      const processedData = response.data.map((item) => ({
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
}, []);

return (
  <div className="w-[100%] h-[100%] grow pt-5 pl-[3%] pr-[2.5%]">
        <div className="relative max-h-[100%] min-h-[80vh] bg-white rounded-[10px] shadow-[0_0_1px_2.9px_rgba(0,0,0,0.03)]">
            <div className="flex justify-between items-center pl-14 pr-9 pt-5 pb-2">
                <p className="text-base font-semibold">Users</p>
                <div className="w-[35%] h-[54px] flex flex-row items-center justify-end gap-2">
                      <div>
                            <button onClick={addNewClick} className='bg-[#303079] rounded-[10px] font-medium text-xs text-white h-[40px] px-4 cursor-pointer hover:opacity-10 duration-300 transition'>Add New User</button>
                      </div>
                      <div className='relative '>
                            <input className='border-[#0000001a] border-[1px] h-[40px] w-[240px] rounded-[10px] font-normal text-[12px] texts pl-[30px]' type="text" placeholder='Who are you looking for?'/>
                            <img className='absolute h-[20px] w-[20px] opacity-10 top-[10px] left-2' src="/icon/glass.svg" alt="" />
                      </div>
                </div>
            </div>
            <div className="overflow-x-autom">
              <table className="w-full table-auto">
                  <thead>
                  <tr className="bg-[#F2F2F2] text-black font-semibold text-[15px] leading-normal">
                    <th className="py-3 pl-[65px] px-6 text-left font-medium">Name</th>
                    <th className="py-3 px-6 text-left font-medium">Email Address</th>
                    <th className="py-3 px-6 text-left font-medium">Status</th>
                    <th className="py-3 px-6 text-left font-medium">Action</th>
                  </tr>
                  </thead>
                  <tbody className="font-normal text-[15px] text-black">
                  {dataValue.map((user, index) => (
                    <tr key={index} className="border-b">
                        <td className="pr-3 px-6 text-left pl-[40px]">{user.fullname}</td>
                        <td className="py-3 px-6 text-left">{user.email}</td>
                        <td onClick={() => console.log(user.status)} className="py-3 px-6 text-left flex items-center">
                          <div className={`w-[9px] h-[9px] mr-2 shadow-[0_2px_1px_0_rgba(0,0,0,0.25)] rounded-full ${user.status === "active" ? 'bg-[#ffff00]' : 'bg-[#ff0000]'}`}></div>
                          <p>{user.status === "active" ? "Active" : "Deactivated"}</p>
                        </td>
                        <td className="py-3 px-6 text-left">
                        <div className='w-[90px] flex justify-between pr-[5px] items-center'>
                          <button className='font-semibold text-[15px] text-[#0500e8]'>View</button>
                          <button className='font-semibold text-[15px] text-[#daa318]'>Edit</button>
                        </div>
                        </td>
                    </tr>
                  ))}
                  </tbody>
              </table>
            </div>
        </div>
  </div>
);
};

export default UserRightSection