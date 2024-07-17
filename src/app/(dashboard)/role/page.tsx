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

  const [ totalRoleUser, setTotalRoleUser ] = useState<number>(0);
  const [ tableData, setTableData ] = useState< Array<tableDataType> >();
  useEffect(() => {
    axios.instance.get('/users/roles', axios.authorization)
    .then((response) => {
      setTotalRoleUser(response.data.total_users);
      setTableData(response.data.userRoles);
    })
  }, [])

  const [ pageIndex, setPageIndex ] = useState<number>(0);
  const pagination = (action) => {
    if (action == 'prev') {
      axios.instance.get('/users/roles', {
        params: {
          index: pageIndex - 20,
        },
      }, axios.authorization)
      .then((response) => {
        setTableData(response.data.userRoles);
        setPageIndex(pageIndex - 20);
      })
    }

    if (action == 'next') {
      axios.instance.get('/users/roles', {
        params: {
          index: pageIndex + 20,
        },
      }, axios.authorization)
      .then((response) => {
        setTableData(response.data.userRoles);
        setPageIndex(pageIndex + 20);
      })
    }
  }

  const [ addRole, setAddRole ] = useState<boolean>();
  const [ newRole, setNewRole ] = useState<string>();

  interface roleDataType {
    _id: string,
    role_type: string,
  }

  const [ role, setRole ] = useState< Array<roleDataType> >()
  useEffect(() => {
    axios.instance.get('/roles', axios.authorization)
    .then((response) => {
      setRole(response.data);
    })
  }, [])

  const handleNewRole = (event) => {
    const value = event.target.value;
    setNewRole(value);
  }

  const submitNewRole = () => {
    axios.instance.post('/roles', {
      role_type: newRole,
    })
    .then((response) => {
      if (response.data.success) {
        axios.instance.get('/roles', axios.authorization)
        .then((response) => {
          setRole(response.data);
        })
      };
    })
  }

  const confirm = (bool, id) => {
    if (bool) {
      axios.instance.delete('/roles', {
        data: {
          _id: id,
        }
      }, axios.authorization)
      .then((response) => {
        if (response.data.success) {
          axios.instance.get('/roles', axios.authorization)
          .then((response) => {
            setRole(response.data);
          })
        }
      })
    }
  }

  return (
    <Template>
      <div className="w-full h-20 flex justify-between items-center pl-14 pr-9 pt-4">
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
                role ? (
                  role.map((item, index) => (
                    <div key={index} className="w-fit flex gap-2 float-left mx-[2px] my-[3px] px-4 py-2 bg-guardsman-red rounded-[20px]">
                      <p className="text-white text-xs">{ item.role_type }</p>
                      <Alert
                        id={item._id}
                        button='/icons/cross.svg'
                        icon='/icons/warning.svg'
                        message={`You’re going to delete this role.\nAre you sure?`}
                        confirm={confirm}
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
                      value={ newRole }
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

      <div id='table' className="w-full absolute">
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
                          { pageIndex + index + 1 }
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

      <div className="w-full h-8 absolute bottom-0 flex items-center justify-center gap-3 rounded-b-[10px]">
        <p className="text-xs font-normal">
          {
            totalRoleUser ? (
              `${pageIndex + 1} - ${pageIndex + 20 > totalRoleUser ? totalRoleUser: pageIndex + 20} of ${totalRoleUser}`
              
            ): (
              '0 - 0 of 0'
            )
          }
        </p>
        <button onClick={() => pagination('prev')}
          disabled={!pageIndex ? true: false}  
        >
          <img src="/icons/prev.svg" alt=""
            className={`${!pageIndex ? 'opacity-50': ''} h-5`}
          />
        </button>
        <button onClick={() => pagination('next')}
          disabled={pageIndex + 20 > totalRoleUser ? true: false}   
        >
          <img src="/icons/next.svg" alt=""
            className={`${pageIndex + 20 > totalRoleUser ? 'opacity-50': ''} h-5`}
          />
        </button>
      </div>
    </Template>
  );
};

export default Role;
