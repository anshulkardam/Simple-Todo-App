export const Navbar = () => {

    return (
        <div className="flex justify-between py-2 pl-4 pr-3 bg-slate-600 text-white">
            <div>Task Planner</div>
            <ul className="flex gap-3 hover:cursor-pointer ">
                <li className="hover:font-semibold">Home</li>
                <li className="hover:font-semibold">Your Tasks</li>
            </ul>
        </div>
    )
}