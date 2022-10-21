// import logo from "./logo.svg";
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './layout/Header/header';
import Home from './pages/Home/home';
import About from './pages/About';
import Footer from './layout/Footer/footer';
import Error from './pages/Error/error';
// import Card from './components/Card/card';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          {/* <Route path="card/:id" element={<Card />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Header />}>
//           <Route path="Home" element={<Home />} />
//           <Route path="About" element={<About />} />
//           <Route path="*" element={<Error />} />
//         </Route>
//       </Routes>
//       <Footer />
//     </div>
//   );
// }
// export default App;

// <Route path="/" element={<Root />}>
// <Route path="Home" element={<Home />} />
// <Route path="About" element={<Apropos />} />
// <Route path="*" element={<Error />} />
// </Route>
