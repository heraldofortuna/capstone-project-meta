import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Online from './Online';
import Review from './Review';
import Promo from './Promo';
import Header from './Header';
import About from './About';
import Footersection from './Footersection';
import Booking from './Booking';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Promo />
                <Online />
                <Review />
                <About />
                <Footersection />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Promo />
                <Online />
                <Review />
                <About />
                <Footersection />
              </>
            }
          />
          <Route path="/Booking" element={
            <>
            <Booking/>
            <Footersection/>
           </> 
           } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;