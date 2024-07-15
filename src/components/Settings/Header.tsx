export function Header({ category, label }) {
    return (
        <div className="flex flex-wrap flex-col border-b-[1px] pb-4">
            <text className=" text-black text-sm font-bold">
                {category}
            </text>
            <text className="text-gray-300 text-xs">
                {label}
            </text>
        </div>
    );
}