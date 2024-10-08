'use client';
import { useEffect, useState } from 'react';
import axiosInstance from '@/lib/axios';
import Filter from '@/components/Filter';

const Dashboard = () => {
  const [ hover, setHover ] = useState<boolean>();

  const [ barangay, setBarangay ] = useState([{
    brgy_name: '',
  }]);

  useEffect(() => {
    axiosInstance.get('/barangays')
    .then((response) => {
      setBarangay(response.data);
    })
  }, [])

  interface serviceDataType {
    _id: string,
    service_name: string,
  }

  const [ service, setService ] = useState< Array<serviceDataType> >();
  useEffect(() => {
    axiosInstance.get('/services')
    .then((response) => {
      setService(response.data);
    })
  }, [])

  const [ filter, setFilter ] = useState<string>();
  const entry = (service_id, service_type) => {
    if (service_id && service_type != 'None') {
      axiosInstance.get('/beneficiaries-services/perBrgy', {
        params: {
          service: service_id,
        },
      })
      .then((response) => {
        setFilter(service_type);
        setBarangay(response.data);
      })
    } else {
      axiosInstance.get('/barangays')
      .then((response) => {
        setFilter('');
        setBarangay(response.data);
      })
    }
  }

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  return (
    <div id='template' className='grid gap-5 grid-rows-7 grid-cols-5'>
      <div className='flex items-center row-span-4 col-span-3 bg-white rounded-[10px] shadow-[0_0_2px_2px_rgba(0,0,0,0.03)]'>
        <div id='dashboard-map' className='w-full mx-6 grid grid-rows-5 grid-cols-3 gap-x-6'>
          <div className='col-span-2'>
            <p className='text-base font-normal'>Lipa, Batangas Phillipines</p>
            <p className='text-xs text-gray-400'>72 third level subdivisions</p>
          </div>
  
          <div className='row-span-3'>
            <p className='text-2xl font-medium'>
              {
                weekday[new Date().getDay()]
              }
            </p>
            <p className='text-sm text-gray-400 font-normal'>
              {
                new Date().toLocaleString('en-PH', {
                  month: 'long',
                  day: '2-digit',
                  year: 'numeric',
                })
              }
            </p>
          </div>
  
          <div className='relative flex justify-center row-span-4 col-span-2'>
            <div className='w-fit h-fit absolute left-0 bottom-0'>
              <div className='w-[15px] h-[25px] bg-[#CF0000]'></div>
              <div className='w-[15px] h-[25px] bg-[#FF0000]'></div>
              <div className='w-[15px] h-[25px] bg-[#FF7373]'></div>
            </div>
            
            <img src={hover ? '/maps/lipa-city-map-filled.svg': '/maps/lipa-city-map-outline.svg'} alt=''
              className='h-full absolute'
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(!hover)}
            />
          </div>
              {/* why keep changing my code!!!!!!!!!!!!!!!! -- Karra */}
          <div className='flex flex-col gap-2 row-span-2'>
            <div>
              <p className='text-xs text-gray-400'>Top Location</p>
              <p className='text-lg font-medium'>San Guillermo</p>
            </div>
            <div>
              <p className='text-xs text-gray-400'>Population</p>
              <p className='text-lg font-medium'>5,394</p>
            </div>
          </div>
        </div>
      </div>

      <div className='row-span-4 col-span-2 bg-white rounded-[10px] shadow-[0_0_2px_2px_rgba(0,0,0,0.03)]'>
        <div className='h-[20%] flex items-center justify-between px-6'>
          <div>
            <p className='text-base font-normal'>Lipa Barangayssssss</p>
            <p className='h-4 text-xs text-gray-400 font-normal'>
              {
                filter ? (
                  filter
                ): ''
              }
            </p>
          </div>

          <Filter data={service} entry={entry} />
        </div>

        <div className='h-[80%] flex items-center text-sm font-medium px-6 py-2'>
          <ol className='w-full h-full list-decimal grid grid-flow-col grid-rows-10 pl-5'>
            {
              barangay[0].brgy_name ? (
                barangay.map((item, index) => (
                  <li key={index}>{ item.brgy_name }</li>
                ))
              ): ''
            }
          </ol>
        </div>
      </div>

      <div className='row-span-3 col-span-3 bg-white rounded-[10px] shadow-[0_0_2px_2px_rgba(0,0,0,0.03)]'>
        <div className='h-[25%] flex items-center gap-2 px-6'>
          <p className='text-base font-normal'>Requests for approvals</p>
          <p className='bg-[#12174F] text-white text-xs font-semibold px-2 py-1 rounded-[5px]'>15+</p>
        </div>

        <table className='w-full text-sm'>
          <thead>
            <tr className='h-12 bg-[#F2F2F2] font-semibold text-left'>
              <th></th>
              <th>Requested by</th>
              <th>Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='h-12 border-b border-[#F2F2F2]'>
              <td className='w-12 p-3'>
                <p className='bg-[#D9D9D9] text-white flex items-center justify-center rounded-full aspect-square'>
                  1
                </p>
              </td>
              <td>Maria Santiago</td>
              <td>06-26-2024 9:54 am</td>
              <td>
                <button
                  className='text-[#0500E8] font-semibold'
                >
                  View
                </button>
              </td>
            </tr>

            <tr className='h-12 border-b border-[#F2F2F2]'>
              <td className='w-12 p-3'>
                <p className='bg-[#D9D9D9] text-white flex items-center justify-center rounded-full aspect-square'>
                  2
                </p>
              </td>
              <td>Sarah Mercado</td>
              <td>06-26-2024 9:26 am</td>
              <td>
                <button
                  className='text-[#0500E8] font-semibold'
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='row-span-3 col-span-2 bg-white rounded-[10px] shadow-[0_0_2px_2px_rgba(0,0,0,0.03)]'>
        <div className='h-[25%] flex items-center justify-between px-6'>
          <p className='text-base font-normal'>Summary</p>
          <hr className='w-full border border-[#12174F] ml-6' />
        </div>

        <div className='h-[75%] flex items-center text-sm px-6 pb-6'>
          <div className='w-full h-full grid grid-cols-2'>
            <div className='px-4 py-2 rounded-l-[10px]'>
              <p className='font-medium text-sm'>New Users</p>
              <ul className='list-disc text-sm font-normal pl-5'>
                <li className='text-[#EC7965]'>
                  <span className='text-black'>Mariah Santiago</span>
                </li>
                <li className='text-[#EC7965]'>
                  <span className='text-black'>Sarah Mercado</span>
                </li>
              </ul>
            </div>
  
            <div className='bg-[#F8F8F8] px-4 py-2 rounded-r-[10px]'>
              <p className='font-medium text-sm'>New Transactions</p>
              <ul className='list-disc text-sm font-normal pl-5'>
                <li className='text-[#EC7965]'>
                  <span className='text-black'>
                    Ian Chestnut
                    <br />
                    Medical Assistance
                  </span>
                </li>
                <li className='text-[#EC7965]'>
                  <span className='text-black'>
                    Ian Chestnut
                    <br />
                    Medical Assistance
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;