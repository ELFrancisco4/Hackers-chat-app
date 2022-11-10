import "./styles/Globals.scss";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import ChatRoom from "./Pages/ChatRoom";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<ChatRoom />} path="/chatroom" />
      </Routes>
    </div>
  );
};

export default App;
