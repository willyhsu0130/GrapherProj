import { useAuth } from "../hooks/useAuth";

const User = () =>{
    const {logoutToken} = useAuth(

    )
    const handleLogout = () =>{
        logoutToken();
    }

    return(
        <div>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default User;