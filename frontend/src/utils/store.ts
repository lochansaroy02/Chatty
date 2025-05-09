import { create } from "zustand";
const ws = new WebSocket("ws://localhost:8080")

type SocketType = {
    socket: WebSocket | undefined
    setSocket: (socket: WebSocket) => void
}

export const useSocketStore = create<SocketType>((set) => ({
    socket: ws,
    setSocket: (socket: WebSocket) => set(() => ({ socket }))
}))


type IMassages = {
    text: string,
    setText: (text: string) => void
}

export const useTextStore = create<IMassages>((set) => ({
    text: "",
    setText: (text: string) => set(() => ({ text }))
}))



type Message = string; // or replace with your actual data type

type IData = {
    data: Message[];
    setData: (newMessage: Message) => void;
};

export const useDataStore = create<IData>((set) => ({
    data: [],
    setData: (newMessage) =>
        set((state) => ({
            data: [...state.data, newMessage],
        })),
}));



type RoomData = {
    room: string,
    setRoom: (room: string) => void
}

export const useRoomStore = create<RoomData>((set) => ({
    room: "",
    setRoom: (room: string) => set(() => ({ room }))
}))