import React from 'react';

const Logs = () => {
  const logsUpdates = [
    // temporary data, change this after the backend
    {
      time: '2024-07-03  8:54 am',
      log: 'INFO',
      role: 'Secretary',
      name: 'Juan Dela Cruz',
      activity: 'Import a file for the following update of Quezon City Memorandum',
    },
    {
      time: '2024-09-14  10:00 am',
      log: 'NEW USER',
      role: 'Secretary',
      name: 'Selena Sario',
      activity: 'Created a new role',
    },
    {
      time: '2024-09-14  10:00 am',
      log: 'TRANSACTION',
      role: 'Secretary',
      name: 'Selena Sario',
      activity: 'Import a docx file for the transaction',
    },
    
  ];

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full px-4">
          <div className="bg-white shadow-md rounded my-6">
            <div className="flex justify-between border-b-2 mb-4 px-4 pt-5 py-4">
              <h2 className="text-2xl font-bold">Logs</h2>
              <div className="flex justify-center  bg-gray-300 p-2 rounded cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 text-white" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v2.086A2 2 0 0 1 20.414 8L15 13.414v7.424a1.1 1.1 0 0 1-1.592.984l-3.717-1.858A1.25 1.25 0 0 1 9 18.846v-5.432L3.586 8A2 2 0 0 1 3 6.586zM5 5v1.586l5.56 5.56a1.5 1.5 0 0 1 .44 1.061v5.175l2 1v-6.175c0-.398.158-.78.44-1.06L19 6.585V5z"/></g></svg>
                <p className="ml-1 px-1 text-white"> Filter </p>
                </div>
            </div>
            
            
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-[#D9D9D9] text-gray-600 text-sm leading-normal">
                    <th className="py-3 px-6 text-left font-medium">Timestamp</th>
                    <th className="py-3 px-6 text-left font-medium">Log Level</th>
                    <th className="py-3 px-6 text-left font-medium">Name</th>
                    <th className="py-3 px-6 text-left font-medium">Activity</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {logsUpdates.map((log, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">{log.time}</td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">{log.log}</td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">{log.name}</td>
                      <td className="py-3 px-6 text-left">{log.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
            </div>
            
          </div>
          <div>
          
              

              </div>


        </div>
        
      </div>
    </div>
  );
};

export default Logs;
