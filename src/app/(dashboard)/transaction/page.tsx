"use client";
import { useEffect, useState } from "react";
import Template from "@/components/Template";
import axios from "@/lib/axios";


import ImportModal from "@/components/importModal";
import AddNewModal from "./AddNewModal";


const Transaction = () => {
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
    fullname: string,
    age: number,
    marital_status: string,
    occupation: string,
    service: string,
    address: {
      street: string,
      brgy: string,
      municipality: string,
      province: string,
      country: string,
    },
  }
  
  const [ totalBeneficiaries, setTotalBeneficiaries ] = useState<number>(0);
  const [ tableData, setTableData ] = useState< Array<tableDataType> >();
  useEffect(() => {
    axios.instance.get('/beneficiaries-services')
    .then((response) => {
      setTotalBeneficiaries(response.data.total_beneficiaries);
      setTableData(response.data.result);

    })
  }, [])

  const [ pageIndex, setPageIndex ] = useState<number>(0);
  const pagination = (action) => {
    if (action == 'prev') {
      axios.instance.get('/beneficiaries-services', {
        params: {
          index: pageIndex - 20,
        },
      }, axios.authorization)
      .then((response) => {
        setTableData(response.data.result);
        setPageIndex(pageIndex - 20);
      })
    }

    if (action == 'next') {
      axios.instance.get('/beneficiaries-services', {
        params: {
          index: pageIndex + 20,
        },
      }, axios.authorization)
      .then((response) => {
        setTableData(response.data.result);
        setPageIndex(pageIndex + 20);
      })
    }
  }

  const [importModalOpen, setImportModalOpen] = useState(false);
  const [addNew, setAddNew] = useState(false);//TOggle the add new section

  return (
    <Template>
      <div className="w-full h-20 flex justify-between items-center pl-14 pr-9 pt-4">
        <div className="flex gap-5">
          <input type="checkbox" />
          <p className="text-base font-semibold">List of Data</p>
        </div>

        <div className="w-[30%] flex gap-3">


          <div className="flex flex-row justify-between h-[35px] gap-2">
            <button className="flex flex-row items-center justify-center font-medium text-xs rounded-[10px] px-[15px] border border-[#000000] opacity-25 py-[20px] cursor-pointer">
              <img src="/icon/outline.svg"
                className="w-[15 px] h-[25px] opacity-50 mr-1"
              />
              Filter
            </button>

            <button onClick={() => setImportModalOpen(true)} 
              className="flex flex-row items-center justify-center font-medium text-xs text-white rounded-[10px] px-[15px] bg-[#303079] py-[20px] cursor-pointer transition duration-300 ease-in-out"
            >
              Import
            </button>

            <button onClick={() => setAddNew(true)}
              className="flex flex-row items-center justify-center font-medium text-xs text-white bg-[#ec7965] rounded-[10px] px-[15px] py-[20px] cursor-pointer transition duration-300 ease-in-out"
            >
              <img src="/icon/addWhite.svg"
                className="w-[15px] h-[15px] mr-1"
              />
              Add New
            </button>
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
                    <th key={index} 
                      className={`${item == 'Address' ? 'w-2/6': ''}`}
                    >{ item }</th>
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
                    <td>{ item.fullname }</td>
                    <td>{ `${item.address?.street}, ${item.address?.brgy}, ${item.address?.municipality}, ${item.address?.province}, ${item.address?.country}` }</td>
                    <td>{ item.age }</td>
                    <td>{ item.marital_status }</td>
                    <td>{ item.occupation }</td>
                    <td>{ item.service }</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
  
      <div className="w-full h-8 absolute bottom-0 flex items-center justify-center gap-3 rounded-b-[10px]">
        <p className="text-xs font-normal">
          {
            totalBeneficiaries ? (
              `${pageIndex + 1} - ${pageIndex + 20 > totalBeneficiaries ? totalBeneficiaries: pageIndex + 20} of ${totalBeneficiaries}`
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
          disabled={pageIndex + 20 > totalBeneficiaries ? true: false}   
        >
          <img src="/icons/next.svg" alt=""
            className={`${pageIndex + 20 > totalBeneficiaries ? 'opacity-50': ''} h-5`}
          />
        </button>
      </div>
        

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


    </Template>
  )
}

export default Transaction;
