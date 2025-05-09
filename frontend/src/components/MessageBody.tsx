import { useDataStore } from "../utils/store"

const MessageBody = () => {

    const { data } = useDataStore();


    return (
        <div className="  mt-2 overflow-y-scroll h-[60vh]  rounded-md border border-neutral-400  ">

            {data.length == 0 ?
                <div className="h-full flex items-center justify-center text-white">
                    <h1>no messege found</h1>
                </div> :

                <div className="m-2   flex  flex-col  gap-2 ">
                    {
                        data.map((item) => (
                            <div className="bg-white flex rounded-md   items-center justify-center  w-fit px-2 py-1 ">
                                <h1>
                                    {item}
                                </h1>
                            </div>
                        ))
                    }
                </div>




            }
        </div >
    )
}

export default MessageBody