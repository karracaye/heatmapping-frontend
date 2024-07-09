import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">Heat Map</div>
        <div className="space-x-4">
          <Link href="/profile/[id]" as={`/profile/${10002}`}>
            <p className="text-white">Profile</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
