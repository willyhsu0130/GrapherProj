import { Link } from "react-router-dom"


interface ThumbnailProps {
    graphId: number;
}
export const Thumbnail = ({ graphId }: ThumbnailProps) => {
    return (
        <div className="m-3 p-2 border-2 border-white ">
            <Link to={`/graphs/${graphId}`}>
                <p>{graphId}</p>
                <img className=""></img>
            </Link>
        </div>
    )
}