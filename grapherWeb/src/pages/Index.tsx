import { Link } from "react-router-dom"

const Index = () =>{

    return(
        <div className="bg-black h-screen">
            <Link to="/graphs">
                <p>My Graphs</p>
            </Link>
        </div>
    )

}

export default Index