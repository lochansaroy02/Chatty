import { useNavigate } from "react-router-dom";
import { useRoomStore } from "../utils/store"

const Home = () => {


    const { setRoom, room } = useRoomStore();

    const navigate = useNavigate()
    const generateRoom = () => {
        const length: number = 5
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let id = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            id += chars[randomIndex];
        }
        setRoom(id);
    }



    const joinRoom = () => {
        navigate(`/${room}`)
    }
    return (
        <div className="text-white flex gap-2 mt-8   flex-col ">
            < input value={room} onChange={
                (e) => {
                    setRoom(e.target.value)
                }
            } className=" outline-neutral-400 text-neutral-100  outline w-full rounded-md px-2 py-1 " type="text" placeholder="enter text" />
            <button onClick={generateRoom} className="bg-neutral-200 text-neutral-800  px-2 py-1  rounded-md"> Generate </button>
            <button onClick={joinRoom} className="bg-neutral-200 text-neutral-800  px-2 py-1  rounded-md"> join </button>
        </div >
    )
}

export default Home