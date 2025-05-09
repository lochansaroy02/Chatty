import { useEffect, useState } from "react";
import MessageInput from "./components/MessageInput";
import Body from "./components/Body";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";


const App = () => {



  // const sendMessage = () => {
  //   // alert(text)
  //   if (!socket) return

  //   socket.send(text)
  //   setText("")
  // }



  return (

    <Router>
      <div className=" h-screen flex flex-col items-center justify-center">
        <div className="rounded-md border border-neutral-500  py-6  px-2 w-[30vw] h-[90vh]">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Body />} />
          </Routes>
        </div>
        {/* <Home /> */}
      </div>
    </Router>
  )
}

export default App