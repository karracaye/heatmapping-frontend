"use client";
import { useState, useEffect } from "react"
import axios from "axios"
import TransactionRightSection from "./TransactionRightSection";
import Frame16 from "./Frame16";
const Transaction = () => {
  const [addNew, setAddNew] = useState(false);//TOggle the add new section
  const [addressButton, setAddressButton] = useState(false);//Toggle service option
  const [serviceButton, setServiceButton] = useState(false);//TOggle services option
  const [dataValue, setDataValue] = useState([]);//Storage of the data

useEffect(() => {//Get the data in json server and store it in dataValue
  axios.get('http://localhost:3500/users')
  .then(res => setDataValue(res.data))
  .catch(err => console.log(err))
})

  const toggleAddressButton = () => {
    setAddressButton(!addressButton);
  };
  
  const toggleServiceButton = () => {
    setServiceButton(!serviceButton);
  };

  const addNewClick = () => {
    setAddNew(!addNew);
    setAddressButton(false);
    setServiceButton(false);
  };
  return (
    <div>
      <TransactionRightSection 
      dataValue={dataValue}
      addNewClick={addNewClick}
      />
      <Frame16 
        addNew={addNew}
        addNewClick={addNewClick}
        toggleAddressButton={toggleAddressButton}
        toggleServiceButton={toggleServiceButton}
        addressButton={addressButton}
        serviceButton={serviceButton}
      />
    </div>
  );
};

export default Transaction;
