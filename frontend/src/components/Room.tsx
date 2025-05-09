import { useRoomStore } from "../utils/store"
import { Share2 } from 'lucide-react';
const Room = () => {

    const { room } = useRoomStore()


    return (
        <div className=" bg-neutral-400 flex mt-2   justify-between p-2  rounded-md">
            <h1>Room ID</h1>
            <h1>{room}</h1>
        </div>
    )
}

export default Room