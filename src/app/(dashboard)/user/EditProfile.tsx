"use client";
import axios from "@/lib/axios";
import React, { useEffect } from "react";
import { useState } from "react";

const EditProfile = ({ editProfileOpen, setEditProfileOpen, userID }) => {
  const [statusChoiceOpen, setStatusChoiceOpen] = useState(false);
  const [addressButton, setAddressButton] = useState(false);
  const [serviceButton, setServiceButton] = useState(false);
  const [deactivateChoice, setDeactivateChoice] = useState(false);
  const [deleteChoice, setDeleteChoice] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [newData, setNewData] = useState({
    id: "",
    firstname: "",
    middle_name: "",
    lastname: "",
  });
  const [newDataStatus, setNewDataStatus] = useState({
    id: "",
    status: "",
  });

  const handleClick = () => {
    setEditProfileOpen(false);
    setStatusChoiceOpen(false);
    setAddressButton(false);
    setServiceButton(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEditProfileOpen(false);
    const updatedData = { ...newData, id: `${userID}`, status: newStatus };
    axios.instance
      .put(`/users?_id=${userID}`, updatedData, axios.authorization)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios.instance
      .get(`/users?_id=${userID}`, axios.authorization)
      .then((res) => {
        setNewStatus(res.data.result[0].status);
      })
      .catch((err) => console.log(err));
  }, [userID]);

  const handleDelete = (event) => {
    event.preventDefault();
    axios.instance
      .delete(`/users`, {
        data: {
          _id: userID,
        },
        headers: axios.authorization.headers,
      })
      .then((res) => {
        console.log(`Deleted user with id ${userID}`);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    setDeleteChoice(false);
    setEditProfileOpen(false);
  };

  const handleSubmitNewStatus = (event) => {
    event.preventDefault();
    setDeactivateChoice(false);
    setEditProfileOpen(false);
    const updatedData = {
      ...newDataStatus,
      id: `${userID}`,
      status: newDataStatus.status,
    };
    axios.instance
      .put(`/users?_id=${userID}`, updatedData, axios.authorization)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <section>
      {editProfileOpen && (
        <>
          <div
            onClick={handleClick}
            className={
              "absolute transition duration-300 ease-in-out top-0 right-0 bottom-0 left-0 bg-[#0000004d]"
            }
          ></div>
          <div
            className={`w-[557px] h-[100vh] bg-white flex flex-col justify-between absolute right-0 top-0 bottom-0 transition duration-300 ease-in-out `}
          >
            <div className="w-full h-full flex flex-col">
              <div className="mt-[30px] px-[5%] flex flex-row items-start justify-between">
                <div>
                  <h3 className="font-medium text-[15px]">Edit Profile</h3>
                  <p className="font-normal text-[13px] opacity-50 mt-1">
                    Please fill up the following information
                  </p>
                </div>
                <div className="relative">
                  <img
                    onClick={() => setStatusChoiceOpen(!statusChoiceOpen)}
                    className="w-[28px] h-[29px] mt-[-5px]"
                    src="../icon/threedot.svg"
                    alt=""
                  />
                  {statusChoiceOpen && (
                    <div className="w-[165px] h-[100px] right-0 top-[29px] absolute z-10 bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex flex-col rounded-br-[10px] rounded-bl-[10px] py-[5px]">
                      <button
                        onClick={() => {
                          setDeactivateChoice(true);
                          setStatusChoiceOpen(false);
                          setNewDataStatus({
                            ...newDataStatus,
                            status: `${
                              newStatus === "active" ? "deactivated" : "active"
                            }`,
                          });
                        }}
                        className="font-normal text-sm py-3 hover:bg-[#EC7966] hover:text-white"
                      >
                        {`${
                          newStatus === "active" ? "Deactivated" : "Activate"
                        }`}{" "}
                        Account
                      </button>
                      <button
                        onClick={() => {
                          setDeleteChoice(true);
                          setStatusChoiceOpen(false);
                        }}
                        className="font-normal text-sm py-3 hover:bg-[#EC7966] hover:text-white"
                      >
                        Delete Account
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="px-[0.5%]">
                <div className="flex flex-row mt-[10px] w-[96%] justify-between">
                  <div className=" flex flex-col ml-[5%] ">
                    <p className="font-normal text-[13px] opacity-50">
                      First Name
                    </p>
                    <input
                      value={newData.firstname}
                      onChange={(e) =>
                        setNewData({ ...newData, firstname: e.target.value })
                      }
                      className="w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] px-[15px] font-normal text-sm placeholder:text-[#00000040]"
                      type="text"
                      placeholder="Juan"
                    />
                  </div>
                  <div className="flex flex-col ml-[2%] ">
                    <p className="font-normal text-[13px] opacity-50">
                      Middle Name
                    </p>
                    <input
                      value={newData.middle_name}
                      onChange={(e) =>
                        setNewData({ ...newData, middle_name: e.target.value })
                      }
                      className="w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] px-[15px] font-normal text-sm placeholder:text-[#00000040]"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-row mt-[13px] w-[96%] justify-between">
                  <div className="flex flex-col ml-[5%] ">
                    <p className="font-normal text-[13px] opacity-50">
                      Last Name
                    </p>
                    <input
                      value={newData.lastname}
                      onChange={(e) =>
                        setNewData({ ...newData, lastname: e.target.value })
                      }
                      className="w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] px-[15px] font-normal text-sm placeholder:text-[#00000040]"
                      type="text"
                      placeholder="Dela Cruz"
                    />
                  </div>
                  <div className="flex flex-col ml-[2%] justify-end">
                    <p className="font-normal text-[13px] opacity-50">Age</p>
                    <input
                      className="w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] px-[15px] font-normal text-sm placeholder:text-[#00000040]"
                      type="text"
                      placeholder="48"
                    />
                  </div>
                </div>
                <div className="flex flex-row mt-[13px] w-[96%] relative">
                  <div className="w-[100%] flex flex-col ml-[5%]">
                    <p className="font-normal text-[13px] opacity-50">
                      Address
                    </p>
                    <div className="relative">
                      <input
                        className="transition duration-300 ease-in-out w-[100%] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] px-[15px] font-normal text-sm placeholder:text-[#00000040]"
                        type="text"
                        placeholder="Wext City Plaza, West Avenue, Quezon City, Metro Manila, Philippines"
                      />
                      <img
                        onClick={() => setAddressButton(!addressButton)}
                        className="absolute w-[24px] h-[24px] top-[12px] right-[10px]"
                        src="/icon/dropdown1.svg"
                      />
                    </div>
                  </div>
                  {addressButton && (
                    <ul
                      className={
                        "w-[95%] h-[78px] absolute rounded-br-[5px] rounded-bl-[5px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mx-[5%] flex items-center pl-[20px] top-[95%] transition duration-300 ease-in-out z-10 "
                      }
                    >
                      <li>
                        <h3 className="font-semibold text-[13px]">
                          West City Plaza
                        </h3>
                        <p className="font-medium text-[13px] opacity-50 mt-1">
                          West City Plaza, West Avenue, Quezon City, Metro
                          Manila, Philippines
                        </p>
                      </li>
                    </ul>
                  )}
                </div>
                <div className="flex flex-row mt-[13px] w-[96%] justify-between">
                  <div className="flex flex-col ml-[5%] justify-end">
                    <p className="font-normal text-[13px] opacity-50">
                      Birthdate
                    </p>
                    <input
                      className="w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] px-[15px] font-normal text-sm placeholder:text-[#00000040]"
                      type="text"
                      placeholder="12/26/1990"
                    />
                  </div>
                  <div className="flex flex-col ml-[2%] justify-end">
                    <p className="font-normal text-[13px] opacity-50">
                      Marital Status
                    </p>
                    <input
                      className="w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] font-normal text-[15px] pl-[15px]"
                      type="text"
                      placeholder="Married"
                    />
                  </div>
                </div>
                <div className="flex flex-row mt-[13px] w-[96%] justify-between">
                  <div className="flex flex-col ml-[5%] ">
                    <p className="font-normal text-[13px] opacity-50">
                      Occupation
                    </p>
                    <input
                      className="w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] pl-[15px]"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col ml-[2%] justify-end relative">
                    <p className="font-normal text-[13px] opacity-50">
                      Services
                    </p>
                    <div className="relative">
                      <input
                        className="w-[240px] h-[35px] rounded-[10px] border-[1px] border-[#0000001a] mt-[5px] pl-[15px]"
                        type="text"
                      />
                      <img
                        onClick={() => setServiceButton(!serviceButton)}
                        className="absolute w-[24px] h-[24px] top-[12px] right-[10px]"
                        src="/icon/dropdown1.svg"
                      />
                    </div>
                    {serviceButton && (
                      <ul
                        className={
                          "w-[100%] h-[180px] absolute bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex flex-col top-[95%] z-10 rounded-br-[10px] rounded-bl-[10px]"
                        }
                      >
                        <li className="font-medium text-[13px] py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">
                          Medical Assistance
                        </li>
                        <li className="font-medium text-[13px] py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">
                          Legal Consultation
                        </li>
                        <li className="font-medium text-[13px] py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">
                          Livelyhood
                        </li>
                        <li className="font-medium text-[13px] py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">
                          Donation
                        </li>
                        <li className="font-medium text-[13px] py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">
                          Scholarship
                        </li>
                        <li className="font-medium text-[13px] py-[5px] px-[15px] hover:bg-[#3030791a] cursor-pointer">
                          Solicitation
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-[65%] mb-[15px] mt-[26%]">
              <div className="flex flex-row justify-between w-[160px] ">
                <button
                  onClick={() => setEditProfileOpen(false)}
                  className="w-[73px] h-[42px] rounded-[10px] bg-[#ec7965] font-medium text-sm text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="w-[73px] h-[42px] rounded-[10px] bg-[#303079] font-medium text-sm text-white"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
          {deactivateChoice && (
            <div className="absolute w-full h-full flex items-center justify-center top-0 right-0 left-0 bottom-0 z-10 transition duration-300 ease-in-out">
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#0000004d]"></div>
              <div className="w-[380px] h-[260px] bg-white rounded-[10px] z-10 flex flex-col justify-center items-center shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <img
                  className="h-[82px] w-[82px]"
                  src="/icon/deleteWarning.svg"
                  alt=""
                />
                <p className="font-medium text-center text-base">
                  Are you sure you want to{" "}
                  <span className="text-[#FFA500]">{`${
                    newStatus === "active" ? "deactivate" : "activate"
                  }`}</span>{" "}
                  <br />
                  this account?
                </p>
                <div className="mt-5">
                  <button
                    onClick={() => setDeactivateChoice(false)}
                    className="w-[90px] h-[45px] rounded-[10px] bg-[#F5C8C1] font-medium text-sm text-white"
                  >
                    No
                  </button>
                  <button
                    onClick={handleSubmitNewStatus}
                    className="w-[90px] h-[45px] ml-4 rounded-[10px] bg-[#303179] font-medium text-sm text-white"
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          )}
          {deleteChoice && (
            <div className="absolute w-full h-full flex items-center justify-center top-0 right-0 left-0 bottom-0 z-10 transition duration-300 ease-in-out">
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#0000004d]"></div>
              <div className="w-[380px] h-[260px] bg-white rounded-[10px] z-10 flex flex-col justify-center items-center shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <img
                  className="h-[82px] w-[82px]"
                  src="/icon/deleteWarning.svg"
                  alt=""
                />
                <p className="font-medium text-center text-base">
                  Are you sure you want to{" "}
                  <span className="text-[#FF0000]">delete</span> <br />
                  this account?
                </p>
                <div className="mt-5">
                  <button
                    onClick={() => setDeleteChoice(false)}
                    className="w-[90px] h-[45px] rounded-[10px] bg-[#F5C8C1] font-medium text-sm text-white"
                  >
                    No
                  </button>
                  <button
                    onClick={handleDelete}
                    className="w-[90px] h-[45px] ml-4 rounded-[10px] bg-[#303179] font-medium text-sm text-white"
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default EditProfile;
