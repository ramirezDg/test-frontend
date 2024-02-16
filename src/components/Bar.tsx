import { CgMenuGridR } from "react-icons/cg";
import { FaRegCircleUser } from "react-icons/fa6";

const Bar = () => {
    return (
        <div className="absolute top-0 flex bg-gray-50 w-full p-4 justify-between  border-b-2" >
            <p className="font-light"><span className="font-medium text-gray-950">Agile content</span> Frontend test</p>
            <div  className="text-gray-500 text-2xl flex"><CgMenuGridR /><span className="ml-4  text-2xl"><FaRegCircleUser /></span>
        </div>
        </div>
    );
} 

export default Bar