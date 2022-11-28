import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreativeSpeakers from "./designSystem/creativespeakers/CreativeSpeakers";
import Overview from "./designSystem/overview/Overview";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/speakers" element={<CreativeSpeakers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
