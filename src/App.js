import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Template from './components/Template';
import Services from './components/Services';
import Contact from './components/Contact';
import Activites from './components/Activites';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";




function App() {
    return (
        <div className=' bg-white overflow-hidden' >
            <Navbar />
            <Routes>
                <Route path='/Neometris-Test' element={<Main />} />
                <Route path="/" element={<Main />} />
                <Route path="/accueil" element={<Main />} />
                <Route path="/template" element={<Template />} />
                <Route path="/services" element={<Services />} />
                <Route path="/activités" element={<Activites />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <ScrollToTop />
        </div >
    );
}

export default App;