import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import SingleCard from './pages/SingleCard/SingleCard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="house/:id" element={<SingleCard />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
