import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Service from "./pages/service/Service";
import AdminPage from "./pages/admin/AdminPage";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/services" element = {<List/>} />
          <Route path="/services/:id" element = {<Service/>} />
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
