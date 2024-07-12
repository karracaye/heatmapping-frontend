const Template = (props) => {
  return (
    <div id="template" className="w-full bg-[#F8F8F8]">
      <div className="w-full h-full top-0 pl-6 pr-2 pb-5 pt-2">
        <div className="min-h-full max-h-full relative bg-white rounded-[10px] shadow-[0_0_2px_2px_rgba(0,0,0,0.03)]">
          { props.children }
        </div>
      </div>
    </div>
  );
};

export default Template;
