import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
        <div className="w-full px-[3%]">
          <Link href="/profile/[id]" as={`/profile/${10002}`}>
            <div className='w-[105px] h-[35px] flex flex-row mt-[20px] ml-[92%]'>
              <img src="../icon/group6.svg" className='w-[30px] h-[30px]'/>
              <img src="../images/ellipse5.svg" className='w-[30px] h-[30px] ml-2'/>
              <img src="../icon/dropdown.svg" className='w-[30px] h-[30px]'/>
            </div>
            <p className='font-medium text-[25px] mt-[-15px]'>Good Morning Superadmin!</p>
            <p className='font-normal text-[15px] text-black opacity-50'>Things are looking good.</p>
          </Link>
        </div>
    </nav>
  );
};

export default Navbar;
