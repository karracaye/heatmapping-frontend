"use client";
import { useState, useEffect, use } from "react";
import axios from "@/lib/axios";

type newRole = {
  _id: string;
  role_type: string;
};
type newServices = {
  _id: string;
  service_name: string;
};

interface user {
  firstname: string;
  middle_name: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  home_address: {
    city: string;
    region: string;
    country: string;
  };
  roleID?: string;
  status: string;
  EVR_No: string;
  account_typeID: string;
}

const addUserModal = ({ addNew, addNewClick }) => {
  const [assignNo, setAssignNo] = useState(false); //To toggle the assigning role of the employee when you click No
  const [type, setType] = useState("Type"); //It`s the initial state in the dropdown menun that you can choose between employee and politician. this can also be changed
  const [typeOpen, setTypeOpen] = useState(false); //It toggle the choices in Type. This will show Employee and POlitician dropdown
  const [toggleYes, setToggleYes] = useState(false); //It will toggle the Yes button in question assigning new role.It will shot input to assign new role.
  const [selectRole, setSelectRole] = useState(false); //It will toggle the dropdown button to input new role.
  const [addNewRole, setAddNewRole] = useState(false); //It will show an input box the you can add the new role
  const [typePolitician, setTypePolitician] = useState(false); //If you choose politician in type. It will toggle another information about Politician
  const [typePoliticianEVR, setTypePoliticianEVR] = useState(false);
  const [serviceChoices, setServiceChoices] = useState<any[]>([]); //The array of services that available
  const [deleteDecision, setDeleteDecision] = useState(false); //For deleting the new role in decision in Frame 17
  const [visibleChoices, setVisibleChoices] = useState(false); //This will show the new role
  const [newAddedRole, setNewAddedRole] = useState(""); //This help to appear the value of new role
  const [newSubmittedRole, setNewSubmittedRole] = useState({
    role_type: "",
  });
  const [newSubmittedService, setNewSubmittedService] = useState({
    service_name: "",
  });
  const [inputNewRoleOpen, setInputNewRoleOpen] = useState(false);
  const [inputNewServiceOpen, setInputNewServiceOpen] = useState(false);
  const [newRoles, setNewRoles] = useState<newRole[]>([]);
  const [newServices, setNewServices] = useState<newServices[]>([]);
  const [addNewServices, setAddNewServices] = useState(false);
  const [newRoleOpen, setNewRoleOpen] = useState(false);
  const [assignNewRole, setAssignNewRole] = useState("");
  const [emailSentOpen, setEmailSentOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [dataValue, setDataValue] = useState<user>({
    firstname: "",
    middle_name: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    home_address: {
      city: "Quezon City",
      region: "Metro Manila",
      country: "Philippines",
    },
    roleID: "",
    status: "active",
    EVR_No: "",
    account_typeID: "",
  });

  const closeButton = () => {
    setType("Type");
    setTypeOpen(false);
    setAssignNo(false);
    setTypePolitician(false);
    setServiceChoices([]);
    setVisibleChoices(false);
    setNewAddedRole("");
    setNewRoleOpen(false);
    setAssignNewRole("");
    setNewRoles([]);
    setNewRoles(newRoles);
    setSelectRole(false);
    setTypePoliticianEVR(false);
    setAddNewServices(false);
  };

  //Function for choosing the type of user(Politician or Employee).
  const clickPolitician = () => {
    //This will trigger components that need when you select politician
    if (type !== "Politician") {
      setTypePolitician(!typePolitician);
      setAssignNo(false);
      setAssignNewRole("");
      setNewRoleOpen(false);
      setTypePoliticianEVR(true);
    }
  };

  const dataForm = (choice) => {
    //Will set the dataValue for the data needed when the employee or politician is submitted.
    if (choice === "Employee") {
      setDataValue((prevState) => {
        const { roleID, ...data } = prevState;
        return {
          ...data,
          roleID: "",
        };
      });
    } else if (choice === "Politician") {
      setDataValue((prevState) => {
        const { roleID, ...data } = prevState;
        return {
          ...data,
          roleID: undefined,
        };
      });
    }
  };

  const clickChoices = (type: string) => {
    //Choice for employee or politician
    setType(type);
    setTypeOpen(!typeOpen);
    if (type === "Employee") {
      setDataValue({
        ...dataValue,
        account_typeID: "66862cfe311b616ac697a2bb",
      });
    } else if (type === "Politician") {
      setDataValue({
        ...dataValue,
        account_typeID: "66862e2e311b616ac697a2bc",
      });
    }
  };

  const handleClick = () => {
    //Handle toggle the need too be closed
    if (type !== "Employee") {
      setAssignNo(!assignNo);
      setTypePolitician(false);
      setToggleYes(false);
      setAddNewRole(false);
      setTypePoliticianEVR(false);
      setAddNewServices(false);
    }
  };

  const handleClickNo = () => {
    //Close in employee type
    setType("Type");
    setAssignNo(!assignNo);
    setTypePolitician(false);
    setToggleYes(false);
    setAddNewRole(false);
    setTypePoliticianEVR(false);
  };

  const submitNewRole = (role: string) => {
    //Submit new role that will be choose between roles like superadmin, admin and secretary
    setNewAddedRole(role);
    setSelectRole(false);
  };

  useEffect(() => {
    //Will close the serviceChoice if there are no value that is selected
    if (serviceChoices.length === 0) {
      setVisibleChoices(false);
    }
  }, [serviceChoices]);

  // //New roles that will be created
  const removeChoice = (choice: string, index) => {
    //Remove service choice in politician side
    setServiceChoices(
      serviceChoices.filter((item) => item !== choice && item.index !== index)
    );
  };

  const handleNewRoleSubmit = (newRole: string) => {
    setNewRoleOpen(true);
    setAddNewRole(false);
    handleClick();
    setAssignNo(false);
    setAssignNewRole(newRole);
    {
      newRoles.map((role) => {
        if (newRole === role.role_type) {
          setDataValue({ ...dataValue, roleID: role._id });
        }
        console.log(role._id);
        console.log(role.role_type);
      });
    }
  };

  const selectedChoices = (choice: string) => {
    //Add Services to the list in politician
    if (!serviceChoices.includes(choice)) {
      setServiceChoices([...serviceChoices, choice]);
      if (!visibleChoices) {
        setVisibleChoices(!visibleChoices);
        setVisibleChoices(true);
      }
    }
  };

  const handleNewServiceSubmit = (newService: string) => {
    selectedChoices(newService);
    setAddNewServices(false);
    setTypePolitician(true);
  };

  const submitNewUser = (event) => {
    event.preventDefault();
    const userName = `${dataValue.firstname}${dataValue.lastname}@gmail.com`;
    const EVR = "N/A";
    const updatedData = { ...dataValue, username: userName, EVR_No: EVR };
    console.log({ updatedData });
    axios.instance
      .post("/users/addUser", updatedData, axios.authorization)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    setTimeout(() => {
      handleEmailSentClick();
      clearInput();
      closeButton();
    }, 500);
  };

  const handleEmailSentClick = () => {
    //Email sent modal when you click add
    setEmailSentOpen(true);
    setTimeout(() => {
      setEmailSentOpen(false);
      addNewClick();
    }, 1000);
  };

  const clearInput = () => {
    setDataValue({
      firstname: "",
      middle_name: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      home_address: {
        city: "Quezon City",
        region: "Metro Manila",
        country: "Philippines",
      },
      roleID: "",
      status: "active",
      EVR_No: "",
      account_typeID: "",
    });
  };

  //New Role
  useEffect(() => {
    axios.instance
      .get("roles", axios.authorization)
      .then((response) => {
        console.log(response.data);
        setNewRoles(response.data);
      })
      .catch((err) => console.log(err));
  }, [newSubmittedRole]);

  const handleSubmitNewRole = (event) => {
    event.preventDefault();
    setInputNewRoleOpen(false);
    axios.instance
      .post("/roles", newSubmittedRole, axios.authorization)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  const [roleDeletedId, setRoleDeletedId] = useState("");
  const handleNewRoleDelete = (event) => {
    event.preventDefault();
    setDeleteDecision(false);
    axios.instance
      .delete("/roles", {
        data: {
          _id: roleDeletedId,
        },
        headers: axios.authorization.headers,
      })
      .then((res) => {
        console.log(`Deleted user with id ${roleDeletedId}`);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  //New Service
  useEffect(() => {
    axios.instance
      .get("/services", axios.authorization)
      .then((response) => {
        console.log(response.data);
        setNewServices(response.data);
      })
      .catch((err) => console.log(err));
  }, [newSubmittedService]);

  const handleSubmitNewService = (event) => {
    event.preventDefault();
    setInputNewServiceOpen(false);
    axios.instance
      .post("/services", newSubmittedRole, axios.authorization)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  const handleServiceDelete = (politicianID) => {
    setDeleteDecision(false);
    axios.instance
      .delete("/services", {
        data: {
          _id: politicianID,
        },
        headers: axios.authorization.headers,
      })
      .then((res) => {
        console.log(`Deleted user with id ${politicianID}`);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section>
      {addNew && (
        <section>
          <div
            onClick={() => {
              addNewClick();
              closeButton();
            }}
            className="absolute top-0 right-0 bottom-0 left-0 bg-[#0000004d]"
          ></div>
          <div className="w-[557px] h-[100vh] bg-white flex flex-col justify-between absolute right-0 top-0 bottom-0 overflow-auto">
            <div>
              <div className="flex flex-row justify-between px-[5%] w-full">
                <div className="flex flex-col">
                  <h3 className="font-medium text-[15px] mt-[30px]">
                    User Registartion Form
                  </h3>
                  <p className="font-normal text-[13px] opacity-50 mt-1">
                    Please fill up the followinf Information
                  </p>
                </div>
                <div className="pl-[50px] pt-[30px] relative">
                  <button
                    onClick={() => setTypeOpen(!typeOpen)}
                    className={`${
                      type === "Type" ? "text-[#0000001a]" : "text-black"
                    } py-[6px] font-normal text-[15px] relative border-[#0000001a] border-[1px] rounded-[10px] w-[150px] pl-[5px] pr-[10px] text-left`}
                  >
                    {type}
                    <img
                      className="w-[24px] h-[24px] absolute top-[8px] right-[3px] opacity-10"
                      src="/icon/dropdown.svg"
                    />
                  </button>
                  {typeOpen && (
                    <div className="w-[150px] h-[90px] flex flex-col py-[10px] rounded-br-[10px] rounded-bl-[10px] bg-white font-normal text-[15px] absolute shadow-[0_4px_4px_0_rgba(0,0,0,0.03)]">
                      <button
                        onClick={() => {
                          clickChoices("Employee");
                          dataForm("Employee");
                          handleClick();
                        }}
                        className="h-[40px] w-full text-left pl-[10px] hover:bg-[#303079] hover:text-white"
                      >
                        Employee
                      </button>
                      <button
                        onClick={() => {
                          clickChoices("Politician");
                          dataForm("Politician");
                          clickPolitician();
                        }}
                        className="h-[40px] w-full text-left pl-[10px] hover:bg-[#303079] hover:text-white"
                      >
                        Politician
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-row mt-[13px]">
                <div className="w-[45%] flex flex-col ml-[5%] ">
                  <p className="font-normal text-[13px] opacity-50">
                    First Name
                  </p>
                  <input
                    value={dataValue.firstname}
                    onChange={(e) =>
                      setDataValue({ ...dataValue, firstname: e.target.value })
                    }
                    className="w-[240px] h-[35px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] px-[17px] placeholder-[#0000001a]"
                    type="text"
                    placeholder="Juan"
                  />
                </div>
                <div className="w-[45%] flex flex-col ml-[2%] ">
                  <p className="font-normal text-[13px] opacity-50">
                    Middle Name
                  </p>
                  <input
                    value={dataValue.middle_name}
                    onChange={(e) =>
                      setDataValue({
                        ...dataValue,
                        middle_name: e.target.value,
                      })
                    }
                    className="w-[240px] h-[35px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] px-[17px] placeholder-[#0000001a]"
                    type="text"
                    placeholder="Pablo"
                  />
                </div>
              </div>
              <div className="flex flex-row mt-[13px]">
                <div className="w-[45%] flex flex-col ml-[5%] ">
                  <p className="font-normal text-[13px] opacity-50">
                    Last Name
                  </p>
                  <input
                    value={dataValue.lastname}
                    onChange={(e) =>
                      setDataValue({ ...dataValue, lastname: e.target.value })
                    }
                    className="w-[240px] h-[35px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] px-[17px] placeholder-[#0000001a]"
                    type="text"
                    placeholder="Dela Cruz"
                  />
                </div>
                <div className="w-[45%] flex flex-col ml-[2%] justify-end">
                  <p className="font-normal text-[13px] opacity-50">
                    Email Address
                  </p>
                  <input
                    value={dataValue.email}
                    onChange={(e) => {
                      setDataValue({ ...dataValue, email: e.target.value });
                      setEmail(e.target.value);
                    }}
                    className="w-[240px] h-[35px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] px-[17px] placeholder-[#0000001a]"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
              <div className="flex flex-row mt-[13px]">
                <div className="w-[45%] flex flex-col ml-[5%] justify-end">
                  <p className="font-normal text-[13px] opacity-50">
                    Home Address
                  </p>
                  <input
                    className="w-[240px] h-[35px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] px-[17px] placeholder-[#0000001a]"
                    type="text"
                    placeholder="Metro Manila, Philippines"
                  />
                </div>
                <div className="w-[45%] flex flex-col ml-[2%] justify-end">
                  <p className="font-normal text-[13px] opacity-50">
                    Mobile Number
                  </p>
                  <div className="relative">
                    <p className="font-normal text-[14px] absolute top-[12px] left-[10px] border-r pr-2 text-[#0000001a]">
                      +63
                    </p>
                    <input
                      className="w-[240px] h-[35px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] pl-[52px] placeholder-[#0000001a]"
                      type="text"
                      placeholder="0000000000"
                    />
                  </div>
                </div>
              </div>
              {newRoleOpen && type === "Employee" && (
                <div className="flex flex-row mt-[13px] transition duration-300 ease-in-out">
                  <div className="w-[45%] flex flex-col ml-[5%] justify-end">
                    <p className="font-normal text-[13px] opacity-50">Role</p>
                    <button className="w-[240px] h-[35px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] text-left px-[17px]">
                      {assignNewRole}
                    </button>
                  </div>
                </div>
              )}
              {typePoliticianEVR && (
                <>
                  <div className="w-[45%] flex flex-col ml-[5%] justify-end mt-[13px] transition duration-300 ease-in-out">
                    <p className="font-normal text-[13px] opacity-50">
                      EVR No.
                    </p>
                    <input
                      value={dataValue.EVR_No}
                      onChange={(e) =>
                        setDataValue({ ...dataValue, EVR_No: e.target.value })
                      }
                      className="w-[240px] h-[35px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] font-normal text-[14px] px-[17px] placeholder-[#0000001a]"
                      type="text"
                      placeholder="0000-000-000"
                    />
                  </div>
                  <hr className="border-t-[1px] border-[#0000001a] w-[90%] ml-[5%] mt-6" />
                </>
              )}
              {assignNo && (
                <div className="flex flex-col">
                  <div className="flex flex-row items-center pl-[30px] mt-4 transition duration-300 ease-in-out">
                    <img className="w-5 h-5" src="/icon/questionmark.svg" />
                    <p className="font-normal text-[14px] ml-1">
                      Do you wish to assign a role to this new user?
                    </p>
                    <button
                      onClick={handleClickNo}
                      className="bg-[#D9D9D9] w-[40px] h-[32px] rounded-[5px] text-white font-normal text-[13px] ml-4"
                    >
                      No
                    </button>
                    <button
                      onClick={() => {
                        setToggleYes(!toggleYes);
                        setAddNewRole(false);
                      }}
                      className="bg-[#303079] transition duration-300 ease-in-out w-[40px] h-[32px] rounded-[5px] text-white font-normal text-xs ml-2"
                    >
                      Yes
                    </button>
                  </div>
                  {toggleYes && (
                    <div className="flex flex-col w-full mt-3 pl-[30px] pr-[20px] transition duration-300 ease-in-out">
                      <p className="font-normal text-[14px] opacity-50">
                        If yes, please select a role from the available options.
                        If the desired role is not listed, you can create a new
                        role for them.
                      </p>
                      <div className="flex flex-row items-center mt-2">
                        <div className="relative">
                          <input
                            onChange={(e) =>
                              handleNewRoleSubmit(e.target.value)
                            }
                            onClick={() => {
                              newAddedRole
                                ? handleNewRoleSubmit(newAddedRole)
                                : null;
                            }}
                            className={`w-[240px] h-[40px] rounded-[10px] border-[#0000001a] border-[1px] mt-[5px] cursor-pointer text pl-[15px] font-normal text-[14px] ${
                              newAddedRole ? "text-black" : "text-[#0000001a]"
                            }`}
                            type="text"
                            value={
                              newAddedRole ? newAddedRole : "Select a role"
                            }
                          />
                          <img
                            onClick={() => setSelectRole(!selectRole)}
                            className="absolute w-[24px] h-[24px] top-[12px] right-[10px] cursor-pointer"
                            src="/icon/dropdown1.svg"
                          />
                          {selectRole && (
                            <div className="w-[100%] absolute flex flex-col font-normal text-sm rounded-br-[10px] rounded-bl-[10px] bg-white shadow-[0_1px_2.9px_0_rgba(0,0,0,0.25)] transition duration-300 ease-in-out">
                              {newRoles.map((role, index) => (
                                <button
                                  key={index}
                                  onClick={() => {
                                    submitNewRole(role.role_type);
                                    setNewAddedRole(role.role_type);
                                  }}
                                  className="text-left pl-[10px] py-2 w-full hover:bg-[#D9D9D9]"
                                >
                                  {role.role_type}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        <button
                          onClick={() => {
                            setAddNewRole(!addNewRole);
                            setToggleYes(false);
                          }}
                          className="font-semibold text-[14px] text-[#23b2ff] pl-3 transition duration-300 ease-in-out cursor-pointer"
                        >
                          Add new role...
                        </button>
                      </div>
                    </div>
                  )}
                  {addNewRole && (
                    <div className="flex flex-col w-full mt-3 pl-[60px] pr-[50px] transition duration-300 ease-in-out">
                      <h3 className="font-medium text-lg">Roles</h3>
                      <p className="font-normal text-sm opacity-50 mt-1">
                        These role descriptions outline the core
                        responsibilities and duties
                      </p>
                      <div className="w-full flex flex-wrap items-center mt-1">
                        {newRoles.map((role, index) => (
                          <div
                            key={index}
                            className="flex items-center align-middle mt-1"
                          >
                            <div className="ml-1 relative">
                              <button
                                onClick={() => {
                                  handleNewRoleSubmit(role.role_type);
                                }}
                                className="px-3 pr-6 py-1 h-[30px] rounded-full bg-[#303079] font-medium text-[14px] text-white"
                              >
                                {role.role_type}
                              </button>
                              <img
                                onClick={() => {
                                  setRoleDeletedId(role._id);
                                  setDeleteDecision(true);
                                  setNewRoleOpen(false);
                                }}
                                className="w-5 h-5 rounded-full absolute top-[5px] right-1 cursor-pointer"
                                src="/icon/close.svg"
                              />
                            </div>
                          </div>
                        ))}
                        {inputNewRoleOpen ? (
                          <div className="flex items-center ml-1 mt-1">
                            <input
                              value={newSubmittedRole.role_type}
                              onChange={(e) =>
                                setNewSubmittedRole({
                                  ...newSubmittedRole,
                                  role_type: e.target.value,
                                })
                              }
                              className="border w-[130px] border-[#303079] focus:border-[#303079] py-1 h-[30px] rounded-full font-medium text-sm px-2"
                              type="text"
                            />
                            <button
                              onClick={handleSubmitNewRole}
                              className="h-[30px] w-[30px] ml-1 rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center p-[5px]"
                            >
                              <img src="/icon/checkblue.svg" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setInputNewRoleOpen(true)}
                            className="h-[30px] w-[30px] ml-1 rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-1 flex items-center justify-center"
                          >
                            <img
                              className="h-[30px] w-[30px]"
                              src="/icon/addblue.svg"
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {typePolitician && (
                <div className="w-[90%] ml-[5%] h-[30%] pt-5 transition duration-300 ease-in-out">
                  <h2 className="font-normal text-[15px] w-[10%]  border-l-[5px] border-[#303079] pl-[10px]">
                    Services
                  </h2>
                  <p className="w-full pl-[15px] font-normal text-[13px] opacity-50">
                    Please choose the services you provide from the following
                    options, and feel free to add or specify any that are not
                    listed.
                  </p>
                  <p className="pl-[15px] text-xs opacity-50 mt-3">
                    Suggestion
                  </p>
                  <div className="flex flex-row justify-between mt-2">
                    {newServices.map(
                      (service, index) =>
                        index < 4 && (
                          <button
                            key={index}
                            onClick={() =>
                              selectedChoices(service.service_name)
                            }
                            className="px-[5px] text-[#303079] py-[3px] border-[#303079] border-[1px] rounded-full font-normal text-[12px] hover:bg-[#303079] hover:text-white"
                          >
                            {service.service_name}
                          </button>
                        )
                    )}
                    <button
                      onClick={() => {
                        setAddNewServices(true);
                        setTypePolitician(false);
                      }}
                      className="font-medium text-[#303079] text-[12px]"
                    >
                      Add more...
                    </button>
                  </div>
                  {visibleChoices && (
                    <div className="mt-3 pl-1">
                      <p className="font-normal text-xs opacity-50 mb-[2px]">
                        List you added
                      </p>
                      <div className="border border-[#eeeeee] w-full min-h-[100px]">
                        <div className="flex flex-wrap items-center gap-1 rounded-[10px] p-1 py-1">
                          {serviceChoices.map((choice, index) => (
                            <button
                              key={index}
                              className="px-[5px] text-white bg-[#303179] py-[3px] pr-[20px] border-[1px] border-[#303079] rounded-full font-normal text-[12px] relative"
                            >
                              {choice}
                              <img
                                onClick={() => removeChoice(choice, index)}
                                src="/icon/cancel.svg"
                                alt="cancel"
                                className="absolute w-[15px] h-[15px] top-[5px] right-[4px]"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {addNewServices && (
                <div className="flex flex-col w-full mt-3 pl-[40px] pr-[50px] transition duration-300 ease-in-out">
                  <h3 className="font-medium text-lg">Services</h3>
                  <p className="font-normal text-sm opacity-50 mt-1">
                    These services descriptions outline the core
                    responsibilities and duties
                  </p>
                  <div className="w-full flex flex-wrap items-center mt-1">
                    {newServices.map((service) => (
                      <div
                        key={service._id}
                        className="flex items-center align-middle mt-1"
                      >
                        <div className="ml-1 relative">
                          <button
                            onClick={() =>
                              handleNewServiceSubmit(service.service_name)
                            }
                            className="px-3 pr-6 py-1 h-[30px] rounded-full bg-[#303079] font-medium text-[14px] text-white"
                          >
                            {service.service_name}
                          </button>
                          <img
                            onClick={() => {
                              handleServiceDelete(service._id);
                            }}
                            className="w-5 h-5 rounded-full absolute top-[5px] right-1 cursor-pointer"
                            src="/icon/close.svg"
                          />
                        </div>
                      </div>
                    ))}
                    {inputNewServiceOpen ? (
                      <div className="flex items-center ml-1">
                        <input
                          value={newSubmittedService.service_name}
                          onChange={(e) =>
                            setNewSubmittedService({
                              ...newSubmittedService,
                              service_name: e.target.value,
                            })
                          }
                          className="border w-[130px] border-[#303079] focus:border-[#303079] py-1 h-[30px] rounded-full font-medium text-sm px-2"
                          type="text"
                        />
                        <button
                          onClick={handleSubmitNewService}
                          className="h-[30px] w-[30px] ml-1 rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center p-[5px]"
                        >
                          <img src="/icon/checkblue.svg" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setInputNewServiceOpen(true)}
                        className="h-[30px] w-[30px] ml-1 rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-1 flex items-center justify-center"
                      >
                        <img
                          className="h-[30px] w-[30px]"
                          src="/icon/addblue.svg"
                        />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="ml-[65%] mb-[15px] mt-[20px]">
              <div className="flex flex-row justify-between w-[160px] ">
                <button
                  onClick={() => {
                    addNewClick();
                    closeButton();
                  }}
                  className="w-[73px] h-[42px] rounded-[10px] bg-[#e7e7e7] font-medium text-sm text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={submitNewUser}
                  className="w-[73px] h-[42px] rounded-[10px] bg-[#303079] font-medium text-sm text-white"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          {deleteDecision && (
            <div className="absolute top-0 right-0 left-0 bottom-0 transition duration-300 ease-in-out">
              <div className="flex justify-center items-center w-full h-full">
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#0000001a]"></div>
                <div className="w-[380px] h-[260px] bg-white rounded-[10px] z-10 flex flex-col justify-center items-center shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                  <img
                    className="h-[82px] w-[82px]"
                    src="/icon/deleteWarning.svg"
                    alt=""
                  />
                  <p className="font-medium text-center text-base">
                    You’re going to delete this role. <br />
                    Are you sure?
                  </p>
                  <div className="mt-5">
                    <button
                      onClick={() => setDeleteDecision(!deleteDecision)}
                      className="w-[90px] h-[45px] rounded-[10px] bg-[#F5C8C1] font-medium text-sm text-white"
                    >
                      No
                    </button>
                    <button
                      onClick={handleNewRoleDelete}
                      className="w-[90px] h-[45px] ml-4 rounded-[10px] bg-[#303179] font-medium text-sm text-white"
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {emailSentOpen && (
            <div className="absolute top-0 right-0 left-0 bottom-0 transition duration-300 ease-in-out">
              <div className="flex justify-center items-center w-full h-full">
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#0000001a]"></div>
                <div className="h-[52px] w-[450px] rounded-[10px] flex flex-row items-center justify-center bg-[#12174F] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                  <img src="/icon/checkall.svg" alt="" />
                  <p className="fonr-medium text-[15px] text-white ml-2">
                    {`Email sent to ${email}`}
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </section>
  );
};
export default addUserModal;
