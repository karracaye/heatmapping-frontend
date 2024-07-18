'use client';
import { useState } from "react";

const Popup = ({ name, children }) => {
  const [ modal, setModal ] = useState<boolean>(false);

  return (
    <div className="w-fit relative z-10">
      <button onClick={ () => setModal(!modal) }
        className="h-10 px-3 bg-guardsman-red rounded-[10px] font-medium text-white text-sm"
      >
        <p>{ name }</p>
      </button>

      <div className={`${ !modal ? 'invisible opacity-0' : '' } right-0 w-[420px] h-[210px] absolute top-12 bg-white rounded-[10px] shadow-[0_2px_2px_2px_rgba(0,0,0,0.05)]`}>
        { children }
      </div>
    </div>
  );
};

export default Popup;
