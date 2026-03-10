import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="h-[10%]">
                <Navbar />
            </div>

            <div className="flex-1">
                <Outlet/>
            </div>
        </div>
    )

}
export default MainLayout;