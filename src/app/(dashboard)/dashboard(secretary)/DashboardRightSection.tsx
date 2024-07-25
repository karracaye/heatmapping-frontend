"use client";
import React, { useEffect, useState } from "react";
import cityconstant from "@/utility/cityconstant";
import axios from "@/lib/axios";

type barangayData = {
  _id: string;
  brgy_name: string;
};

type barangayBeneficiary = {
  _id: string;
  service_name: string;
  politician: null;
};
const DashBoardRIghtSection = () => {
  const [items, setItems] = useState([]);
  const [openFilter, setOpenFilter] = useState(false); //Will toggle the choices in the filter button
  const [services, setServices] = useState(""); //Will get the value, when you click the button in services
  const [barangayID, setBarangayID] = useState("");
  const handleServiceClick = (service: string) => {
    setServices(service);
    setOpenFilter(false);
  };
  const [barangayData, setBarangayData] = useState<barangayData[]>([]);
  const [defaultBarangay, setDefaultBarangay] = useState<barangayData[]>([]);
  const [barangayBeneficiary, setBarangayBeneficiary] = useState<
    barangayBeneficiary[]
  >([]);

  useEffect(() => {
    axios.instance
      .get("/barangays", axios.authorization)
      .then((response) => {
        setBarangayData(response.data);
        setDefaultBarangay(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios.instance
      .get("/services", axios.authorization)
      .then((response) => {
        console.log(response.data);
        setBarangayBeneficiary(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChoiceBrgy = async (barangay) => {
    {
      barangayBeneficiary.forEach((brgy) => {
        if (brgy.service_name === barangay) {
          setServices(barangay);
          setBarangayID(brgy._id);
          setOpenFilter(false);
        }
      });
    }
  };

  useEffect(() => {
    if (!barangayID) {
      return;
    }
    axios.instance
      .get("beneficiaries-services/perBrgy", {
        params: {
          service: barangayID,
        },
        headers: axios.authorization.headers,
      })
      .then((response) => {
        // setBarangayData(response.data);
        console.log(response.data);
        setBarangayData(response.data);
      })
      .catch((err) => console.log(err));
  }, [barangayID]);

  useEffect(() => {
    setItems(cityconstant.city);
  }, [cityconstant.city]);

  const handleClearBrgy = () => {
    setServices("");
    setBarangayData(defaultBarangay);
    console.log(defaultBarangay);
  };
  return (
    <div className="flex flex-grow p-4 w-full h-full">
      <div className="grid grid-cols-3 gap-4 mt-5 w-full h-full">
        <div className="grid grid-cols-5 col-span-2 justify-between bg-white shadow rounded-xl p-4">
          <div className=" py-2 px-4 col-span-3">
            <div>
              <p className="text-xl"> Lipa, Batangas Philippines</p>
              <p className="text-xs pt-1 opacity-50">
                {" "}
                72 third level subdivisions
              </p>
            </div>
            <img className="w-[400px] h-[400px]" src="../icon/map.svg" />
          </div>
          <div className="pt-2 px-10 col-span-2 flex flex-col justify-between">
            <div className="">
              <p className="text-3xl"> Wednesday</p>
              <p className="text-sm opacity-50"> July 20, 2024</p>
            </div>
            <div className="mb-5 py-10">
              <p className="text-sm opacity-50"> Total Location</p>
              <p className="text-3xl">San Guillermo</p>
              <p className="text-sm pt-4 opacity-50"> Population</p>
              <p className="text-3xl">5,394</p>
            </div>
          </div>
        </div>
        <div className="p-6 grid col-span-1 bg-white shadow rounded-xl w-full">
          <div>
            <div className="flex justify-between">
              <div>
                <button
                  onClick={() => {
                    handleClearBrgy();
                  }}
                  className="font-normal text-[20px]"
                >
                  Lipa Barangays{" "}
                </button>
                <p className="text-[17px] font-medium absolute top-[210px]">
                  {services}
                </p>
              </div>
              <button
                onClick={() => setOpenFilter(!openFilter)}
                className="flex flex-row justify-center items-center w-[76px] h-[30px] rounded-[5px] border border-black opacity-25 font-medium text-[13px] mr-1"
              >
                <img className="w-[13px] h-5 mr-2" src="/icon/filter.svg" />{" "}
                Filter
              </button>
              {openFilter && (
                <div className="absolute flex flex-col bg-white rounded-bl-[10px] rounded-br-[10px] shadow-[0_2px_1px_0_rgba(0,0,0,0.25)] right-[60px] top-[195px] border">
                  <button
                    onClick={() => {
                      handleChoiceBrgy("Medical Assistance");
                      setItems(cityconstant.Medical);
                    }}
                    className="px-4 py-2 font-medium text-[13px] hover:bg-[#D9D9D9]"
                  >
                    Medical Assistance
                  </button>
                  <button
                    onClick={() => {
                      handleChoiceBrgy("Legal Consultation");
                      setItems(cityconstant.Consultation);
                    }}
                    className="px-4 py-2 font-medium text-[13px] hover:bg-[#D9D9D9]"
                  >
                    Legal Consultation
                  </button>
                  <button
                    onClick={() => {
                      handleChoiceBrgy("Livelihood");
                      setItems(cityconstant.Livelyhood);
                    }}
                    className="px-4 py-2 font-medium text-[13px] hover:bg-[#D9D9D9]"
                  >
                    Livelyhood
                  </button>
                  <button
                    onClick={() => {
                      handleChoiceBrgy("Donation");
                      setItems(cityconstant.Donation);
                    }}
                    className="px-4 py-2 font-medium text-[13px] hover:bg-[#D9D9D9]"
                  >
                    Donation
                  </button>
                  <button
                    onClick={() => {
                      handleChoiceBrgy("Scholarship");
                      setItems(cityconstant.Scholarship);
                    }}
                    className="px-4 py-2 font-medium text-[13px] hover:bg-[#D9D9D9]"
                  >
                    Scholarship
                  </button>
                  <button
                    onClick={() => {
                      handleChoiceBrgy("Solicitation");
                      setItems(cityconstant.Solicitation);
                    }}
                    className="px-4 py-2 font-medium text-[13px] rounded-br-[10px] rounded-bl-[10px] hover:bg-[#D9D9D9]"
                  >
                    Solicitation
                  </button>
                </div>
              )}
            </div>
            <div className="flex flex-row pt-[60px] justify-between py-4 px-1">
              <div className="flex flex-col w-[45%]">
                {barangayData.map(
                  (data, index) =>
                    index < 10 && (
                      <p
                        key={index}
                        className="font-normal text-[15px] mt-[2px]"
                      >
                        <span className="mr-2">{index + 1}</span>
                        {data.brgy_name}
                      </p>
                    )
                )}
              </div>
              <div className="flex flex-col w-[45%]">
                {barangayData.map(
                  (data: any, index: number) =>
                    index >= 10 && (
                      <p
                        key={index}
                        className="font-normal text-[15px] mt-[2px]"
                      >
                        <span className="mr-2">{index + 1}</span>
                        {data.brgy_name}
                      </p>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-4"></div>
        <div className="bg-white shadow rounded-xl  p-4"></div>
      </div>
    </div>
  );
};

export default DashBoardRIghtSection;
