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
      <div className="flex flex-grow p-4 w-full h-full">
         <div className="grid grid-cols-3 gap-4 mt-5 w-full h-full">
            <div className="grid grid-cols-5 col-span-2 justify-between bg-white shadow rounded-xl p-4">
               <div className=' py-2 px-4 col-span-3'>
                  <div>
                  <p className='text-xl'> Lipa, Batangas Philippines</p>
                  <p className='text-xs pt-1 opacity-50'> 72 third level subdivisions</p>
                  </div>
                  <img className='w-[400px] h-[400px]' src="../icon/map.svg" />
               </div>
               <div className='pt-2 px-10 col-span-2 flex flex-col justify-between'>
                  <div className=''>
                     <p className='text-3xl'> Wednesday</p>
                     <p className='text-sm opacity-50'> July 20, 2024</p>
                  </div>
                  <div className='mb-5 py-10'>
                     <p className='text-sm opacity-50'> Total Location</p>
                     <p className='text-3xl'>San Guillermo</p>
                     <p className='text-sm pt-4 opacity-50'> Population</p>
                     <p className='text-3xl'>5,394</p>
                  </div>
               </div>
            </div>
            <div className="p-6 grid col-span-1 bg-white shadow rounded-xl w-full">
               <div>
                  <div className='flex justify-between'>
                     <div>
                        <button onClick={() => {setServices(''); setItems(cityconstant.city);}}  className='font-normal text-[20px]'>Lipa Barangays </button>
                        <p className='text-[17px] font-medium absolute top-[210px]'>{services}</p>
                     </div>
                     <button onClick={() => setOpenFilter(!openFilter)} className='flex flex-row justify-center items-center w-[76px] h-[30px] rounded-[5px] border border-black opacity-25 font-medium text-[13px] mr-1'><img className='w-[13px] h-5 mr-2' src="/icon/filter.svg"/> Filter</button>
                     {openFilter && (<div className='absolute flex flex-col bg-white rounded-bl-[10px] rounded-br-[10px] shadow-[0_2px_1px_0_rgba(0,0,0,0.25)] right-[60px] top-[195px] border'>
                        <button onClick={() => {handleServiceClick('Medical Assistance'); setItems(cityconstant.Medical);}} className='px-4 py-2 font-medium text-[13px] hover:bg-[#D9D9D9]'>Medical Assistance</button>
                        <button onClick={() => {handleServiceClick('Legal Consultation'); setItems(cityconstant.Consultation);}}  className='px-4 py-2 font-medium text-[13px] hover:bg-[#D9D9D9]'>Legal Consultation</button>
                        <button onClick={() => {handleServiceClick('Livelyhood'); setItems(cityconstant.Livelyhood);}}  className='px-4 py-2 font-medium text-[13px] hover:bg-[#D9D9D9]'>Livelyhood</button>
                        <button onClick={() => {handleServiceClick('Donation'); setItems(cityconstant.Donation);}}  className='px-4 py-2 font-medium text-[13px] hover:bg-[#D9D9D9]'>Donation</button>
                        <button onClick={() => {handleServiceClick('Scholarship');  setItems(cityconstant.Scholarship);}}  className='px-4 py-2 font-medium text-[13px] hover:bg-[#D9D9D9]'>Scholarship</button>
                        <button onClick={() => {handleServiceClick('Medical Solicitation'); setItems(cityconstant.Solicitation);}}  className='px-4 py-2 font-medium text-[13px] rounded-br-[10px] rounded-bl-[10px] hover:bg-[#D9D9D9]'>Solicitation</button>
                     </div>)}
                  </div>
                  <div className='flex flex-row pt-[60px] justify-between p-4'>
                     <div className='flex flex-col w-[45%]'>
                     {
                           items.map((data: any, index: number) => (
                              index <10 &&(
                              <p key={index} className='font-normal text-[15px] mt-[2px]'><span className='mr-2'>{data.id}</span>{data.place}</p>
                           )))
                     }
                     </div>
                     <div className='flex flex-col'> 
                        {
                           items.map((data: any, index: number) => (
                              index >= 10 &&(
                              <p key={index} className='font-normal text-[15px] mt-[2px]'><span className='mr-2'>{data.id}</span>{data.place}</p>
                           )))
                        }
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-white shadow rounded-xl p-4"></div>
            <div className="bg-white shadow rounded-xl  p-4"></div>
         </div>
      </div>
      
      
   )
}

export default DashBoardRIghtSection