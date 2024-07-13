export function Header({ category, label }) {
    return (
        <div className="flex flex-wrap flex-col w-auto border-b-[1px] pb-2">
            <text className=" text-black text-sm font-bold">
                {category}
            </text>
            <text className=" text-gray-300 font-bold text-xs">
                {label}
            </text>
        </div>
    );
}