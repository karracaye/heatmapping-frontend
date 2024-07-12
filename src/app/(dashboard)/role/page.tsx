'use client';
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Popup from "@/components/PopUp";
import Template from "@/components/Template";
import Alert from "@/components/Alert";

const Role = () => {
  const tableHead = [
    'Name',
    'Role',
    'Email Address',
    'Action',
  ]

  interface tableDataType {
    name: string,
    role: string,
    email: string,
  }

  const [ tableData, setTableData ] = useState< Array<tableDataType> >()
  useEffect(() => {
    // axios.instance.get('/users/roles', axios.authorization)
    // .then((response) => {
    //   console.log(response.data);
    //   setTableData(response.data);
    // })

    axios.instance.get('/users/roles')
    .then((response) => {
      setTableData(response.data);
    })
  }, [])

  const [ role, setRole ] = useState([
    {
      role_type: '',
    }
  ]);
  useEffect(() => {
    // axios.instance.get('/roles', axios.authorization)
    // .then((response) => {
    //   setRole(response.data);
    // })

    axios.instance.get('/roles')
    .then((response) => {
      setRole(response.data);
    })
  }, [])

  const [ addRole, setAddRole ] = useState<boolean>();
  const [ updateRole, setUpdateRole ] = useState<boolean>();
  const [ newRole, setNewRole ] = useState({
    role_type: '',
  });

  const handleNewRole = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setNewRole((prevState) => ({
      ...prevState,
      [ name ]: value,
    }));
  }

  const submitNewRole = () => {
    console.log(newRole);
    axios.instance.post('/roles', {
      role_type: newRole.role_type,
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.success) setUpdateRole(true);
    })
  }

  return (
    <Template role='Superadmin'>
      <div className="w-full h-20 absolute flex justify-between items-center pl-14 pr-9 pt-4 z-10">
        <p className="text-base font-semibold">Roles and Permission</p>
        <div className="w-[30%] flex gap-3">
          <Popup name='Roles'>
            <div className="px-5 pt-5">
              <p className="text-lg font-medium">Roles</p>
              <p className="text-xs font-normal text-gray-500">
                These role descriptions outline the core responsibilities and duties
              </p>
            </div>

            <div className="h-[114px] m-4 overflow-auto">
              {
                role[0].role_type || updateRole ? (
                  role.map((item, index) => (
                    <div key={index} className="w-fit float-left mx-[2px] my-[3px] px-4 py-2 bg-guardsman-red rounded-[20px]">
                      <p className="text-white text-xs">{ item.role_type }</p>
                      <Alert
                        button='/icons/cross.svg'
                        icon='/icons/warning.svg'
                        message={ `You’re going to delete this role.\nAre you sure?` }
                      />
                    </div>
                  ))
                ): ''
              }
              {
                addRole ? (
                  <>
                    <input type="text"
                      className="float-left text-xs border-[1px] border-guardsman-red rounded-[20px] mx-[2px] my-[3px] py-2 px-4 outline-none"
                      name='role_type'
                      value={ newRole.role_type }
                      onChange={ handleNewRole }
                    />

                    <button onClick={ () => ( setAddRole(!addRole), submitNewRole() ) }
                      className="h-[32px] float-left flex justify-center items-center rounded-full aspect-square mx-[2px] my-[3px] shadow-[0_2px_2px_2px_rgba(0,0,0,0.1)]"
                    >
                      <img src="/buttons/check.svg" alt="" />
                    </button>
                  </>
                ) : (
                  <button onClick={ () => setAddRole(true) }
                    className="h-[32px] float-left flex justify-center items-center rounded-full aspect-square mx-[2px] my-[3px] shadow-[0_2px_2px_2px_rgba(0,0,0,0.1)]"
                  >
                    <img src="/buttons/add.svg" alt="" />
                  </button>
                )
              }
            </div> 
          </Popup>

          <div className="w-full flex items-center relative">
            <img src="/icons/magnifying-glass.svg" alt=""
              className="absolute px-2 opacity-30"
            />
            <input type="search" name="" id="" placeholder="Who are you looking for?"
              className="w-full h-10 pl-8 pr-2 border border-gray-400 outline-none font-normal rounded-[10px] text-sm"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute top-0 pt-[80px]">
        <div className="overflow-y-auto h-full rounded-b-[10px]">
          <table className="w-full text-sm">
            <thead className="sticky top-0">
              <tr className="h-12 bg-[#F2F2F2] font-semibold text-left">
                <th></th>
                {
                  tableHead.map((item, index) => (
                    <th key={index}>{ item }</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                tableData ? (
                  tableData.map((item, index) => (
                    <tr key={index} className="h-12 border-b border-[#F2F2F2]">
                      <td className="w-12 p-3">
                        <p className="bg-[#D9D9D9] text-white flex items-center justify-center rounded-full aspect-square">
                          { index + 1 }
                        </p>
                      </td>
                      <td>{ item.name }</td>
                      <td>{ item.role }</td>
                      <td className="text-gray-400">
                        { item.email }
                      </td>
                      <td className="h-12 flex gap-3 items-center font-semibold">
                        <button
                          className="text-[#0500E8]"
                        >
                          View
                        </button>
                        <button
                          className="text-[#DAA318]"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                ): ''
              }
            </tbody>
          </table>
        </div>
      </div>
    </Template>
  );
};

export default Role;
