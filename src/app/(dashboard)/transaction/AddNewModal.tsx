"use client";

import { useState } from "react";

const AddNewModal = ({addNew, setAddNew}) => {
   const [occupationOpen, setOccupationOpen] = useState(false);
   const [addressButton, setAddressButton] = useState(false);//Toggle service option
   const [serviceButton, setServiceButton] = useState(false);//TOggle services option

   const handleClick = () => {
      setOccupationOpen(false);
      setAddressButton(false);
      setServiceButton(false);
      setAddNew(false);
   }
  return (
    <section>
      {addNew && (
         <>
            <div onClick={handleClick} className={'absolute transition duration-300 ease-in-out top-0 right-0 bottom-0 left-0 bg-[#0000004d]'}>
            </div>
            <div className={`w-[557px] h-[100vh] bg-white flex flex-col absolute right-0 top-0 bottom-0 transition duration-300 ease-in-out ${addNew ? '' : 'hidden'}`}>
               <h3 className='font-medium text-[15px] mt-[30px] pl-[5%]'>Create New Data</h3>
               <p className='font-normal text-[13px] opacity-50 text-black mt-1 pl-[5%]'>Please fill up the following information</p>
               <div className='w-[100%] px-[0.5%]'>
               <div className='flex flex-row mt-[20px] w-[96%] justify-between'>
                  <div className=' flex flex-col ml-[5%] '>
                     <p className='font-normal text-[13px] opacity-50 text-black'>First Name</p>
                     <input className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] pl-[15px]' type="text" />
                  </div>
                  <div className='flex flex-col ml-[2%] '>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Middle Name</p>
                     <input className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] pl-[15px]' type="text" />
                  </div>
               </div>
               <div className='flex flex-row mt-[13px] w-[96%] justify-between'>
                  <div className='flex flex-col ml-[5%] '>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Last Name</p>
                     <input className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] pl-[15px]' type="text" />
                  </div>
                  <div className='flex flex-col ml-[2%] justify-end'>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Age</p>
                     <input className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] pl-[15px]' type="text" />
                  </div>
               </div>
               <div className='flex flex-row mt-[13px] w-[96%] relative'>
                  <div className='w-[100%] flex flex-col ml-[5%]'>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Address</p>
                     <div className='relative'>
                     <input className='w-[100%] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] font-normal text-[15px] pl-[15px] text' type="text" placeholder='Search...' />
                     <img onClick={() => setAddressButton(!addressButton)} className='absolute w-[24px] h-[24px] top-[12px] right-[10px] transition duration-300 ease-in-out' src="/icon/dropdown1.svg" />
                     </div>
                  </div>
                  {addressButton && (
                     <ul className={'w-[95%] h-[78px] absolute bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-br-[5px] rounded-bl-[5px] mx-[5%] flex items-center pl-[20px] top-[95%] z-10 '}>
                     <li>
                        <h3 className='font-semibold text-[13px] text-black'>West City Plaza</h3>
                        <p className='font-medium text-[13px] text-black opacity-50 mt-1'>West City Plaza, West Avenue, Quezon City, Metro Manila, Philippines</p>
                     </li>
                     </ul>
                  )}
               </div>
               <div className='flex flex-row mt-[13px] w-[96%] justify-between'>
                  <div className='flex flex-col ml-[5%] justify-end'>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Birthdate</p>
                     <input className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] font-normal text-[15px] pl-[15px] text' type="text" placeholder='MM/DD/YYYY' />
                  </div>
                  <div className='flex flex-col ml-[2%] justify-end relative'>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Marital Status</p>
                     <div className='relative'>
                        <input className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] text pl-[15px]' type="text" />
                        <img onClick={() => setOccupationOpen(!occupationOpen)} className='transition duration-300 ease-in-out absolute w-[24px] h-[24px] top-[12px] right-[10px]' src="/icon/dropdown1.svg" />
                     </div>
                     {occupationOpen && (
                     <ul
                        className={'w-[100%] absolute bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex flex-col top-[95%] z-10 rounded-br-[10px] rounded-bl-[10px] overflow-y-auto'}>
                        <li className="font-medium text-[13px] text-black py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">Single</li>
                        <li className="font-medium text-[13px] text-black py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">Married</li>
                        <li className="font-medium text-[13px] text-black py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">Widowed</li>
                        <li className="font-medium text-[13px] text-black py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">Seperate</li>
                     </ul>
                  )}
                  </div>
               </div>
               <div className='flex flex-row mt-[13px] w-[96%] justify-between'>
                  <div className='flex flex-col ml-[5%] '>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Occupation</p>
                     <input className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] text pl-[15px]' type="text" />
                  </div>
                  <div className='flex flex-col ml-[2%] justify-end relative'>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Services</p>
                     <div className='relative'>
                     <input className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] text pl-[15px]' type="text" />
                     <img onClick={() => setServiceButton(!serviceButton)} className='absolute w-[24px] h-[24px] top-[12px] right-[10px] transition duration-300 ease-in-out' src="/icon/dropdown1.svg" />
                     </div>
                     {serviceButton && (
                     <ul
                        className={'w-[100%] absolute bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex flex-col top-[95%] z-10 rounded-br-[10px] rounded-bl-[10px]'}>
                        <li className="font-medium text-[13px] text-black py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">Medical Assistance</li>
                        <li className="font-medium text-[13px] text-black py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">Legal Consultation</li>
                        <li className="font-medium text-[13px] text-black py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">Livelyhood</li>
                        <li className="font-medium text-[13px] text-black py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">Donation</li>
                        <li className="font-medium text-[13px] text-black py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">Scholarship</li>
                        <li className="font-medium text-[13px] text-black py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">Solicitation</li>
                     </ul>
                  )}
                  </div>
               </div>
               </div>
               <div className='flex flex-row bottom-[20px] right-[20px] fixed w-[160px] justify-between'>
                  <button onClick={() => setAddNew(false)} className='w-[73px] h-[42px] rounded-[10px] bg-[#ec7965] font-medium text-sm text-white cursor-pointer'>Cancel</button>
                  <button className='w-[73px] h-[42px] rounded-[10px] bg-[#303079] font-medium text-sm text-white cursor-pointer'>Add</button>
               </div>
            </div>
         </>
      )}
    </section>
  );
};

export default AddNewModal;
