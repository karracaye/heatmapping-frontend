"use client"
import { useState } from "react";
import Chart from "react-apexcharts";


const Profile = () => {
  const [donut, setDonut] =useState({
    
      options: {
        labels: ['Effectiveness', 'Productivity', 'Uploaded Files']
      
      },
        series: [41, 55, 500],
      
    }
  )
  const [graph, setGraph] = useState({
    
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "Reports",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
    
  })


      

    
  return (
    <div className="flex flex-col p-8">
      <div className="bg-[#373788] h-[120px] w-full">
      <img src="/images/Secretary-Lopez.png" className="absolute h-[170px] w-[170px] left-[170px] top-[170px]"/>
      </div>
        <div className="flex flex-col p-3 pl-[15rem]">
          <div className="flex items-center">
          <p className="text-lg font-semibold"> Selena Kathryn Lopez</p>
            <div className="h-4 w-10 bg-green-500 rounded-full ml-2 flex items-center justify-center">
              <p className="text-[9px] text-white"> Online </p>
            </div>
          </div>

            <p className="text-sm font-medium opacity-60"> Secretary</p>
          <div className="flex justify-between">
            <div className="flex py-1 opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="mt-1" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15c.81 0 1.5-.3 2.11-.89c.59-.61.89-1.3.89-2.11s-.3-1.5-.89-2.11C13.5 9.3 12.81 9 12 9s-1.5.3-2.11.89C9.3 10.5 9 11.19 9 12s.3 1.5.89 2.11c.61.59 1.3.89 2.11.89m0-13c2.75 0 5.1 1 7.05 2.95S22 9.25 22 12v1.45c0 1-.35 1.85-1 2.55c-.7.67-1.5 1-2.5 1c-1.2 0-2.19-.5-2.94-1.5c-1 1-2.18 1.5-3.56 1.5c-1.37 0-2.55-.5-3.54-1.46C7.5 14.55 7 13.38 7 12c0-1.37.5-2.55 1.46-3.54C9.45 7.5 10.63 7 12 7c1.38 0 2.55.5 3.54 1.46C16.5 9.45 17 10.63 17 12v1.45c0 .41.16.77.46 1.08s.65.47 1.04.47c.42 0 .77-.16 1.07-.47s.43-.67.43-1.08V12c0-2.19-.77-4.07-2.35-5.65S14.19 4 12 4s-4.07.77-5.65 2.35S4 9.81 4 12s.77 4.07 2.35 5.65S9.81 20 12 20h5v2h-5c-2.75 0-5.1-1-7.05-2.95S2 14.75 2 12s1-5.1 2.95-7.05S9.25 2 12 2"/></svg>
              <p className="text-sm px-1"> kathrynlopez@gmail.com</p>
            <div className="flex px-2"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="mt-1" viewBox="0 0 24 24"><path fill="currentColor" d="m5.41 21l.71-4h-4l.35-2h4l1.06-6h-4l.35-2h4l.71-4h2l-.71 4h6l.71-4h2l-.71 4h4l-.35 2h-4l-1.06 6h4l-.35 2h-4l-.71 4h-2l.71-4h-6l-.71 4zM9.53 9l-1.06 6h6l1.06-6z"/></svg>
              <p className="text-sm px-1"> 09428457128</p>
            </div>
            <div className="flex px-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="mt-1" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8"/></g></svg>
              <p className="text-sm px-1"> Metro Manila, Philippines</p>
            </div>
          </div>
          <div className="flex px-2 py-1">
            <div className="absolute right-[110px] top-[290px]">
             <p className="absolute left-5 rounded-full h-5 w-5 flex items-center justify-center bg-red-500 text-xs font-semibold text-white"> 3</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="mr-1" viewBox="0 0 24 24"><path fill="#373783" d="M17.616 21h.769v-2.5h2.5v-.77h-2.5v-2.5h-.77v2.5h-2.5v.77h2.5zM18 22.116q-1.671 0-2.835-1.165Q14 19.787 14 18.116t1.165-2.836T18 14.116t2.836 1.164T22 18.116q0 1.67-1.164 2.835Q19.67 22.116 18 22.116M7.5 8.73h9v-1h-9zM11.521 20H5.616q-.667 0-1.141-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h12.77q.666 0 1.14.475T20 5.615v5.95q-.494-.157-.991-.246q-.498-.088-1.009-.088q-.506 0-.984.08q-.477.08-.939.226V11.5H7.5v1h6.587q-.758.521-1.332 1.223t-.945 1.546H7.5v1h3.96q-.108.423-.169.853q-.06.43-.06.878q0 .46.054 1.009t.236.991"/></svg>
            </div>
            <div className="absolute right-[60px] top-[290px]">
             <p className="absolute left-5 rounded-full h-5 w-5 flex items-center justify-center bg-red-500 text-xs font-semibold text-white"> 12</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="mr-1" viewBox="0 0 24 24"><path fill="#373783" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"/></svg>
            </div>
            <div className="absolute right-[160px] top-[290px]">
             <p className="absolute left-5 rounded-full h-5 w-5 flex items-center justify-center bg-red-500 text-xs font-semibold text-white"> 5</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="mr-1" viewBox="0 0 2048 2048"><path fill="#373783" d="M0 1664v-640h384v640zM1920 384v384h-384V384zM1408 0v768h-256v896h-128V0zM512 1664V384h384v1280zm768-768h768v1152l-384-256l-384 256zm640 128h-512v785q65-43 128-85t128-86q65 42 128 85t128 86z"/></svg>
            </div>
            
            </div>
        </div>
      </div>
      <div className="flex grid grid-cols-2 gap-6">
        <div className="flex flex-col bg-white rounded-xl shadow p-8">
          <p className="font-semibold">Attending Meetings </p>
          <Chart
            options={graph.options}
            series={graph.series}
            type="line"
            width="550"
          />
        </div>
        <div className="flex flex-col py-8 bg-white rounded-xl shadow p-8">
          <p className="font-semibold">Weekly Performance </p>
          <Chart
            options={donut.options}
            series={donut.series}
            type="donut"
            width="500"
          />
        </div>
  </div>
  

      
        
</div>

    
    
  );

};


export default Profile;

