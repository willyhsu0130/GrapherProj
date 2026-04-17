import { useError } from "@/hooks/useError"

const ErrorPage = () => {
    const { errorMessage } = useError()
    return (
        <div>
            <p>{errorMessage}</p>
        </div>

    )
}
export default ErrorPage