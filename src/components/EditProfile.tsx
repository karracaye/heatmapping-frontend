import React from 'react'
type EditProfileProps = {
   editProfile: boolean,
   setEditProfile: any
}
const EditProfile: React.FC<EditProfileProps> = ({editProfile, setEditProfile}) => {
   return (
      <>
         {editProfile && <div>
            <div onClick={() => setEditProfile(false)} className={'absolute transition top-0 right-0 bottom-0 left-0 bg-[#0000004d] z-10'}>
            </div>
            <div className={`w-[557px] h-[100vh] bg-white flex flex-col absolute right-0 top-0 bottom-0 rounded-[10px] transition1  overflow-y-auto z-10`}>
               <h3 className='font-medium text-[15px] mt-[30px] pl-[5%]'>Edit your account</h3>
               <p className='font-normal text-[13px] opacity-50 text-black mt-1 pl-[5%]'>Please fill up the following information</p>
               <div className='flex flex-row mt-[15px]'>
                     <div className='w-[45%] flex flex-col ml-[5%] '>
                        <p className='font-normal text-[12px] opacity-50 text-black'>First Name</p>
                        <input className='w-[240px] h-[40px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] pl-[17px] placeholder:text-[#0000001a]' type="text" placeholder='Juan' />
                     </div>
                     <div className='w-[45%] flex flex-col ml-[2%] '>
                        <p className='font-normal text-[12px] opacity-50 text-black'>Middle Name</p>
                        <input className='w-[240px] h-[40px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] pl-[17px] placeholder:text-[#0000001a]' type="text" placeholder='Pablo'/>
                     </div>
               </div>
               <div className='flex flex-row mt-[15px]'>
                     <div className='w-[45%] flex flex-col ml-[5%] '>
                        <p className='font-normal text-[12px] opacity-50 text-black'>Last Name</p>
                        <input className='w-[240px] h-[40px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] pl-[17px] placeholder:text-[#0000001a]' type="text" placeholder='Dela Cruz'/>
                     </div>
                     <div className='w-[45%] flex flex-col ml-[2%] justify-end'>
                        <p className='font-normal text-[12px] opacity-50 text-black'>Email Address</p>
                        <input className='w-[240px] h-[40px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] pl-[17px] placeholder:text-[#0000001a]' type="text" placeholder='example@gmail.com'/>
                     </div>
               </div>
               <div className='flex flex-row mt-[15px]'>
                  <div className='w-[45%] flex flex-col ml-[5%] justify-end'>
                     <p className='font-normal text-[12px] opacity-50 text-black'>Home Address</p>
                     <input className='w-[240px] h-[40px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] pl-[17px] placeholder:text-[#0000001a]' type="text" placeholder='Metro Manila, Philippines'/>
                  </div>
                  <div className='w-[45%] flex flex-col ml-[2%] justify-end'>
                     <p className='font-normal text-[12px] opacity-50 text-black'>Mobile Number</p>
                     <div className='relative'>
                        <p className='font-normal text-[14px] absolute top-[18px] left-[10px] border-r pr-2 text-[#0000001a]'>+63</p>
                        <input className='w-[240px] h-[40px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] pl-[52px] placeholder:text-[#0000001a]' type="text" placeholder='0000000000'/>
                     </div>
                  </div>
               </div>
               <div className='flex flex-row w-full px-[25px] items-center justify-between mt-7'>
                  <h3 className='font-normal text-[13px] opacity-50 mr-1'>Weekly Reports:</h3>
                  <div className='w-[276px] flex flex-row items-center h-6 rounded-[10px] border-[1px] border-[#0000001a]'>
                     <button className='font-normal text-[13px] text-white bg-[#303079] rounded-l-[10px] px-[10px] border-[1px] border-[#303079]'>File name</button>
                     <input className='font-normal text-[13px] w-[180px] pl-[20px] placeholder:text-[#000000]' type="text" placeholder='Report.docx'/>
                  </div>
                  <button className='w-[80px] h-[35px] text-white rounded-[5px] bg-[#303079] ml-3'>Import</button>
               </div>
               <div className='flex flex-row w-full px-[25px] items-center justify-between mt-7'>
                  <h3 className='font-normal text-[13px] opacity-50 mr-[42px]'>Meetings:</h3>
                  <input className='w-[296px] h-[35px] font-normal text-[13px] rounded-[10px] pl-[15px] border-[1px] border-[#0000001a] placeholder:text-[#000000]' type="text" placeholder='Meeting title'/>
                  <button className='w-[80px] h-[35px] text-white rounded-[5px] bg-[#303079] ml-3'>Add</button>
               </div>
               <div className='flex flex-row w-full px-[25px] items-center justify-between mt-7'>
                  <h3 className='font-normal text-[13px] opacity-50 mr-[55px]'>Leaves:</h3>
                  <input className='w-[296px] h-[35px] font-normal text-[13px] rounded-[10px] pl-[15px] border-[1px] border-[#0000001a] placeholder:text-[#000000]' type="text" placeholder='Annual'/>
                  <button className='w-[80px] h-[35px] text-white rounded-[5px] bg-[#303079] ml-3'>Add</button>
               </div>
               <div className='flex flex-row w-full px-[25px] mt-7'>
                  <h3 className='font-normal text-[13px] opacity-50 mr-[20px] mt-3'>Notes:</h3>
                  <div className='border-[1px] border-[#0000001a] w-[450px] h-[100px] rounded-[10px]'>
                  <input className='w-full font-normal text-[13px]  pl-[15px] text-[#0000001a] text-start mt-3' type="text" placeholder='Add note...'/>
                  </div>
               </div>
               <div className='flex flex-col w-full px-[25px] mt-3'>
                  <h3 className='font-normal text-[13px] opacity-50 mr-[20px] mt-3'>Password</h3>
                  <input className='border-[1px] border-[#0000001a] w-[300px] h-[70px] text-white rounded-[10px]'/>
               </div>
               <div className='flex flex-row w-[160px] justify-between h-[40px] ml-[68%] mt-5 mb-[20px]'>
                  <button className='w-[73px] h-[44px] rounded-[10px] bg-[#E7E7E7] font-medium text-[15px] text-white'>Cancel</button>
                  <button className='w-[73px] h-[44px] rounded-[10px] bg-[#303079] font-medium text-[15px] text-white'>Add</button>
               </div>
            </div>
         </div>}
      </>
   )
}

export default EditProfile