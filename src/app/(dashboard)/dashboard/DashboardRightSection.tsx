"use client";
import React, { useEffect, useState } from 'react'
import cityconstant from '@/utility/cityconstant';
const DashBoardRIghtSection = () => {
   const [items, setItems] = useState([]);
   const [openFilter, setOpenFilter] = useState(false);//Will toggle the choices in the filter button
   const [services, setServices] = useState('');//Will get the value, when you click the button in services
   const handleServiceClick = (service: string) => {
      setServices(service);
      setOpenFilter(false);
   };

useEffect(() => {
   setItems(cityconstant.city);
}, [cityconstant.city])
   return (
      <div className='flex flex-col pl px-[3%]'>
         <div className='grid grid-cols-custom grid-rows-customrow gap-4 mt-5'>
            <div className='rounded-[10px] shadow-[0_1px_2.9px_0_rgba(0,0,0,0.25)] min-h-[330px] max-h-[100%] bg-white flex flex-row'>
               <div className='w-[73%]'>
                  <div className='ml-[43px] mt-[15px] relative'>
                     <p className='font-medium text-[18px] leading-[25.2px]'>Lipa, Batangas Philippines</p>
                     <p className='font text-[12px]'>72 third level subdivisions</p>
                     <img className='w-[23px] mt-[150px] ml-[-4%]' src="../icon/group12.svg"/>
                     <img className='w-[422px] h-[] absolute top-0 pl-[11%]' src="../icon/map.svg"/>
                  </div>
               </div>
               <div className='flex flex-col w-[22%]'>
                  <div className='mr-[47px] mt-[15px] flex flex-col'>
                     <p className='font-medium text-[25px]'>Wednesday</p>
                     <p className='font-normal opacity-50 text-[14px]'>July 3, 2024</p>
                  </div>
                  <div className='mr-[62px] mt-[110px] flex flex-col w-[150px]'>
                     <p className='font-normal text-[14px] opacity-50'>Top Location</p>
                     <p className='font-medium text-[20px]'>San Guillermo</p>
                  </div>
                  <div className='mr-[125px] mt-[10px] flex flex-col'>
                     <p className='font-normal text-[14px] opacity-50'>Population</p>
                     <p className='font-medium text-[25px]'>5,394</p>
               </div>
               </div>
            </div>
            <div className='rounded-[10px] shadow-[0_1px_2.9px_0_rgba(0,0,0,0.25)] min-h-[330px] max-h-[100%] flex flex-col bg-white'>
               <div className='flex flex-row items-center justify-between border-3 h-[18px] mt-4 ml-[40px] mr-5 relative'>
                  <div className='flex flex-col relative mt-4'>
                     <button onClick={() => {setServices(''); setItems(cityconstant.city);}}  className='font-normal text-[20px] pb-[20px]'>Lipa Barangays </button>
                     <p className='text-[15px] absolute bottom-0'>{services}</p>
                  </div>
                  <button onClick={() => setOpenFilter(!openFilter)} className='flex flex-row justify-center items-center w-[76px] h-[30px] rounded-[10px] border border-black opacity-25 font-medium text-[13px] mr-1'><img className='w-[13px] h-5 mr-2' src="/icon/filter.svg"/> Filter</button>
                  {openFilter && (<div className='flex flex-col bg-white rounded-bl-[10px] rounded-br-[10px] shadow-[0_2px_1px_0_rgba(0,0,0,0.25)] absolute right-0 top-[25px]'>
                     <button onClick={() => {handleServiceClick('Medical Assistance'); setItems(cityconstant.Medical);}} className='px-4 py-2 font-medium text-[13px] hover:bg-[#D9D9D9]'>Medical Assistance</button>
                     <button onClick={() => {handleServiceClick('Legal Consultation'); setItems(cityconstant.Consultation);}}  className='px-4 py-2 font-medium text-[13px] hover:bg-[#D9D9D9]'>Legal Consultation</button>
                     <button onClick={() => {handleServiceClick('Livelyhood'); setItems(cityconstant.Livelyhood);}}  className='px-4 py-2 font-medium text-[13px] hover:bg-[#D9D9D9]'>Livelyhood</button>
                     <button onClick={() => {handleServiceClick('Donation'); setItems(cityconstant.Donation);}}  className='px-4 py-2 font-medium text-[13px] hover:bg-[#D9D9D9]'>Donation</button>
                     <button onClick={() => {handleServiceClick('Scholarship');  setItems(cityconstant.Scholarship);}}  className='px-4 py-2 font-medium text-[13px] hover:bg-[#D9D9D9]'>Scholarship</button>
                     <button onClick={() => {handleServiceClick('Medical Solicitation'); setItems(cityconstant.Solicitation);}}  className='px-4 py-2 font-medium text-[13px] rounded-br-[10px] rounded-bl-[10px] hover:bg-[#D9D9D9]'>Solicitation</button>
                  </div>)}
               </div>
               <div className='flex flex-row w-[100%] mt-2 h-[100%] px-[10%] py-[4%] pt-6 justify-between items-start'>
                  <div className='flex flex-col w-[45%]'>
                  {
                        items.map((data: any, index: number) => (
                           index <10 &&(
                           <p key={index} className='font-normal text-[15px] mt-[2px]'><span className='mr-2'>{data.id}</span>{data.place}</p>
                        )))
                  }
                  </div>
                  <div className='flex flex-col w-[40%]'> 
                  {
                     items.map((data: any, index: number) => (
                        index >= 10 &&(
                        <p key={index} className='font-normal text-[15px] mt-[2px]'><span className='mr-2'>{data.id}</span>{data.place}</p>
                     )))
                  }
                  </div>
               </div>
            </div>
            <div className='rounded-[10px] shadow-[0_1px_2.9px_0_rgba(0,0,0,0.25)] bg-white'>
                  
            </div>
            <div className='rounded-[10px] shadow-[0_1px_2.9px_0_rgba(0,0,0,0.25)] bg-white'>
            </div>
         </div>
      </div>
   )
}

export default DashBoardRIghtSection