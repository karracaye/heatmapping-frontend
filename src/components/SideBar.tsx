'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-gray-800 w-[6.5&] h-screen p-4 text-white">
      <h2 className="text-xl mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2">
          <Link className={`link ${pathname === '/dashboard' ? 'text-red-200' : ''}`} href="/dashboard">
            <p>Dashboard</p>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/user">
            <p>User</p>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/role">
            <p>Role</p>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/logs">
            <p>Logs</p>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/transactions">
            <p>Transaction</p>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/settings">
            <p>Settings</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
