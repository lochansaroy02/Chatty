import { useEffect } from 'react';
import { useDataStore, useSocketStore, useTextStore } from '../utils/store'

const MessageInput = () => {

    const { setText, text } = useTextStore();
    const { setData } = useDataStore()

    const { socket } = useSocketStore()

    const sendMessage = () => {
        if (text.trim() === '') return;
        //@ts-ignore
        socket?.send(JSON.stringify({
            type: "chat",
            payload: {
                message: text
            }
        }))
        setText('');

    }

    useEffect(() => {
        //@ts-ignore
        socket.onmessage = (event) => {
            setData(event.data)
        }
        // console.log(data)
    }, [])

    return (
        <div className="flex   items-center justify-between  mt-2   gap-2 " >

            <input value={text} onChange={
                (e) => {
                    setText(e.target.value)
                }

            } className=" outline-neutral-400 text-neutral-100  outline w-full rounded-md px-2 py-1 " type="text" placeholder="enter text" />
            <button onClick={sendMessage} className="bg-neutral-200  px-2 py-1  rounded-md">send </button>
        </div>
    )
}

export default MessageInput