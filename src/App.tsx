import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Top from "./components/Top";
import Home from "./pages/Home";
import Work from "./pages/Work";
import History from "./pages/History";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Top />

      <main className="bg-gray-50 min-h-screen pt-20">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/History" element={<History />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
