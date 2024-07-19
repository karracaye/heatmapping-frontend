'use client';
import { useState } from "react";
import Template from "@/components/Template";

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
          datatype: 'List of  data.csv',
          purpose: 'Import',
          time: '06-26-2024 9:04 am',
        },
      ],
    }
  ];

  const [approved, setApproved] = useState(false);
  const [declined, setDeclined] = useState(false);

  const handleApprove = () => {
    setApproved(true); 
    setDeclined(false); 
  };

  const handleDecline = () => {
    setDeclined(true); 
    setApproved(false); 
  };

  return (
    <Template>
      <div className="w-full h-20 flex justify-between gap-5 items-center p-5 pt-4">
        <div className="flex gap-5">
          <input className="" type="checkbox" />
          <p className="text-base font-semibold">List of Requests</p>
        </div>
        <div className="gap-2 flex items-center w-[40%] justify-between">
          <div className="gap-2 flex">
            <button
              className="text-[#fdfdff] bg-[#008000] rounded-md p-3 py-1"
              onClick={handleApprove}
            >
              {approved ? 'Approved' : 'Approve'}
            </button>
            <button
              className="text-[#fdfdff] bg-[#FF0000] rounded-md p-3 py-1"
              onClick={handleDecline}
            >
              {declined ? 'Declined' : 'Decline'}
            </button>
          </div>
          <button className="flex items-center border gap-2 p-2 rounded-md opacity-30" type="button">
            <img src="/icons/filter.svg" alt="filter icon" />
            Filter
          </button>
        </div>
      </div>
      <div className="w-full border">
        <div className="overflow-y-auto h-full rounded-b-[10px]">
          <table className="w-full text-sm">
            <thead className="sticky top-0">
              <tr className="h-12 bg-[#F2F2F2] font-semibold text-left">
                <th></th>
                {
                  table[0].head.map((item, index) => (
                    <th key={index}>{item}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                table[0].body.map((item, index) => (
                  <tr key={index} className="h-12 border-b border-[#F2F2F2]">
                    <td className="w-12 p-5">
                      <input type="checkbox" />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.datatype}</td>
                    <td>{item.purpose}</td>
                    <td className="text-gray-400">
                      {item.time}
                    </td>
                    <td className="h-12 flex gap-5 items-center font-semibold">
                      <img src="/icons/ei_check.svg" alt="check icon" />
                      <button
                        className="text-[#fdfdff] bg-[#008000] rounded-md p-3 py-1"
                        onClick={handleApprove}
                      >
                        {approved ? 'Approved' : 'Approve'}
                      </button>
                      <img src="/icons/marketeq_cross-circle.svg" alt="cross icon" />
                      <button
                        className="text-[#CF0000]"
                        onClick={handleDecline}
                      >
                        {declined ? 'Declined' : 'Decline'}
                      </button>
                      <button className="text-[#0500E8]">
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
    </Template>
  );
};

export default Approvals;


  