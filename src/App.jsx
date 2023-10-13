import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, UserList, CreateUser } from "./pages";

function App() {
  return (
    <BrowserRouter>
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
