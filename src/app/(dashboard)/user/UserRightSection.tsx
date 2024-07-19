"use client";
import Link from "next/link";
import axios from "@/lib/axios";
import { useState, useEffect } from "react";
import EditProfile from "./EditProfile";

type PropsUser = {
  addNewClick: () => void;
};
type processedData = {
  id: string;
  fullname: string;
  email: string;
  status: string;
};

const UserRightSection: React.FC<PropsUser> = ({ addNewClick }) => {
  const [dataValue, setDataValue] = useState<processedData[]>([]);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalNumber, setTotalNumber] = useState(0);
  const [search, setSearch] = useState("");
  const [dataNumber, setDataNumber] = useState(0);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    axios.instance.get("/users", axios.authorization).then((response) => {
      const processedData = response.data.result.map((item: any) => ({
        id: item._id,
        fullname: `${item.firstname} ${
          item.middle_name ? item.middle_name + " " : ""
        }${item.lastname}`.trim(), //This will access by the accessor
        email: item.email, //This will access by the accessor
        status: item.status, //This will access by the accessor
      }));
      setDataValue(processedData);
      setDataNumber(processedData.length);
      setTotalNumber(response.data.total_users);
    });
  }, []);

  const pagination = (action) => {
    if (!dataValue) return;
    let index = pageNumber;
    if (action === "next") {
      index =
        totalNumber < pageNumber + dataNumber
          ? pageNumber
          : pageNumber + dataNumber;
    } else if (action === "prev") {
      index = pageNumber ? pageNumber - dataNumber : pageNumber;
    }

    console.log(index);
    axios.instance
      .get("/users", {
        params: {
          index: index,
        },
        headers: axios.authorization.headers,
      })
      .then((response) => {
        const processedData = response.data.result.map((item: any) => ({
          id: item._id,
          fullname: `${item.firstname} ${
            item.middle_name ? item.middle_name + " " : ""
          }${item.lastname}`.trim(), //This will access by the accessor
          email: item.email, //This will access by the accessor
          status: item.status, //This will access by the accessor
        }));
        if (action === "next" && index !== pageNumber) {
          setPageNumber(index);
        } else if (action === "prev" && pageNumber) {
          setPageNumber(index);
        }
        setDataValue(processedData);
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
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
              {dataValue
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.fullname.toLowerCase().includes(search);
                })
                .map((user, index) => (
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
                          onClick={() => {
                            setEditProfileOpen(true);
                            {
                              dataValue.map((data) => {
                                if(data.id === user.id){
                                  setUserID(user.id)
                                }
                              })
                            }
                          }}
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
              {pageNumber + 1}-
              {pageNumber + dataNumber < totalNumber
                ? pageNumber + dataNumber
                : totalNumber}{" "}
              of {totalNumber}
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
        userID={userID}
      />
    </div>
  );
};

export default UserRightSection;
