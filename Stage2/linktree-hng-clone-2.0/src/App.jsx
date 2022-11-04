import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Body, Footer } from "./components";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
