import { Thumbnail } from "../components/dashboard/Thumbnail";


const Dashboard = () => {
    const list = [1, 2, 3, 4, 5, 6];

    return (
        <div className="h-screen flex flex-col p-10 bg-white">
            <p className="text-2xl">Welcome Back!</p>
            <p className="text-xl">My Graphs</p>
            <div className="grid grid-cols-4 gap-2">
                {list?.map((_, id) => (
                    <Thumbnail graphId={id}/>
                ))
                }
            </div>
        </div>
    )

}

export default Dashboard