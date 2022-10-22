import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';

import Home from './pages/Home/Home';
import About from './pages/About';
import Footer from './layout/Footer/footer';
import Error from './pages/Error/Error';
import HouseIndexCard from './pages/HouseIndexCard';
// import Card from './components/Card/card';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="About" element={<About />} />
//           {/* <Route path="card/:id" element={<Card />} /> */}
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <Routes>
        {/* route de mise en page contenant la navigation commune à toutes les pages */}
        <Route path="/" element={<Layout />}>
          {/* Défini la route par défaut avec index*/}
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="/Home/HouseIndexCard" element={<HouseIndexCard />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;

// <Route path="/" element={<Root />}>
// <Route path="Home" element={<Home />} />
// <Route path="About" element={<Apropos />} />
// <Route path="*" element={<Error />} />
// </Route>
