"use client";
import { useState, useEffect } from "react";
import UserRightSection from "./UserRightSection";
import AddUserModal from "./AddUserModal";
const User = () => {
  const [addNew, setAddNew] = useState(false);
  const [Data, setData] = useState([]); //Data in the json server

  const addNewClick = () => {
    setAddNew(!addNew);
  };

  return (
    <div className="flex">
      <UserRightSection addNewClick={addNewClick} />
      <AddUserModal addNewClick={addNewClick} addNew={addNew} />
    </div>
  );
};

export default User;
