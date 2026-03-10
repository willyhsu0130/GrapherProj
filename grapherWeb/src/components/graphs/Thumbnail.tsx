import { Link } from "react-router-dom"


interface ThumbnailProps {
    graphId: number;
    title: string;
}
export const Thumbnail = ({ graphId, title }: ThumbnailProps) => {
    return (
        <Link to={`/graphs/${graphId}`} className="flex flex-col hover:border-blue-500 h-full border border-black">
            <div className="bg-black h-[15%] flex items-center">
                <p className="text-white">{title}</p>
            </div>
            <div className="h-[85%]">
                <img className=""></img>
            </div>

        </Link>
    )
}