'use client';
import { useState, useEffect} from 'react'

const addUserModal = ({addNew, addNewClick}) => {
   const [assignNo, setAssignNo] = useState(false); //To toggle the assigning role of the employee when you click No
   const [type, setType] =useState('Type');//It`s the initial state in the dropdown menun that you can choose between employee and politician. this can also be changed
   const [typeOpen, setTypeOpen] = useState(false);//It toggle the choices in Type. This will show Employee and POlitician dropdown
   const [toggleYes, setToggleYes] = useState(false);//It will toggle the Yes button in question assigning new role.It will shot input to assign new role.
   const [selectRole, setSelectRole] = useState(false);//It will toggle the dropdown button to input new role.
   const [addNewRole, setAddNewRole] = useState(false);//It will show an input box the you can add the new role
   const [addRole, setAddRole] = useState(false);//It will toggle a box that you can input the new role
   const [newRole, setNewRole] =useState(false);//This will submit the new role
   const [typePolitician, setTypePolitician] = useState(false);//If you choose politician in type. It will toggle another information about Politician
   const [serviceChoices, setServiceChoices] = useState<any[]>([]);//The array of services that available 
   const [deleteDecision, setDeleteDecision] = useState(false);//For deleting the new role in decision in Frame 17
   const [roles, setRoles] = useState<any[]>([]);//The new role will be stored in this array
   const [typeRoles, setTypeRoles]= useState('');//Storage of new role other than superadmin, admin and secretary
   const [visibleChoices, setVisibleChoices] = useState(false);//This will show the new role
   const [newAddedRole, setNewAddedRole] = useState('Select a role');//This help to appear the value of new role

   const clickPolitician = () =>{//This will trigger components that ned when you select politician
      setTypePolitician(!typePolitician);
      setAssignNo(false);
   }

   const clickChoices = (type: string) =>{//Choice for employee or politician
      setType(type);
      setTypeOpen(!typeOpen);
   } 

   const submitNewRole = (role: string) => {//Submit new role that will be choose between superadmin, admin and secretary
      setNewAddedRole(role);
      setTypeRoles(role);
      setSelectRole(false);
   }

   const clickType = () => {
      setTypeOpen(!typeOpen)
   }

   const handleClick= () => {//Handle toggle the need too be closed
      setAssignNo(!assignNo);
      setTypePolitician(false);
      setToggleYes(false);
      setAddNewRole(false);
   };
   const handleChoice= () => {
      setVisibleChoices(!visibleChoices);
   };

   const selectedChoices = (choice: string) => {//Add Services to the list in politician
      if (!serviceChoices.includes(serviceChoices)){
         setServiceChoices([...serviceChoices, choice]);
         if(!visibleChoices){
            handleChoice();
            setVisibleChoices(true);
         }
      }
   };

   useEffect(() => {
      if(!addNew){
         setType('Type');
         setAssignNo(false);
         setTypePolitician(false);
         setServiceChoices([]);
         setVisibleChoices(false);
         setType('Type');
         setNewAddedRole('Select a role');
      };
   }, [addNew]);

   useEffect(() => {
      if(serviceChoices.length=== 0){
         setVisibleChoices(false);
      }
   },[serviceChoices]);

   const handleClickNewRole = (role: string) => {//Add new roles
      if (!roles.includes(roles)){
         setRoles([...roles, role]);
      }
   };
   const removeNewRole = (role: string) =>{//Remove roles in employee side
      setRoles(roles.filter(item => item !== role));
      setDeleteDecision(!deleteDecision);
   };

   const removeChoice = (choice: string) => {//Remove service choice in politician side
      setServiceChoices(serviceChoices.filter(item => item !== choice))
   }

return (
   <section>
   {addNew &&
      <div>
         <div style={{opacity: addNew ? 1 : 0, maxHeight: addNew ? '100vh' : 0}} onClick={addNewClick} className='absolute top-0 right-0 bottom-0 left-0 bg-[#0000004d]'>
         </div>
         <div className='w-[557px] h-[100vh] bg-white flex flex-col justify-between absolute right-0 top-0 bottom-0 overflow-auto'>
            <div>
               <div className='flex flex-row justify-between px-[5%] w-full'>
                  <div className='flex flex-col'>
                     <h3 className='font-medium text-[15px] mt-[30px]'>User Registartion Form</h3>
                     <p className='font-normal text-[13px] opacity-50 text-black mt-1'>Please fill up the followinf Information</p>
                  </div>
                  <div className='w-[40%] pl-[50px] pt-[30px] relative'> 
                     <button 
                     onClick={clickType} id='Type'  className='py-[6px] text-[#0000001a] font-normal text-[15px] relative border-[#0000001a] border-[1px] rounded-[10px] w-[150px] pl-[5px] pr-[10px] text-left'>
                        {type} <img className='w-[24px] h-[24px] absolute top-[8px] right-[3px] opacity-10' src="/icon/dropdown.svg"/>
                     </button>
                     {typeOpen && <div  className='w-[150px] h-[80px] border-radius bg-white flex flex-col absolute shadow-[0_4px_4px_0_rgba(0,0,0,0.03)]'>
                        <button id='Employee' onClick={() => {clickChoices("Employee"); handleClick();}} className='w-full h-[40px] flex items-center pl-[10px] font-normal text-[15px] hover:bg-[#303079] cursor-pointer hover:text-white'>Employee</button>
                        <button onClick={() => {clickChoices("Politician"); clickPolitician();}} id='Politician' className='w-full h-[40px] flex items-center pl-[10px] font-normal text-[15px] hover:bg-[#303079] cursor-pointer border-radius hover:text-white'>Politician</button>
                     </div>}
                  </div>
               </div>
               <div className='flex flex-row mt-[13px]'>
                  <div className='w-[45%] flex flex-col ml-[5%] '>
                     <p className='font-normal text-[13px] opacity-50 text-black'>First Name</p>
                     <input className='w-[240px] h-[35px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] px-[17px] placeholder-[#0000001a]' type="text" placeholder='Juan' />
                  </div>
                  <div className='w-[45%] flex flex-col ml-[2%] '>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Middle Name</p>
                     <input className='w-[240px] h-[35px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] px-[17px] placeholder-[#0000001a]' type="text" placeholder='Pablo'/>
                  </div>
               </div>
               <div className='flex flex-row mt-[13px]'>
                  <div className='w-[45%] flex flex-col ml-[5%] '>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Last Name</p>
                     <input className='w-[240px] h-[35px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] px-[17px] placeholder-[#0000001a]' type="text" placeholder='Dela Cruz'/>
                  </div>
                  <div className='w-[45%] flex flex-col ml-[2%] justify-end'>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Email Address</p>
                     <input className='w-[240px] h-[35px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] px-[17px] placeholder-[#0000001a]' type="text" placeholder='example@gmail.com'/>
                  </div>
               </div>
               <div className='flex flex-row mt-[13px]'>
                  <div className='w-[45%] flex flex-col ml-[5%] justify-end'>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Home Address</p>
                     <input className='w-[240px] h-[35px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] px-[17px] placeholder-[#0000001a]' type="text" placeholder='Metro Manila, Philippines'/>
                  </div>
                  <div className='w-[45%] flex flex-col ml-[2%] justify-end'>
                     <p className='font-normal text-[13px] opacity-50 text-black'>Mobile Number</p>
                     <div className='relative'>
                        <p className='font-normal text-[14px] absolute top-[13px] left-[10px] border-r pr-2 text-[#0000001a]'>+63</p>
                        <input className='w-[240px] h-[35px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] pl-[52px] placeholder-[#0000001a]' type="text" placeholder='0000000000'/>
                     </div>
                  </div>
               </div>
               {typePolitician && <div className='w-[45%] flex flex-col ml-[5%] justify-end mt-[13px]'>
               <p className='font-normal text-[13px] opacity-50 text-black'>EVR No.</p>
               <input className='w-[240px] h-[35px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] px-[17px] placeholder-[#0000001a]' type="text" placeholder='0000-000-000'/>
            </div>}
            {assignNo && <div className='flex flex-col'>
            <div className='flex flex-row items-center pl-[30px] mt-4'>
               <img className='w-5 h-5' src="/icon/questionmark.svg"/>
               <p className='font-normal text-[14px] font ml-1'>Do you wish to assign a role to this new user?</p>
               <button onClick={handleClick} className='bg-[#D9D9D9] w-[40px] h-[32px] rounded-[5px] text-white font-normal text-[13px] ml-4 cursor-pointer'>No</button>
               <button onClick={() => {setToggleYes(!toggleYes); setAddNewRole(false);}} className='bg-[#303079] transition duration-300 ease-in-out w-[40px] h-[32px] rounded-[5px] text-white font-normal text-[12px] ml-2 cursor-pointer'>Yes</button>
            </div>
            {toggleYes && <div className='flex flex-col w-full h-[20%] mt-3 pl-[30px] pr-[20px]'>
               <p className='font-normal text-[14px] opacity-50'>If yes, please select a role from the available options. If the desired role is not listed, you can create a new role for them.</p>
               <div className='flex flex-row items-center mt-2'>
                  <div className='relative'>
                     <input onClick={() => setSelectRole(!selectRole)} className='w-[240px] h-[40px] transition duration-300 ease-in-out rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] cursor-pointer text pl-[15px] font-normal text-[14px]' type="text" placeholder={newAddedRole ? newAddedRole : 'Select a role'}/>
                     <img onClick={() => setSelectRole(!selectRole)} className='absolute w-[24px] h-[24px] top-[12px] right-[10px]' src="/icon/dropdown1.svg" />
                     {selectRole && <div className='w-[100%] absolute flex flex-col rounded-[10px] items-start bg-white shadow-[0_1px_2.9px_0_rgba(0,0,0,0.25)]'>
                        <button onClick={() => submitNewRole('Superadmin')} className='font-normal text-[14px] pl-[10px] py-2'>Superadmin</button>
                        <button onClick={() => submitNewRole('Admin')} className='font-normal text-[14px] pl-[10px] py-2'>Admin</button>
                        <button onClick={() => submitNewRole('Secretary')} className='font-normal text-[14px] pl-[10px] py-2'>Secretary</button>
                     </div>}
                  </div>
                  <button onClick={() => {setAddNewRole(!addNewRole); setToggleYes(false);}} className='font-semibold text-[14px] text-[#23b2ff] pl-3 transition duration-300 ease-in-out cursor-pointer'>Add new role...</button>
               </div>
            </div>}
               {addNewRole && <div className='flex flex-col w-full h-[20%] mt-3 pl-[60px] pr-[50px]'>
                     <h3 className='font-medium text-[18px]'>Roles</h3>
                     <p className='font-normal text-[14px] opacity-50 mt-1'>These role descriptions outline the core responsibilities and duties</p>
                     <div className='flex flex-row items-center'>
                        <button className='mt-4 pl-3 pr-7 rounded-full py-1 bg-[#303079] font-medium text-[14px] text-white relative'>Superadmin <img className='w-5 h-5 absolute top-[5px] right-[5px]' src="/icon/close.svg"/></button>
                        <button className='mt-4 ml-2 pl-3 pr-7 rounded-full py-1 bg-[#303079] font-medium text-[14px] text-white relative'>Admin <img className='w-5 h-5 absolute top-[5px] right-[5px]' src="/icon/close.svg"/></button>
                        <button className='mt-4 ml-2 pl-3 pr-7 rounded-full py-1 bg-[#303079] font-medium text-[14px] text-white relative'>Secretary<img className='w-5 h-5 absolute top-[5px] right-[5px]' src="/icon/close.svg"/></button>
                        <button onClick={() => setAddRole(!addRole)} className='mt-4 ml-4 px-1 py-1 rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center'><img src="/icon/addblue.svg"/></button>
                     </div>
                     {addRole && <div className='flex flex-row mt-2'>
                        <input value={typeRoles} onChange={(e) => setTypeRoles(e.target.value)} className='border border-[#303079] focus:border-[#303079] py-1 h-[29px] w-[140px] rounded-full font-medium text-[14px] text-black pl-2 mt-2 relative' type="text" /> 
                        <button onClick={() => {handleClickNewRole(typeRoles); setNewRole(!newRole); setAddRole(false);}} className='ml-2 px-1 py-1 rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center'><img src="/icon/checkblue.svg"/></button>
                     </div>}
                     {newRole && <div className='grid grid-rows-[45px_45px] grid-cols-[130px_130px_130px] justify-between gap-[5px] items-center'>
                        {
                        roles.map((role, index) => (
                              <button key={index} className='mt-2 pl-3 pr-7 py-1 h-[30px] rounded-full bg-[#303079] font-medium text-[14px] text-white relative'>{role}<img onClick={() => setDeleteDecision(!deleteDecision)} key={index} className='w-5 h-5 absolute top-[5px] right-[5px]' src="/icon/close.svg"/></button>
                        ))
                        }
                     </div>}                  
               </div>}
            </div>}
            {typePolitician && <div className='w-[90%] border-t-[1px] border-[#0000001a] ml-[5%] h-[30%] mt-6 pt-5'>
               <h2 className='font-normal text-[15px] w-[10%]  border-l-[5px] border-[#303079] pl-[10px]'>Services</h2>
               <p className='w-full pl-[15px] font-normal text-[13px] text-black opacity-50'>
                  Please choose the services you provide from the following options, and feel free to add or specify any that are not listed.
               </p>
               <p className='pl-[15px] text-[12px] text-black opacity-50 mt-3'>
                  Suggestion
               </p>
               <div className='flex flex-row justify-between mt-2'> 
                  <button onClick={() => selectedChoices('Medical Assistance')} className='px-[5px] text-[#303079] py-[3px] border-[#303079] border-[1px] rounded-full font-normal text-[12px] transition duration-300 ease-in-out hover:bg-[#303079] hover:text-white'>Medical Assistance</button>
                  <button onClick={() => selectedChoices('Scholarship')} className='px-[5px] text-[#303079] py-[3px] border-[#303079] border-[1px] rounded-full font-normal text-[12px] transition duration-300 ease-in-out hover:bg-[#303079] hover:text-white'>Scholarship</button>
                  <button onClick={() => selectedChoices('Financial assistance')} className='px-[5px] text-[#303079] py-[3px] border-[#303079] border-[1px] rounded-full font-normal text-[12px] transition duration-300 ease-in-out hover:bg-[#303079] hover:text-white'>Financial Assistance</button>
                  <button onClick={() => selectedChoices('Legal Advice')} className='px-[5px] text-[#303079] py-[3px] border-[#303079] border-[1px] rounded-full font-normal text-[12px] transition duration-300 ease-in-out hover:bg-[#303079] hover:text-white'>Legal Advise</button>
                  <button className='font-medium text-[#303079] text-[12px]'>Add more...</button>
               </div>
               {visibleChoices && <div className='mt-3 pl-1'>
                  <p className='font-normal text-[12px] opacity-50 mb-[2px]'>List you added</p>
                  <div className='grid grid-rows-[27px_27px_27px] grid-cols-[140px_140px_140px] justify-between gap-3 p-[10px] w-full min-h-[100px] max-h-[500px] border-[1px] border-[#eeeeee] rounded-[10px]'>
                  {serviceChoices.map((choice, index) => (   
                     <button
                     key={index}
                     className='px-[4px] text-white bg-[#303179] py-[3px] pr-[20px] border-[1px] border-[#303079] rounded-full font-normal text-[12px] relative'>{choice}<img onClick={() => removeChoice(choice)} src="/icon/cancel.svg" alt="cancel" className='absolute w-[15px] h-[15px] top-[5px] right-[6px]'/></button> 
                  ))}
                  </div>
               </div>}
            </div>}
            </div>
            <div className='ml-[370px] mb-[15px] mt-[20px]'>
               <div className='flex flex-row justify-between w-[160px]'>
                  <button onClick={addNewClick} className='w-[73px] h-[42px] rounded-[10px] bg-[#e7e7e7] font-medium text-sm text-white cursor-pointer'>Cancel</button>
                  <button className='w-[73px] h-[42px] rounded-[10px] bg-[#303079] font-medium text-sm text-white cursor-pointer'>Add</button>
               </div>
            </div>
         </div>
         {deleteDecision && 
         <section className='absolute top-0 right-0 left-0 bottom-0 z-0'>
         <div className='flex justify-center items-center w-full h-full'>
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-[#0000001a]'>
            </div>
            <div className='w-[380px] h-[260px] bg-white rounded-[10px] z-10 flex flex-col justify-center items-center shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
               <img className='h-[92px] w-[92px]' src="/icon/deleteWarning.svg" alt="" />
               <p className='font-medium text-center text-[18px] text-black'>You’re going to delete this role. <br/>Are you sure?</p>
               <div className='mt-2'>
                  <button onClick={() => setDeleteDecision(!deleteDecision)} className='w-[123px] h-[60px] rounded-[10px] bg-[#F5C8C1] font-medium text-xl text-white cursor-pointer'>No</button>
               {
                  roles.map((role, index) => (
                  <button key={index} onClick={() => removeNewRole(role)} className='w-[123px] h-[60px] ml-4 rounded-[10px] bg-[#303179] font-medium text-xl text-white cursor-pointer'>Yes</button>
               ))}
            </div>
            </div>
         </div>
         </section>}
      </div>
   }
</section>
)
}
export default addUserModal
// import axios.instance from '@/api/axios.instance';
//Fetching the data in backend
// const [firstName, setFirstName] = useState('');//Storage for the first name
   // const [middleName, setMiddleName] = useState('');//Storage for the middle name
   // const [lastName, setLastName] = useState('');//Storage for the last name
   // const [lastId, setLastId] = useState(0);//To make the id in patter to previous pattern
   // const [dataValue, setDataValue]= useState({//Value that will be posted in the add user page
   //    id: null,
   //    Name: `${firstName} ${middleName} ${lastName}`,
   //    Email: ''
   // });

   // const firstNameChange = (e: string) => setFirstName(e.target.value);//Get the value of first name in the input
   // const secondNameChange = (e: string) => setMiddleName(e.target.value);//Get the value of middle name in the input
   // const lastNameChange = (e: string) => setLastName(e.target.value);//Get the value of last name in the input


   // useEffect(() => {
   //    const fetchPosts = async () => {
   //    try {
   //       const response = await axios.instance.get('/users');
   //       const users = response.data;
   //       if (users.length > 0) {
   //          const ID = Math.max(...users.map(user => user.id));
   //          setLastId(ID);
   //       }
   //    } catch (err) {
   //       if (err.response){
   //       console.log(err.response.data);
   //       console.log(err.response.status);
   //       console.log(err.response.headers);
   //       }else{
   //          console.log(`Error: ${err.message}`);
   //       } 
   //    }
   //    }
   //    fetchPosts();
   // }, [])

   // const handleSubmit = (event) => {//Submit new data to the json server
   //    event.preventDefault();
   //    const name = `${firstName} ${middleName} ${lastName}`
   //    const updatedValue ={...dataValue, Name: name, id: lastId + 1};
   //    axios.post(axios.instance, updatedValue)
   //    .then(res => {console.log(res.data);
   //       setLastId(lastId + 1);
   //       setFirstName('');
   //       setMiddleName('');
   //       setLastName('');
   //       setDataValue({Email: ''});
   //    })
   //    .catch(err => console.log(err))
   // };
