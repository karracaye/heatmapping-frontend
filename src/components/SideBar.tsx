'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

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

  return (
    <div className="h-screen w-[6.5%] relative bg-white flex items-center justify-center shadow-[2px_0_2px_2px_rgba(0,0,0,0.05)] z-10">
      <img src="/logos/intelliseven-logo.svg" alt="" 
        className="w-[70%] absolute top-2"
      />
      <div className="w-[25%] flex flex-col gap-5 font-normal">
        {
          roleBasedButtons.map((item1) => (
            // undefined role: change the role if needed
            item1.Superadmin?.map((item2, index2) => (
              <Link key={index2} href={`/${item2.name.toLowerCase()}`}
                className={`link ${pathname === `/${item2.name.toLowerCase()}` ? 'text-guardsman-red' : 'text-gray-500'} flex flex-col items-center text-xs`}
              >
                <img src={`${pathname === `/${item2.name.toLowerCase()}` ? `/buttons-red${item2.path}` : `/buttons${item2.path}`}`} alt=""
                  className={`${pathname !== `/${item2.name.toLowerCase()}` ? 'opacity-50' : ''}`}
                />
                { item2.name }
              </Link>
            ))
          ))
        }
      </div>
    </div>
  );
};

export default Sidebar;
