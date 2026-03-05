import { User } from "lucide-react"
import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
        <div className="flex ">
            <Link to="/user"><User color="black" width={30} /></Link>
        </div>
    )

}