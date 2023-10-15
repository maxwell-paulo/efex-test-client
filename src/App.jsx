import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, UserList, CreateUser } from "./pages";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/new-user" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
