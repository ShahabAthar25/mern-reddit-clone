import Navbar from "./components/navbar/Navbar";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#DAE0E6] dark:bg-[#030303] w-screen h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/create" element={<CreatePost />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
