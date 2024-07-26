'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const pathname = usePathname();

  const roleBasedButtons = [
    {
      Superadmin: [
        {
          name: 'Dashboard',
          path: '/dashboard.svg',
        },
        {
          name: 'User',
          path: '/user.svg',
        },
        {
          name: 'Role',
          path: '/role.svg',
        },
        {
          name: 'Logs',
          path: '/logs.svg',
        },
        {
          name: 'Transaction',
          path: '/transaction.svg',
        },
        {
          name: 'Settings',
          path: '/settings.svg',
        },
      ]
    },
    {
      Admin: [
        {
          name: 'Dashboard',
          path: '/dashboard.svg',
        },
        {
          name: 'Approvals',
          path: '/approvals.svg',
        },
        {
          name: 'Transaction',
          path: '/transaction.svg',
        },
        {
          name: 'Settings',
          path: '/settings.svg',
        },
      ]
    },
    {
      Secretary: [
        {
          name: 'Dashboard',
          path: '/dashboard.svg',
        },
        {
          name: 'Transaction',
          path: '/transaction.svg',
        },
        {
          name: 'Settings',
          path: '/settings.svg',
        },
      ]
    },
  ]

  const [ accountRole, setAccountRole ] = useState<string>();
  useEffect(() => {
    const request = indexedDB.open('heatmap_db', 1);

    request.onsuccess = () => {
      const database = request.result;
      const transaction = database.transaction(['user'], 'readonly');
      const objectStore = transaction.objectStore('user');  
      const getUser = objectStore.getAll(); 

      getUser.onsuccess = () => {
        getUser.result.map((item) => {
          if (item._id == getUser.result.length) setAccountRole(item.role);
        })
      }

      // getUser.onerror = (event) => {
      //   console.error(event.target.error);
      // }
    }

    // request.onerror = (event) => {
    //   console.error(event.target.error);
    // }
  }, [])

  return (
    <div className='h-screen w-[6.5%] relative bg-white flex items-center justify-center shadow-[2px_0_2px_2px_rgba(0,0,0,0.05)]'>
      <img src='/logos/intelliseven-logo.svg' alt='' 
        className='w-[70%] absolute top-2'
      />
      <div className='w-[25%] flex flex-col gap-5 font-normal'>
        {
          accountRole ? (
            roleBasedButtons.map((item1) => (
              accountRole == 'Superadmin' ? (
                item1.Superadmin?.map((item2, index2) => (
                  <Link key={index2} href={`/${item2.name.toLowerCase()}`}
                    className={`link ${pathname === `/${item2.name.toLowerCase()}` ? 'text-guardsman-red' : 'text-gray-500'} flex flex-col items-center text-xs`}
                  >
                    <img src={`${pathname === `/${item2.name.toLowerCase()}` ? `/buttons-red${item2.path}` : `/buttons${item2.path}`}`} alt=''
                      className={`${pathname !== `/${item2.name.toLowerCase()}` ? 'opacity-50' : ''}`}
                    />
                    { item2.name }
                  </Link>
                ))
              ): accountRole == 'Admin' ? (
                item1.Admin?.map((item2, index2) => (
                  <Link key={index2} href={`/${item2.name.toLowerCase()}`}
                    className={`link ${pathname === `/${item2.name.toLowerCase()}` ? 'text-guardsman-red' : 'text-gray-500'} flex flex-col items-center text-xs`}
                  >
                    <img src={`${pathname === `/${item2.name.toLowerCase()}` ? `/buttons-red${item2.path}` : `/buttons${item2.path}`}`} alt=''
                      className={`${pathname !== `/${item2.name.toLowerCase()}` ? 'opacity-50' : ''}`}
                    />
                    { item2.name }
                  </Link>
                ))
              ): accountRole == 'Secretary' ? (
                item1.Secretary?.map((item2, index2) => (
                  <Link key={index2} href={`/${item2.name.toLowerCase()}`}
                    className={`link ${pathname === `/${item2.name.toLowerCase()}` ? 'text-guardsman-red' : 'text-gray-500'} flex flex-col items-center text-xs`}
                  >
                    <img src={`${pathname === `/${item2.name.toLowerCase()}` ? `/buttons-red${item2.path}` : `/buttons${item2.path}`}`} alt=''
                      className={`${pathname !== `/${item2.name.toLowerCase()}` ? 'opacity-50' : ''}`}
                    />
                    { item2.name }
                  </Link>
                ))
              ): ''
            ))
          ): ''
        }
      </div>
    </div>
  );
};

export default Sidebar;
