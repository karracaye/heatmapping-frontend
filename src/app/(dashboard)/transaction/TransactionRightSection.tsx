"use client";
import React, { useEffect, useState } from "react";
import { usersconstant } from "@/utility/cityconstant";
import ImportModal from "@/components/importModal";
import AddNewModal from "./AddNewModal";
import Template from "@/components/Template";
import axios from "@/lib/axios";

const TransactionRightSection = () => {

  const tableHead = [
    'Fullname',
    'Address',
    'Age',
    'Marital Status',
    'Occupation',
    'Services',
  ]

  interface tableDataType {
    _id: string,
    date: string,
    beneficiary: {
      _id: string,
      firstname: string,
      middle_name: string,
      lastname: string,
      age: number,
      bday: string,
      email: string,
      marital_status: string,
      occupation: string,
      address: {
        street: string,
        brgy: string,
        municipality: string,
        province: string,
        country: string,
      },
    },
    service: [
      {
        _id: string,
        service_name: string,
        politician: {
          _id: string,
          account_typeID: string,
          firstname: string,
          middle_name: string,
          lastname: string,
          username: string,
          email: string,
          password: string,
          status: string,
          EVR_No: string,
          home_address: [
            {
              _id: string,
              city: string,
              region: string,
              country: string,
            },
          ]
        },
      },
    ]
  }
  
  const [ tableData, setTableData ] = useState< Array<tableDataType> >();
  useEffect(() => {
    axios.instance.get('/beneficiaries-services')
    .then((response) => {
      setTableData(response.data);
      console.log(response.data);
    })
  }, [])

  const [totalNumber, setTotalNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); //Track the current page
  const recordPerPage = 7; //Number of data or id that will be shown
  const lastIndex: number = currentPage * recordPerPage; //Getting the last index per page
  const firstIndex: number = lastIndex - recordPerPage; //Getting the first index per page
  const records: any = usersconstant.slice(firstIndex, lastIndex); //Get the data
  const nPage: number = Math.ceil(usersconstant.length / recordPerPage); //Number of pages
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [addNew, setAddNew] = useState(false);//TOggle the add new section

  const previousPage = () => {
    //Previous page
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    //Next page
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setTotalNumber(usersconstant.length + 1);
    setTableData(records);
  }, [currentPage]);

  return (
    <Template>
      {/* <div className="w-[100%] h-[100%] grow pt-5 pl-[3%] pr-[2.5%]"> */}
        {/* <div className="relative max-h-[100%] min-h-[80vh] bg-white rounded-[10px] shadow-[0_0_1px_2.9px_rgba(0,0,0,0.03)]"> */}
          <div className="w-full h-20 flex justify-between items-center pl-14 pr-9 pt-4">
            <div className="flex flex-row items-center justify-center w-[20%]">
              <input
                className="bg-[#d9d9d9] w-[15px] h-[15px] opacity-70 rounded-[5px] mr-4"
                type="checkbox"
              />
              <h1 className="font-semibold text-[20px] text-black mr-2">
                List of Data
              </h1>
            </div>
  
            <div className="flex flex-row justify-between h-[35px] gap-2">
              <button className="flex flex-row items-center justify-center font-medium text-xs rounded-[10px] px-[15px] border border-[#000000] opacity-25 py-[20px] cursor-pointer">
                <img
                  className="w-[15 px] h-[25px] opacity-50 mr-1"
                  src="/icon/outline.svg"
                />{" "}
                Filter
              </button>
  
              <button onClick={() => setImportModalOpen(true)} className="flex flex-row items-center justify-center font-medium text-xs text-white rounded-[10px] px-[15px] bg-[#303079] py-[20px] cursor-pointer transition duration-300 ease-in-out">
                Import
              </button>
  
              <button
                onClick={() => setAddNew(true)}
                className="flex flex-row items-center justify-center font-medium text-xs text-white bg-[#ec7965] rounded-[10px] px-[15px] py-[20px] cursor-pointer transition duration-300 ease-in-out"
              >
                <img className="w-[15px] h-[15px] mr-1" src="/icon/addWhite.svg" />{" "}
                Add New
              </button>
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
                        <th key={index} className={`${item == 'Age' ? 'w-10': ''}`}>{ item }</th>
                      ))
                    }
                  </tr>
                </thead>
    
                <tbody>
                  {
                    tableData?.map((item, index) => (
                      <tr key={index} className="h-12 border-b border-[#F2F2F2]">
                        <td className="w-12 text-center">
                          <input type="checkbox" />
                        </td>
                        <td>{ `${item?.beneficiary?.firstname} ${item?.beneficiary?.middle_name} ${item?.beneficiary?.lastname}` }</td>
                        <td>{ `${item?.beneficiary?.address?.street}, ${item?.beneficiary?.address?.brgy}, ${item?.beneficiary?.address?.municipality}, ${item?.beneficiary?.address?.province}, ${item?.beneficiary?.address?.country}` }</td>
                        <td>{ item?.beneficiary?.age }</td>
                        <td>{ item?.beneficiary?.marital_status }</td>
                        <td>{ item?.beneficiary?.occupation }</td>
                        {/* <td>{ item?.service[0]?.service_name }</td> */}
                        <td>Medical Assistance</td> {/* temporary */}
                      </tr>
                    ))
                  }
                  {/* {tableData.map((user, index) => (
                    <tr key={index} className="border-b">
                      <td className="text-left whitespace-nowrap flex items-center py-3 px-6 pl-[35px]">
                        <input
                          className="bg-[#d9d9d9] mr-2 w-[15px] h-[15px] opacity-70 rounded-[5px]"
                          type="checkbox"
                        />
                        {user.Full_Name}
                      </td>
                      <td className="py-3 px-6 text-left">{user.Address}</td>
                      <td className="py-3 px-6 text-left">{user.Age}</td>
                      <td className="py-3 px-6 text-left">{user.Marital_Status}</td>
                      <td className="py-3 px-6 text-left">{user.Occupation}</td>
                      <td className="py-3 px-6 text-left">{user.Services}</td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>
  
          <div className="w-full h-8 absolute bottom-0 flex items-center justify-center gap-3 rounded-b-[10px]">
            <p className="text-xs font-normal">
              {/* {
                totalRoleUser ? (
                  `${pageIndex + 1} - ${pageIndex + 20 > totalRoleUser ? totalRoleUser: pageIndex + 20} of ${totalRoleUser}`
                  
                ): (
                  '0 - 0 of 0'
                )
              } */}
              0 - 0 of 0
            </p>
            <button 
              // onClick={() => pagination('prev')}
              // disabled={!pageIndex ? true: false}  
            >
              <img src="/icons/prev.svg" alt=""
                className="h-5"
                // className={`${!pageIndex ? 'opacity-50': ''} h-5`}
              />
            </button>
            <button 
              // onClick={() => pagination('next')}
              // disabled={pageIndex + 20 > totalRoleUser ? true: false}   
            >
              <img src="/icons/next.svg" alt=""
                className="h-5"
                // className={`${pageIndex + 20 > totalRoleUser ? 'opacity-50': ''} h-5`}
              />
            </button>
          </div>
        {/* </div> */}
        
        <AddNewModal
          addNew={addNew}
          setAddNew={setAddNew}
        />
  
        {
          importModalOpen && (
            <ImportModal 
              setImportModalOpen={setImportModalOpen}
            />
          )
        }
      {/* </div> */}
    </Template>
  );
};

export default TransactionRightSection;
