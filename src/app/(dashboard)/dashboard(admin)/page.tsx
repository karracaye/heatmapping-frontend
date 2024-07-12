const DashboardAdmin = () => {

  return (
    <div id="template" className="h-full grid gap-5 grid-rows-7 grid-cols-5">
      <div className="row-span-4 col-span-3 bg-white rounded-[10px] shadow-[0_0_2px_2px_rgba(0,0,0,0.03)]">
        hey1
      </div>

      <div className="row-span-4 col-span-2 bg-white rounded-[10px] shadow-[0_0_2px_2px_rgba(0,0,0,0.03)]">
        <div className="h-[20%] flex items-center justify-between px-6">
          <p className="text-base">Lipa Barangays</p>

          <button className="flex items-center gap-2 border border-gray-400 text-gray-400 text-xs font-normal rounded-[10px] px-3 py-2">
            <img src="/icons/filter.svg" alt="" 
              className="h-3 opacity-30"
            />
            <p>Filter</p>
          </button>
        </div>

        <div className="h-[80%] text-sm px-6">
          <ol className="list-decimal grid grid-flow-row grid-cols-2 items-center gap-2 pl-5">
            <li>Adya</li>
            <li>Adya</li>
            <li>Adya</li>
            <li>Adya</li>
            <li>Adya</li>
            <li>Adya</li>
            <li>Adya</li>
            <li>Adya</li>
            <li>Adya</li>
            <li>Adya</li>
          </ol>
        </div>
      </div>

      <div className="row-span-3 col-span-3 bg-white rounded-[10px] shadow-[0_0_2px_2px_rgba(0,0,0,0.03)]">
        hey3
      </div>

      <div className="row-span-3 col-span-2 bg-white rounded-[10px] shadow-[0_0_2px_2px_rgba(0,0,0,0.03)]">
        hey4
      </div>
    </div>
  )
}

export default DashboardAdmin;