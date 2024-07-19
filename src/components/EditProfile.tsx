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
            <div className={`w-[557px] h-[100vh] bg-white flex flex-col absolute right-0 top-0 bottom-0 transition1  overflow-y-auto z-10`}>
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
                        <p className='font-normal text-[14px] absolute top-[33%] left-[10px] border-r pr-2 text-[#0000001a]'>+63</p>
                        <input className='w-[240px] h-[40px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] pl-[52px] placeholder:text-[#0000001a]' type="text" placeholder='0000000000'/>
                     </div>
                  </div>
               </div>
               <div className='flex flex-row w-[28%] justify-between h-[40px] ml-[68%] mt-[50%]'>
                  <button onClick={() => setEditProfile(false)} className='w-[73px] h-[44px] rounded-[10px] bg-[#E7E7E7] font-medium text-xs text-white'>Cancel</button>
                  <button className='w-[73px] h-[44px] rounded-[10px] bg-[#303079] font-medium text-xs text-white'>Add</button>
               </div>
            </div>
         </div>}
      </>
   )
}

export default EditProfile