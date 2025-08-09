import Layout from "./Layout.jsx";

import Home from "./Home";

import Domains from "./Domains";

import Contact from "./Contact";

import Hosting from "./Hosting";

import Packages from "./Packages";

import WhyDigify from "./WhyDigify";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Domains: Domains,
    
    Contact: Contact,
    
    Hosting: Hosting,
    
    Packages: Packages,
    
    WhyDigify: WhyDigify,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Domains" element={<Domains />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Hosting" element={<Hosting />} />
                
                <Route path="/Packages" element={<Packages />} />
                
                <Route path="/WhyDigify" element={<WhyDigify />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}