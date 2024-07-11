"use client";
import React, { useEffect, useState } from 'react';
import { usersconstant } from '@/utility/cityconstant';

const TransactionRightSection = ({addNewClick}) => {
const [dataValue, setDataValue] = useState([{
   Full_Name: '',
   Address: '',
   Age: '',
   Marital_Status: '',
   Occupation: '',
   Services: '',
}]);
const [totalNumber, setTotalNumber] = useState(0);
const [currentPage, setCurrentPage] = useState(1);//Track the current page
const recordPerPage = 7;//Number of data or id that will be shown
const lastIndex: number= currentPage * recordPerPage;//Getting the last index per page
const firstIndex: number = lastIndex - recordPerPage;//Getting the first index per page
const records: any = usersconstant.slice(firstIndex, lastIndex);//Get the data
const nPage: number = Math.ceil(usersconstant.length/recordPerPage)//Number of pages

const previousPage = () => {//Previous page
   if (currentPage !== 1){
      setCurrentPage(currentPage-1);
   };
};

const nextPage = () => {//Next page
   if (currentPage !== nPage){
      setCurrentPage(currentPage + 1);
   };
};

useEffect (() => {
   setTotalNumber(usersconstant.length + 1);
   setDataValue(records);
}, [currentPage])

return (
   <div className='w-[94%] h-[100%] min-h-[510px] mt-5 pt-5 px-[3%] ml-[3%] bg-white flex flex-col shadow-[0_0_1px_2.9px_rgba(0,0,0,0.03)] rounded-[10px] relative'>
      <div className='flex flex-row items-center w-[100%] h-10%] justify-between py-[1.5%] px-[2%] pb-[20px]'>
         <div className='flex flex-row items-center justify-center w-[20%]'>
            <input className='bg-[#d9d9d9] w-[15px] h-[15px] opacity-70 rounded-[5px] mr-4' type="checkbox" />
            <h1 className='font-semibold text-[20px] text-black mr-2'>List of Data</h1>
         </div>
         <div className='flex flex-row justify-between h-[35px] w-[270px]'>
            <button className='flex flex-row items-center justify-center font-medium text-[15px] rounded-[10px] px-[10px] border border-[#000000] opacity-25 py-[20px] cursor-pointer'>
               <img className='w-[15 px] h-[25px] opacity-50 mr-1' src="/icon/outline.svg" /> Filter
            </button>
            <button className='flex flex-row items-center justify-center font-medium text-[15px] text-white rounded-[10px] px-[10px] bg-[#303079] py-[20px] cursor-pointer'>
               Import
            </button>
            <button onClick={addNewClick} className='flex flex-row items-center justify-center font-medium text-[15px] text-white bg-[#ec7965] rounded-[10px] px-[10px] py-[20px] cursor-pointer'>
               <img className='w-[15px] h-[15px] mr-1' src="/icon/addWhite.svg" /> Add New
            </button>
         </div>
      </div>
      <div className="overflow-x-autom">
         <table className="w-full table-auto">
            <thead>
            <tr className="bg-[#F2F2F2] text-black font-semibold text-[15px] leading-normal">
               <th className="py-3 pl-[65px] px-6 text-left font-medium">Full Name</th>
               <th className="py-3 px-6 text-left font-medium">Address</th>
               <th className="py-3 px-6 text-left font-medium">Age</th>
               <th className="py-3 px-6 text-left font-medium">Marital Status</th>
               <th className="py-3 px-6 text-left font-medium">Tricycle Driver</th>
               <th className="py-3 px-6 text-left font-medium">Medical Assistance</th>
            </tr>
            </thead>
            <tbody className="font-normal text-[15px] text-black">
            {dataValue.map((user, index) => (
               <tr key={index} className="border-b">
                  <td className="text-left whitespace-nowrap flex items-center py-3 px-6 pl-[35px]">
                  <input className='bg-[#d9d9d9] mr-2 w-[15px] h-[15px] opacity-70 rounded-[5px]' type="checkbox" />
                  {user.Full_Name}</td>
                  <td className="py-3 px-6 text-left">{user.Address}</td>
                  <td className="py-3 px-6 text-left">{user.Age}</td>
                  <td className="py-3 px-6 text-left">{user.Marital_Status}</td>
                  <td className="py-3 px-6 text-left">{user.Occupation}</td>
                  <td className="py-3 px-6 text-left">{user.Services}</td>
               </tr>
            ))}
            </tbody>
         </table>
      </div>
      <div className='w-[100px] flex justify-center items-center mt-1 absolute bottom-[10px] left-[45%] '>
         <div className='flex flex-row justify-center items-center'>
            <p className='font-normal text-[11px] text-black'>{firstIndex + 1}-{lastIndex} of {totalNumber}</p>
            <img onClick={previousPage} className='ml-1 w-3 h-3' src="/icon/lessthan.svg"/>
            <img onClick={nextPage} className='w-3 h-3 ml-2' src="/icon/greaterthan.svg"/>
         </div>
      </div>
   </div>


);
};

export default TransactionRightSection;
