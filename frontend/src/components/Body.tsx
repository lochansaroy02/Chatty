
import { useEffect } from "react"
import MessageBody from "./MessageBody"
import MessageInput from "./MessageInput"
import Room from "./Room"
import { useDataStore, useRoomStore, useSocketStore, } from "../utils/store"

const Body = () => {

    const { setSocket } = useSocketStore()
    const { setData } = useDataStore();
    const { room } = useRoomStore()

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");
        setSocket(ws);
        ws.onopen = () => {
            ws.send(JSON.stringify({
                type: "join",
                payload: {
                    roomId: room
                }
            }))
        }
        ws.onmessage = (e) => {
            setData(e.data)
        }

        ws.onerror = () => {

        }
        ws.onclose = () => {

        }
    }, [])
    return (
        <div className='h-full w-full relative '>
            <Room />
            <MessageBody />
            <MessageInput />
        </div>
    )
}

export default Body