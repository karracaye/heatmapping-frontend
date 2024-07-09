'use client';
import { useState } from "react";
// import PopUp from "@/components/modals/pop-up";
// import Verification from "@/components/modals/verification";

const Approvals = () => {
    const table = [
        {
            head: [
                'Requested by',
                'Data Types',
                'Purpose',
                'Timestamp',
                'Action',
                
            ],
            body: [
                {
                    
                    name: 'Juan Dela Cruz',
                    datatype: 'Heat Map File',
                    purpose: 'Save',
                    time: '06-26-2024 9:04 am',
                    
                },
            ],
        }
    ]



    const [ newRole, setNewRole ] = useState(false);
    const [ confirm, setConfirm ] = useState(false);


  return (
    <>
      <div className="h-20 flex gap-5 items-center pl-14 pr-9 pt-4">
        <input type="checkbox" />
        <p className="text-base font-semibold">List of Requests</p>
        <div className="w-[30%] flex gap-3 z-10">

        </div>
      </div>

      <div className="w-full h-full absolute top-0 pt-[80px]">
        <div className="overflow-y-auto h-full rounded-b-[10px]">
          <table className="w-full text-sm">
            <thead className="sticky top-0">
              <tr className="h-12 bg-[#F2F2F2] font-semibold text-left">
                <th></th>
                  {
                     table[0].head.map((item) => (
                      <th>{ item }</th>
                     ))
                  }
              </tr>
            </thead>
            <tbody>
              {
                table[0].body.map((item) => (
                  <tr className="h-12 border-b border-[#F2F2F2]">
                    <td className="w-12 p-5">
                      <input type= "checkbox"/>
                                                
                                               
                                            
                    </td>
                      <td>{ item.name }</td>
                        <td>{ item.datatype }</td>
                          <td>{ item.purpose }</td>
                            <td className="text-gray-400">
                              { item.time }
                            </td>
                              <td className="h-12 flex gap-3 items-center font-semibold">
                                <button
                                  className="text-[#fdfdff] border border-green-500 bg-green-500 rounded-sm"
                                            >
                                    Approve
                                </button>
                                  <button
                                    className="text-[#fd4444]"
                                            >
                                      Decline
                                  </button>
                                    <button
                                      className="text-[#4450fd]"
                                            >
                                        View
                                    </button>
                              </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>  
  );
};
  
export default Approvals;
  