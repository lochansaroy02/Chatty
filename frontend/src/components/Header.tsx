import { MessageCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()


    return (
        <div onClick={() => {
            navigate("/")
        }}
            className="px-2 ">
            <div className="flex cursor-pointer  gap-2 items-center text-neutral-100 ">
                <span><MessageCircle /> </span>
                <h1 className="text-2xl"  >Chatty </h1>
            </div>
            <p className="text-neutral-100">Real-time Chat Application </p>
        </div>
    )
}

export default Header