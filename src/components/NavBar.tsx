"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const logNotification = [
    {
      time: "8:54 AM",
      title: "LOGIN ATTEMPT",
      description: "A login attempt was made by admin  on June 10 at 6:03 PM. ",
    },
    {
      time: "10:50 AM",
      title: "ADDED A NEW FILE",
      description: "Secretary Mary added a new import file to the transaction ",
    },
    {
      time: "11:20 AM",
      title: "CREATED A NEW ROLE",
      description: "Secretary Mary create a new role for the new user. ",
    },
  ];
  const [showNotifications, setShowNotifications] = useState(false);
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  return (
    <nav>
      <div className="w-full px-[3%]">
        <div
          className="w-[105px] h-[35px] flex flex-row mt-[20px] ml-[92%]"
          onClick={toggleNotifications}
        >
          <img src="../icon/group6.svg" className="w-[30px] h-[30px]" />
          <Link className="flex" href="/profile/[id]" as={`/profile/${10002}`}>
            <img
              src="../images/ellipse5.svg"
              className="w-[30px] h-[30px] ml-2"
            />
            <img src="../icon/dropdown.svg" className="w-[30px] h-[30px]" />
          </Link>
        </div>

        <p className="font-medium text-[25px] mt-[-15px]">
          Good Morning Superadmin!
        </p>
        <p className="font-normal text-[15px] text-black opacity-50">
          Things are looking good.
        </p>
      </div>
      {showNotifications && (
        <div className=" w-4/12 bg-white absolute z-[999] right-28  top-[60px] shadow-lg rounded-xl ">
          <div className=" flex justify-between border-b-2 py-4 p-4">
            <h4 className="text-sm opacity-50"> Notifications </h4>
            <p className="text-sm opacity-50">Mark all as read</p>
          </div>

          {logNotification.map((notification, index) => (
            <div key={index} className="">
              <div className="hover:bg-gray-100 px-1 p-4 border-b-2">
                <div className="flex gap-1 px-4">
                  <div className="flex p-4 justify-center items-center rounded-full bg-[#D9D9D9] h-[50px] w-[50px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" stroke="#ffffff" strokeWidth="2">
                        <path
                          strokeLinejoin="round"
                          d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
                        />
                        <circle cx="12" cy="7" r="3" />
                      </g>
                    </svg>
                  </div>

                  <div className="flex-grow px-2">
                    <div className="flex justify-between">
                      <p className="text-sm py-1">{notification.title}</p>
                      <p className="text-xs text-right opacity-50">
                        {notification.time}
                      </p>
                    </div>
                    <p className="text-xs opacity-50">
                      {notification.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="p-3 bg-[#303079] rounded-b-xl ">
            <p className="text-sm text-white text-center cursor-pointer">
              {" "}
              View All
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
