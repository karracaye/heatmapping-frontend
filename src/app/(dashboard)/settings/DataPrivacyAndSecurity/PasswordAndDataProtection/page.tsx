export default function PasswordAndDataProtection() {
  const accessRecovery = [{
    category: "Change Password", data:[]
  },
  { 
    category: "Email Address",data:[]
  },
  {
    category: "Two-Step Authentication",data:[]
  },
  {
    category: "Device Activity", data:[]
  }

];

  return (
    <>
      <div className="flex flex-col">
        <text className="text-black text-xs">Access and recovery</text>
        <text className="text-gray-300 text-xs">
          Manage your password, login preferences and recovery methods
        </text>
        <div className="flex flex-col mt-5">
          {accessRecovery.map((item, idx) => (
            <div
              className="border-[1px] text-xs text-black p-3 mb-2 rounded-md"
              key={idx}
            >{`${item.category}`}</div>
          ))}
        </div>
      </div>
    </>
  );
}
