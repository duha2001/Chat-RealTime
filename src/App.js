import "./App.css";
import Login from "./components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<ChatRoom />} path="/"></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
