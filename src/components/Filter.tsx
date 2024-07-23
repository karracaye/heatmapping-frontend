'use client';
import { useState } from "react";

const Filter = ({ data, entry }) => {
  const [ modal, setModal ] = useState<boolean>(false);
  
  return (
    <div className="w-fit relative z-10">
      <button onClick={ () => setModal(!modal) }
        className="flex items-center gap-2 border border-gray-400 text-gray-400 text-xs font-normal rounded-[10px] px-3 py-2"
      >
        <img src="/icons/filter.svg" alt="" 
          className="h-3 opacity-30"
        />
        <p>Filter</p>
      </button>

      <div className={`${ !modal ? 'invisible opacity-0' : '' } right-0 min-w-[150px] h-fit absolute top-12 flex flex-col bg-white rounded-b-[10px] overflow-hidden shadow-[0_2px_2px_2px_rgba(0,0,0,0.05)]`}>
        <button onClick={() => (entry('', 'None'), setModal(!modal))}
          className="cursor-default text-sm px-5 py-2 text-nowrap hover:bg-gray-200"
        >
          None
        </button>
        {
          data ? (
            data.map((item, index) => (
              <button key={index} onClick={() => (entry(item._id, item.service_name), setModal(!modal))}
                className="cursor-default text-sm px-5 py-2 text-nowrap hover:bg-gray-200"
              >
                { item.service_name }
              </button>
            ))
          ): ''
        }
      </div>
    </div>
  )
}

export default Filter;
