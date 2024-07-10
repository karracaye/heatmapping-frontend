"use client";
import React, { useState, useMemo, useEffect } from 'react';
import axiosInstance from '../../../api/axiosInstance'
import { useTable } from 'react-table';

const UserRightSection = ({addNewClick, Data}) => {
const [dataValue, setDataValue] = useState([]);
useEffect(() => {
  const fetchData = async () => {//This will help to compile the full name of the user
    try {
      const response = await axiosInstance.get('/users');
      const processedData = response.data.map(item => ({
        fullname: `${item.firstname} ${item.middle_name ? item.middle_name + ' ' : ''}${item.lastname}`.trim(),//This will access by the accessor
        email: item.email,//This will access by the accessor
        status: item.status//This will access by the accessor
      }));
      setDataValue(processedData);
    } catch (error) {
      console.error(error);
    }
   };
   fetchData();
}, []);
const Columns = [//This will target the table column. Ths custom class will target there style
  {
    Header: 'Name',
    accessor: `fullname`,
    customNameClass: 'Name',
  },
  {
    Header: 'Email Address',
    accessor: "email",
    customEmailClass: 'Email'
  },{
    Header: 'Status',
    Cell: ({row}) => { 
        const [status, setStatus] = useState(row.original.status);//Storage of the status state
        useEffect(() =>{
          setStatus(row.original.status === 'active' ? true : false);//Will set the value of Status to the data value in json server
        }, [row.original.Status]);
        return(
          <div className='w-[100px] flex items-center'>
              <div className={`w-[9px] h-[9px] mr-2 shadow-[0_2px_1px_0_rgba(0,0,0,0.25)] rounded-full ${status ? 'bg-[#ffff00]' : 'bg-[#ff0000]'}`}></div>
              <p>{status ? 'Active' : 'Deactive'}</p>
          </div>
        )
    }
  },
  {
    Header: 'Action',
    customHeaderClass: 'action-header',
    Cell: ({ row }) => (
        <div className='w-[100px] flex justify-between pr-[5px] items-center'>
          <button className='font-semibold text-[15px] text-[#0500e8]'>View</button>
          <button className='font-semibold text-[15px] text-[#daa318]'>Edit</button>
        </div>
    )
  }
];


const columns = useMemo(() => Columns, [Data]);//The column is the calculate value and the data is the dependencies. If there is no changes in dependedncies the value will return is the value in calculatevalue.
const data = useMemo(() => dataValue, [dataValue]);

const tableInstance = useTable({
  columns: columns,
  data: data
});

const {//This will provides essential props in react table library
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
} = tableInstance


return (
  <div className="w-[100%] h-[100%] pt-5 px-[3%]">
        <div className="h-[78vh] relative bg-white rounded-[10px] shadow-[0_0_1px_2.9px_rgba(0,0,0,0.03)]">
            <div className="h-25 flex justify-between items-center pl-14 pr-9 pt-5 pb-2">
                  <p className="text-base font-semibold">Users</p>
                  <div className="w-[37%] h-[54px] flex flex-row items-center justify-between">
                        <div>
                              <button onClick={addNewClick} className='bg-[#303079] rounded-[10px] font-medium text-[13px] text-white h-[40px] px-4 cursor-pointer hover:opacity-10 duration-300 transition'>Add New User</button>
                        </div>
                        <div className='relative '>
                              <input className='border-[#0000001a] border-[1px] h-[40px] w-[240px] rounded-[10px] font-normal text-[12px] texts pl-[30px]' type="text" placeholder='Who are you looking for?'/>
                              <img className='absolute h-[20px] w-[20px] opacity-10 top-[10px] left-2' src="/icon/glass.svg" alt="" />
                        </div>
                  </div>
            </div>
            <div className='overflow-auto'>
              <table className='w-full' {...getTableProps()}>
              <thead>
                  {headerGroups.map((headerGroup, headerGroupIndex) =>{
                    const headerGroupProps = headerGroup.getHeaderGroupProps();
                    const {key: headerGroupKey, ...restHeaderGroupProps} =  headerGroupProps;
                        return (
                        <tr key={headerGroupKey}{...restHeaderGroupProps}>
                          {headerGroup.headers.map((column: any, columnIndex: any) =>{
                              const columnProps = column.getHeaderProps();
                              const {key: columnKey, ...restColumnProps} = columnProps;
                              return (
                                <th  key={columnKey}
                                {...restColumnProps}
                                className={`sticky font-semibold text-[15px] text-black text-left bg-[#f2f2f2] pl-[5%] py-[12px] ${column.customHeaderClass ? column.customHeaderClass : ''}`}>
                                    {column.render('Header')}
                                </th>
                                );
                              })}
                        </tr>
                        );
                    })
                  }
              </thead>
              <tbody {...getTableBodyProps()}>
                  {rows.map((row: any, rowIndex: any) => {
                        prepareRow(row)
                        const rowProps = row.getRowProps();
                        const { key: rowKey, ...restRowProps} = rowProps;
                        return(
                          <tr
                          key={rowKey}{...restRowProps}>
                          {row.cells.map((cell, cellIndex) =>{
                                const cellProps = cell.getCellProps();
                                const {key: cellKey, ...restCellProps} = cellProps;
                                return (<td  key={cellKey} {...restCellProps}
                                className={`border2 pl-[5%] py-[12px] border-b-[1px] border-[#0000001a] ${cell.column.customNameClass ? cell.column.customNameClass : '' || cell.column.customEmailClass ? cell.column.customEmailClass : ''}`}>
                                    {cell.render('Cell')}
                                </td>
                                );
                              })
                          }
                          </tr>
                        )
                    }) 
                  }
              </tbody>
              </table>
            </div>         
        </div>
  </div>
);
};

export default UserRightSection