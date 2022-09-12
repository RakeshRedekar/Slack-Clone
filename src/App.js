import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import "./App.css";
import Chat from "./Chat";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { store } from "./store";

function App() {
  const { user } = useSelector((store) => store);

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="appBody">
            <Sidebar />
            <Routes>
              <Route path=":roomID" element={<Chat />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
