import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import i18n from './i18n';
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";


const App = () => {
  

  return (
    <Router>
      <Helmet>
        <title>The Foxx Forge</title>
        <meta name="description" content="Custom miniature painting by The Foxx Forge" />
      </Helmet>
      <nav className="sticky top-0 bg-red-900 text-ivory flex justify-between items-center p-4 shadow-lg z-10">
        <div className="text-xl font-bold">The Foxx Forge</div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
          <Link to="/pricing" className="hover:underline">Pricing</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/impressum" className="hover:underline">Impressum</Link>
        </div>
        <div className="space-x-2">
          <button onClick={() => i18n.changeLanguage("en")} aria-label="Switch to English">EN</button>
          <button onClick={() => i18n.changeLanguage("en")} aria-label="Switch to German">DE</button>
        </div>
      </nav>

      <main className="bg-ivory text-red-900 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
