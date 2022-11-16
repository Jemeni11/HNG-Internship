// Hooks
import { useState } from "react";
// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import { Home, PlacesToStay, NFTs, Community, Error } from "./pages";
// Components
import { Navbar, Footer, Modal } from "./components";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <BrowserRouter>
      {showModal && (
        <Modal closeButtonClickHandler={() => setShowModal(false)} />
      )}
      <Navbar setShowModal={setShowModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="places" element={<PlacesToStay />} />
        <Route path="nfts" element={<NFTs />} />
        <Route path="community" element={<Community />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
