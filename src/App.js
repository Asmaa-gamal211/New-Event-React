import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Creative from "./components/Creative";
import NavBar from "./components/NavBar";
import OurProgramer from "./components/ourProgramer/OurProgramer";
import Overrview from "./components/Overrview";
import Register from "./components/Register";
import Sponser from "./components/Sponser";
import Venus from "./components/Venus";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overrview />} />
          <Route path="/speakers" element={<Creative />} />
          <Route path="/programer" element={<OurProgramer />} />
          <Route path="/venue" element={<Venus />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sponsers" element={<Sponser />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
