import { useState } from "react";

const Alert = ({ id, button, icon, message, confirm }) => {
  const [ modal, setModal ] = useState(false);
  
  return (
    <>  
      <button onClick={ () => setModal(true) }
        className="rounded-full aspect-square flex items-center justify-center"
      >
        <img src={ button } alt="" />
      </button>
      
      {
        modal && (
          <div className={'w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.2)] z-50'}>
            <div className="w-[420px] h-[290px] flex flex-col items-center justify-center bg-white rounded-[10px] shadow-[0_2px_2px_2px_rgba(0,0,0,0.05)]">
              <img src={ icon } alt="" />
              <pre className="text-center font-medium font-plus-jakarta-sans">{ message }</pre>
              <div className="flex gap-3 font-medium text-lg text-white mt-6 mb-4">
                <button onClick={ () => (setModal(!modal), confirm(false)) }
                  className="w-[100px] bg-[#D9D9D9] rounded-[10px] py-4"
                >
                  No
                </button>
                <button onClick={ () => (setModal(!modal), confirm(true, id)) }
                  className="w-[100px] bg-guardsman-red rounded-[10px] py-4"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Alert;