// "use client";
// import { useState, useEffect } from "react"
// // import axiosInstance from "@/api/axiosInstance";
// import UserRightSection from "./UserRightSection";
// import Frame17 from "./Frame17";
// const User = () => {
//   const [addNew, setAddNew] = useState(false);
//   const [Data, setData] = useState([]);//Data in the json server

//   // useEffect(() => {
//   //   const fetchPosts = async () => {
//   //     try {
//   //       const response = await axiosInstance.get('/users');
//   //       setData(response.data);
//   //       } catch (err) {
//   //       console.log(err);
//   //       }
//   //   }
//   //   fetchPosts();
//   // }, [])
//   const addNewClick = () => {
//     setAddNew(!addNew);
//   };

//   return (
//     <div>
//       <UserRightSection 
//       addNewClick={addNewClick}
//       />
//       <Frame17
//       addNewClick={addNewClick}
//       addNew={addNew}/>
//     </div>
//   );
// };

// export default User;
