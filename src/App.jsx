import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Competition from "./pages/Competition";
import Datasets from "./pages/Datasets";
import Benchmarks from "./pages/Benchmarks";
import Codes from "./pages/Codes";
import Discussions from "./pages/Discussions";
import GameArenas from "./pages/GameArenas";
import Learns from "./pages/Learns";
import Models from "./pages/Models";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/benchmarks" element={<Benchmarks />} />
        <Route path="/datasets" element={<Datasets />} />
        <Route path="/codes" element={<Codes />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/gamearenas" element={<GameArenas />} />
        <Route path="/learns" element={<Learns />} />
        <Route path="/models" element={<Models />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
