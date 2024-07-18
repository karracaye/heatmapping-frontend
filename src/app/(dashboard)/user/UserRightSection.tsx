"use client";
import Link from "next/link";
import axios from "@/lib/axios";
import { useState, useEffect } from "react";
import EditProfile from "./EditProfile";
type PropsUser = {
  addNewClick: () => void;
};
type processedData = {
  fullname: string;
  email: string;
  status: string;
};

const UserRightSection: React.FC<PropsUser> = ({ addNewClick }) => {
  const [dataValue, setDataValue] = useState<processedData[]>([]);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalNumber, setTotalNumber] = useState(0);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      //This will help to compile the full name of the user
      try {
        const response = await axios.instance.get("/users", axios.authorization);
        const processedData = response.data.result.map((item: any) => ({
          fullname: `${item.firstname} ${
            item.middle_name ? item.middle_name + " " : ""
          }${item.lastname}`.trim(), //This will access by the accessor
          email: item.email, //This will access by the accessor
          status: item.status, //This will access by the accessor
        }));
        setDataValue(processedData);
        setTotalNumber(response.data.total_users);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dataValue]);

  const processedData = (response) => {//Update the data that will be presented
      return response.data.result.map((item: any) => ({
      fullname: `${item.firstname} ${
        item.middle_name ? item.middle_name + " " : ""
      }${item.lastname}`.trim(),
      email: item.email, 
      status: item.status, 
    }));
    };

    const pagination = (action) => {
      if (!dataValue) return;
      let index = pageNumber;
      if (action === 'next'){
        index = totalNumber < pageNumber + 20 ? pageNumber : pageNumber + 20;
      }else if(action === 'prev'){
        index = pageNumber ? pageNumber - 20 : pageNumber;
      }

      axios.instance
        .get("/users", {
          params: {index}
        }, axios.authorization)
        .then((response) => {
          const responseData = processedData(response);
          if (action === 'next' && index !== pageNumber){
            setPageNumber(index);
          }else if (action === 'prev' && pageNumber){
            setPageNumber(index);
          }
          setDataValue(responseData);
        });
    };



  return (
    <div className="w-[100%] h-[100%] grow pt-5 pl-[3%] pr-[2.5%]">
      <div className="relative max-h-[100%] min-h-[80vh] bg-white rounded-[10px] shadow-[0_0_1px_2.9px_rgba(0,0,0,0.03)]">
        <div className="flex justify-between items-center pl-14 pr-9 pt-5 pb-2">
          <p className="text-base font-semibold">Users</p>
          <div className="h-[54px] flex items-center gap-2">
            <div>
              <button
                onClick={addNewClick}
                className="bg-[#303079] rounded-[10px] font-medium text-xs text-white h-[40px] px-4 hover:opacity-10 transition duration-300 ease-in-out"
              >
                Add New User
              </button>
            </div>
            <div className="relative ">
              <input
                className="border-[#0000001a] border-[1px] h-[40px] w-[240px] rounded-[10px] font-normal text-[12px] pl-[30px]"
                type="text"
                onChange={(e) => setSearch((e.target.value).toLowerCase())}
                placeholder="Who are you looking for?"
              />
              <img
                className="absolute h-[20px] w-[20px] opacity-10 top-[10px] left-2"
                src="/icon/glass.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="overflow-auto max-h-[62vh]">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[#F2F2F2] font-semibold text-[15px] text-left leading-normal">
                <th className="py-3 pl-[40px] px-6 w-[30%]">Name</th>
                <th className="py-3 px-6 w-[30%]">Email Address</th>
                <th className="py-3 px-6 w-[18%]">Status</th>
                <th className="py-3 px-6 w-[15%]">Action</th>
              </tr>
            </thead>
            <tbody className="font-normal text-[15px]">
              {dataValue.filter((item) => {
                return search.toLowerCase() === '' ? item : item.fullname.toLowerCase().includes(search);
              }).map((user, index) => (
                <tr key={index} className="border-b text-left">
                  <td className="pr-3 px-6 pl-[40px] w-[30%]">
                    {user.fullname}
                  </td>
                  <td className="py-3 px-6 w-[35%]">{user.email}</td>
                  <td className="py-3 px-6 flex items-center">
                    <div
                      className={`w-[9px] h-[9px] mr-2 shadow-[0_2px_1px_0_rgba(0,0,0,0.25)] rounded-full ${
                        user.status === "active"
                          ? "bg-[#ffff00]"
                          : "bg-[#ff0000]"
                      }`}
                    ></div>
                    <p className="font-normal text-[15px]">
                      {user.status === "active" ? "Active" : "Deactivated"}
                    </p>
                  </td>
                  <td className="py-3 px-6 w-[15%]">
                    <div className="w-[90px] flex justify-between pr-[5px] items-center">
                      <Link href="/profile/[id]" as={`/profile/${10002}`}>
                        <button className="font-semibold text-[15px] text-[#0500e8]">
                          View
                        </button>
                      </Link>
                      <button
                        onClick={() => setEditProfileOpen(true)}
                        className="font-semibold text-[15px] text-[#daa318]"
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-[200px] absolute bottom-[10px] left-[42%] ">
          <div className="flex flex-row justify-center items-center">
            <p className="font-normal text-xs">
              {pageNumber + 1}-{pageNumber + 20 < totalNumber ? pageNumber + 20 : totalNumber} of {totalNumber}
            </p>
            <img
              onClick={() => pagination("prev")}
              className="ml-1 w-3 h-3"
              src="/icon/lessthan.svg"
            />
            <img
              onClick={() => pagination("next")}
              className="w-3 h-3 ml-2"
              src="/icon/greaterthan.svg"
            />
          </div>
        </div>
      </div>
      <EditProfile
        editProfileOpen={editProfileOpen}
        setEditProfileOpen={setEditProfileOpen}
      />
    </div>
  );
};

export default UserRightSection;
