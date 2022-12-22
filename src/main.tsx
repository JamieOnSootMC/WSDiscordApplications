import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages Imports
import Home from './pages/Home';
import Layout from "./pages/Layout";
import NotFound from "./pages/Others/NotFound";
import Apply from "./pages/Apply";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="apply" element={<Apply />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));