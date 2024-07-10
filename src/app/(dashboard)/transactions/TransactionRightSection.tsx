"use client";
import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';

const TransactionRightSection = ({addNewClick, dataValue}) => {
const [totalNumber, setTotalNumber] = useState(0);
const [currentPage, setCurrentPage] = useState(1);//Track the current page
const recordPerPage = 7;//Number of data or id that will be shown
const lastIndex= currentPage * recordPerPage;//Getting the last index per page
const firstIndex = lastIndex - recordPerPage;//Getting the first index per page
const records = dataValue.slice(firstIndex, lastIndex);//Get the data
const nPage = Math.ceil(dataValue.length/recordPerPage)//Number of pages
const data = React.useMemo(() => records, [dataValue]);//The dataValue is the calculate value and the data is the dependencies. If there is no changes in dependedncies the value will return is the value in calculatevalue.
const columns = React.useMemo(//The column is the calculate value and the data is the dependencies. If there is no changes in dependedncies the value will return is the value in calculatevalue.
   () => [
      {
      Header: "Full Name",
      accessor: "Full_Name",
      keyName: "Full_Name",
      Cell: ({cell}) => (
         <div className='flex flex-row items-center'>
            <input 
            className='bg-[#d9d9d9] w-[15px] mt-1 mr-3 h-[15px] opacity-70 rounded-[5px]'
            type="checkbox"
            checked={!!checkedRows[cell.row.index]}
            onChange={() => handleCheckboxChange(cell.row.index)}/>
         {cell.value}
         </div>
      ),
      customNameClass: 'Name',
      customNameHeader: 'NameHeader'
      },
      {
      Header: "Address",
      accessor: "Address",
      customAddressClass: 'Address',
      customAddressHeader: 'AddressHeader'
      },
      {
      Header: "Age",
      accessor: "Age",
      customAgeClass: 'Age',
      customAgeHeader: 'AgeHeader'
      },
      {
      Header: "Marital Status",
      accessor: "Marital_Status",
      customMaritalClass: 'Marital_Status',
      customMaritalHeader: 'MaritalHeader'
      },
      {
      Header: "Occupation",
      accessor: "Occupation",
      customOccupationClass: 'Occupation',
      customOccupationHeader: 'OccupationHeader'
      },
      {
      Header: "Services",
      accessor: "Services",
      customServicesClass: 'Services',
      customServicesHeader: 'ServicesHeader'
      },
   ],
   []
);

const previousPage = () => {//Previous page
   if (currentPage !== 1){
      setCurrentPage(currentPage-1);
   };
};

const nextPage = () => {//Next page
   if (currentPage !== nPage){
      setCurrentPage(currentPage + 1);
   };
};

useEffect (() => {
   setTotalNumber(dataValue.length + 1)
})

const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

const [checkedRows, setCheckedRows] = useState({});//To check right index

const handleCheckboxChange = (rowIndex) => {//It will check if the that row is on check
   setCheckedRows((prevState) => ({
      ...prevState,
      [rowIndex]: !prevState[rowIndex],
   }));
};

return (
   <div className='w-[100%] h-[100%] pt-5 px-[3%]'>
      <div className='flex flex-row justify-between mt-[-40px] h-[35px] w-[270px] ml-[76%]'>
         <button className='flex flex-row items-center justify-center font-medium text-[15px] rounded-[10px] px-[10px] border border-[#000000] opacity-25 py-[20px] cursor-pointer'>
            <img className='w-[15 px] h-[25px] opacity-50 mr-1' src="/icon/outline.svg" /> Filter
         </button>
         <button className='flex flex-row items-center justify-center font-medium text-[15px] text-white rounded-[10px] px-[10px] bg-[#303079] py-[20px] cursor-pointer'>
            Import
         </button>
         <button onClick={addNewClick} className='flex flex-row items-center justify-center font-medium text-[15px] text-white bg-[#ec7965] rounded-[10px] px-[10px] py-[20px] cursor-pointer'>
            <img className='w-[15px] h-[15px] mr-1' src="/icon/addWhite.svg" /> Add New
         </button>
      </div>
      <div className='flex flex-col shadow-[0_0_1px_2.9px_rgba(0,0,0,0.03)] bg-white h-[500px] w-[100%] rounded-[10px] mt-5 relative'>
         <div className='flex flex-row items-center justify-center w-[20%] mt-[35px] ml-2 mb-4'>
            <input className='bg-[#d9d9d9] w-[15px] h-[15px] opacity-70 rounded-[5px] mr-4' type="checkbox" />
            <h1 className='font-semibold text-[20px] text-black mr-2'>List of Data</h1>
         </div>
         <div >
            <table className='h-full w-full pb-1' {...getTableProps()}>
                  <thead >
                     {headerGroups.map((headerGroup, headerGroupIndex) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroupIndex}>
                           {headerGroup.headers.map((column, columnIndex) => {
                           const { key, ...rest } = column.getHeaderProps();
                           return (
                              <th
                                 key={columnIndex}
                                 className={`text-left py-3 font-semibold text-[15px] bg-[#F2F2F2]
                                    ${column.customNameHeader ? column.customNameHeader : '' ||
                                    column.customAddressHeader ? column.customAddressHeader : '' ||
                                    column.customAgeHeader ? column.customAgeHeader : '' ||
                                    column.customMaritalHeader ? column.customMaritalHeader : '' ||
                                    column.customOccupationHeader ? column.customOccupationHeader : '' ||
                                    column.customServicesHeader ? column.customServicesHeader : ''
                                 }`}
                                 {...rest}
                              >
                                 {column.render("Header")}
                              </th>
                           );
                           })}
                     </tr>
                  ))}
                  </thead>
               </table>
         </div>
         <div className='px-[4%]'>
            <table  className='h-full w-full pb-1'>
               <tbody {...getTableBodyProps()}>
                  {rows.map((row, rowIndex) => {
                     prepareRow(row);
                     return (
                        <tr  {...row.getRowProps()} key={rowIndex}>
                        {row.cells.map((cell, cellIndex) => {
                           const { key, ...rest } = cell.getCellProps();
                           return (
                              <td
                              key={cellIndex}
                              className={`py-3 font-normal text-[15px] border-b-[1px] border-[#0000001a]
                                 ${cell.column.customNameClass ? cell.column.customNameClass : '' ||
                                    cell.column.customAddressClass ? cell.column.customAddressClass : '' ||
                                    cell.column.customAgeClass ? cell.column.customAgeClass : '' ||
                                    cell.column.customMaritalClass ? cell.column.customMaritalClass : '' ||
                                    cell.column.customOccupationClass ? cell.column.customOccupationClass : '' ||
                                    cell.column.customServicesClass ? cell.column.customServicesClass : ''
                                 }`}
                              {...rest}
                              >
                              {cell.render("Cell")}
                              </td>
                           );
                           })}
                           </tr>
                        );
                     })}
               </tbody>
            </table>
         </div>
         <div className='w-[100px] flex justify-center items-center mt-1 absolute bottom-[10px] left-[45%] '>
            <div className='flex flex-row justify-center items-center'>
               <p className='font-normal text-[11px] text-black'>{firstIndex + 1}-{lastIndex} of {totalNumber}</p>
               <img onClick={previousPage} className='ml-1 w-3 h-3' src="/icon/lessthan.svg"/>
               <img onClick={nextPage} className='w-3 h-3 ml-2' src="/icon/greaterthan.svg"/>
            </div>
         </div>
      </div>
      <div className='rounded-[10px] shadow1 bg-white'>     
      </div>
      <div className='rounded-[10px] shadow1 bg-white'>
      </div>
   </div>
);
};

export default TransactionRightSection;
