import { ChevronDown, ChevronUp } from "lucide-react";


interface IncrementButtonProps {
    increase: () => void;
    decrease: () => void
}

export const IncrementButton = ({ increase, decrease }: IncrementButtonProps) => {
    return (
        <div className="flex flex-col">
            <ChevronUp size={20} onClick={() => increase()} />
            <ChevronDown size={20} onClick={() => decrease()} />
        </div>
    )
}