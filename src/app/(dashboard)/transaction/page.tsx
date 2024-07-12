"use client";
import { useState, useEffect } from "react"
// import axios from "axios"
import TransactionRightSection from "./TransactionRightSection";
import Frame16 from "./AddNewModal";
import ImportModal from "@/components/importModal";
const Transaction = () => {
  const [addNew, setAddNew] = useState(false);//TOggle the add new section
  const [addressButton, setAddressButton] = useState(false);//Toggle service option
  const [serviceButton, setServiceButton] = useState(false);//TOggle services option
  // const [dataValue, setDataValue] = useState([]);//Storage of the datapen
  const [importModalOpen, setImportModalOpen] = useState(false);//Toggle import modal

// useEffect(() => {
//   axios.get('http://localhost:3500/users')
//   .then(res => setDataValue(res.data))
//   .catch(err => console.log(err))
// })

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
    <div className="flex">
      <TransactionRightSection
      addNewClick={addNewClick}
      importModalOpen={importModalOpen}
      setImportModalOpen={setImportModalOpen}/>
      <Frame16 
        addNew={addNew}
        addNewClick={addNewClick}
        toggleServiceButton={toggleServiceButton}
        addressButton={addressButton}
        serviceButton={serviceButton}
      />
      {importModalOpen && <ImportModal 
      setImportModalOpen={setImportModalOpen}/>}
    </div>
  );
};

export default Transaction;
