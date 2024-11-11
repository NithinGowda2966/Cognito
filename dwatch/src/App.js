// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DwatchPage from './pages/DwatchPage';
import CopystormPage from './pages/CopystormPage';
import './index.css'; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Router>
      <>
        {loading && (
          <div className="fixed inset-0 bg-slate-900 z-50 flex justify-center items-center">
            <img
              src="/api/placeholder/58/58"
              alt="Loading"
              className="w-[58px] h-[58px]"
            />
          </div>
        )}

        <div className="min-h-screen overflow-x-hidden bg-slate-900">
          <Header />
          <Routes>
            <Route path="/" element={<DwatchPage />} />
            <Route path="/copystorm" element={<CopystormPage />} />
          </Routes>
        </div>
      </>
    </Router>
  );
};

export default App;