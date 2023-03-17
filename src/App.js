import './App.css';

import Home from "./Home";

import Header from './Header';
import Login from './Login';
import Checkout from './Checkout';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login"element = {<Login/>}/>
          <Route path='/checkout' element={<Checkout />} />
          {/* <Header />
            <Checkout />
          </Route> */}

          <Route path='/' element={<Home />} />
          {/* <Header />
            <Home />
          </Route> */}
        </Routes>
      </Router>


    </div>
  );
}

export default App;
