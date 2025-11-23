// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* changed path to lowercase to match Link in Home.jsx */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
