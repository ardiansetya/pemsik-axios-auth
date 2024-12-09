import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import RenderData from "./pages/RenderData";

const App = () => {
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/data" element={<RenderData/>} />
      </Routes>
    </BrowserRouter>

};

export default App;
