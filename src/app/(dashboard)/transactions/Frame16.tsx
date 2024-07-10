"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Frame16 = ({ addNew, addNewClick, toggleAddressButton, toggleServiceButton, addressButton, serviceButton }) => {
const [lastId, setLastId] = useState(0);//This will monitor the id to be in sequene to previous id in json server
const [firstName, setFirstName] = useState('');//Storage for the first name
const [middleName, setMiddleName] = useState('');//Storage for the middle name
const [lastName, setLastName] = useState('');//Storage for the last name
const [dataValue, setDataValue] = useState({//To add data in the jsoon server
   id: null,
   Full_Name: '',
   Email: '',
   Address: '',
   Age: '',
   Birthday: '',
   Marital_Status: '',
   Occupation: '',
   Services: ''
});

useEffect(() => {//Get data to the json server
   axios.get('http://localhost:3500/users')
   .then((res) => {
      const users = res.data;
      if(users.length > 0 ){
         const Id = Math.max(...users.map(user => user.id));
         setLastId(Id);
      }
   })
   .catch((err) => console.log(err));
}, [])

const handleSubmit = (events) => {//Submit data to the json server
   events.preventDefault();
   const fullName = `${firstName} ${middleName} ${lastName}`
   const updatedValue ={...dataValue, Full_Name: fullName, id: lastId + 1};
   axios.post('http://localhost:3500/users', updatedValue)
   .then(res => {
      console.log(res.data);
      setLastId(lastId + 1);
      setFirstName('');
      setMiddleName('');
      setLastName('');
      setDataValue({
         id: null,
         Full_Name: '',
         Email: '',
         Address: '',
         Age: '',
         Birthday: '',
         Marital_Status: '',
         Occupation: '',
         Services: ''
      });
   })
}

  const firstNameChange = (e) => setFirstName(e.target.value);//Get the value of first name in the input
  const secondNameChange = (e) => setMiddleName(e.target.value);//Get the value of middle name in the input
  const lastNameChange = (e) => setLastName(e.target.value);//Get the value of last name in the input
  return (
    <section>
      {addNew && (
         <>
            <div onClick={addNewClick} className={'absolute transition duration-300 ease-in-out top-0 right-0 bottom-0 left-0 bg-[#0000004d]'}>
            </div>
            <div className={`w-[557px] h-[100vh] bg-white flex flex-col absolute right-0 top-0 bottom-0 rounded-[10px] transition duration-300 ease-in-out ${addNew ? '' : 'hidden'}`}>
               <h3 className='font-medium text-[15px] mt-[30px] pl-[5%]'>Create New Data</h3>
               <p className='font-normal text-[13px] opacity-50 text-black mt-1 pl-[5%]'>Please fill up the following information</p>
               <div className='w-[100%] px-[0.5%]'>
               <div className='flex flex-row mt-[20px] w-[96%] justify-between'>
                  <div className=' flex flex-col ml-[5%] '>
                     <p className='font-normal text-[13px] opacity-50 text-black'>First Name</p>
                     <input value={firstName} onChange={firstNameChange} className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] pl-[15px]' type="text" />
                  </div>
                  <div className='flex flex-col ml-[2%] '>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Middle Name</p>
                     <input value={middleName} onChange={secondNameChange} className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] pl-[15px]' type="text" />
                  </div>
               </div>
               <div className='flex flex-row mt-[13px] w-[96%] justify-between'>
                  <div className='flex flex-col ml-[5%] '>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Last Name</p>
                     <input value={lastName} onChange={lastNameChange} className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] pl-[15px]' type="text" />
                  </div>
                  <div className='flex flex-col ml-[2%] justify-end'>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Age</p>
                     <input value={dataValue.Age} onChange={(e) => setDataValue({...dataValue, Age: e.target.value})} className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] pl-[15px]' type="text" />
                  </div>
               </div>
               <div className='flex flex-row mt-[13px] w-[96%] relative'>
                  <div className='w-[100%] flex flex-col ml-[5%]'>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Address</p>
                     <div className='relative'>
                     <input value={dataValue.Address} onChange={(e) => setDataValue({...dataValue, Address: e.target.value})} onClick={toggleAddressButton} className='transition duration-300 ease-in-out w-[100%] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] font-normal text-[15px] pl-[15px] text cursor-pointer' type="text" placeholder='Search...' />
                     <img className='absolute w-[24px] h-[24px] top-[12px] right-[10px]' src="/icon/dropdown1.svg" />
                     </div>
                  </div>
                  {addressButton && (
                     <ul style={{opacity: addressButton ? 1 : 0, maxHeight: addressButton ? '500px' : '0',}} className={'w-[95%] h-[78px] absolute bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] radius1 mx-[5%] flex items-center pl-[20px] top-[95%] transition duration-300 ease-in-out z-10 '}>
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
                     <input value={dataValue.Birthday} onChange={(e) => setDataValue({...dataValue, Birthday: e.target.value})} className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] font-normal text-[15px] pl-[15px] text' type="text" placeholder='MM/DD/YYYY' />
                  </div>
                  <div className='flex flex-col ml-[2%] justify-end'>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Marital Status</p>
                     <input  value={dataValue.Marital_Status} onChange={(e) => setDataValue({...dataValue, Marital_Status: e.target.value})} className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] font-normal text-[15px] pl-[15px] text' type="text" />
                  </div>
               </div>
               <div className='flex flex-row mt-[13px] w-[96%] justify-between'>
                  <div className='flex flex-col ml-[5%] '>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Occupation</p>
                     <input value={dataValue.Occupation} onChange={(e) => setDataValue({...dataValue, Occupation: e.target.value})} className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] text pl-[15px]' type="text" />
                  </div>
                  <div className='flex flex-col ml-[2%] justify-end relative'>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Services</p>
                     <div className='relative'>
                     <input value={dataValue.Services} onChange={(e) => setDataValue({...dataValue, Services: e.target.value})} onClick={toggleServiceButton} className='w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] cursor-pointer text pl-[15px]' type="text" />
                     <img className='absolute w-[24px] h-[24px] top-[12px] right-[10px]' src="/icon/dropdown1.svg" />
                     </div>
                     {serviceButton && (
                     <ul
                        style={{opacity: serviceButton ? 1 : 0,maxHeight: serviceButton ? '500px' : '0',}} className={'w-[100%] h-[180px] absolute bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex flex-col top-[95%] z-10 radius overflow-y-auto'}>
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
               <button onClick={addNewClick} className='w-[73px] h-[42px] rounded-[10px] bg-[#ec7965] font-medium text-[15px] text-white cursor-pointer'>Cancel</button>
               <button onClick={handleSubmit} className='w-[73px] h-[42px] rounded-[10px] bg-[#303079] font-medium text-[15px] text-white cursor-pointer'>Add</button>
               </div>
            </div>
         </>
      )}
    </section>
  );
};

export default Frame16;
