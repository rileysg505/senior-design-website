import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import OurProduct from './components/pages/OurProduct';
import MarketAndCompetitors from './components/pages/MarketAndCompetitors';
import ContactUs from './components/pages/ContactUs';



function App() {
  return (
    <>
    <Router>

    
     <Navbar />
     <Switch>
       <Route path = '/' exact component={Home}></Route>
       <Route path = '/about' exact component={About}></Route>
       <Route path = '/our-product' exact component={OurProduct}></Route>
       <Route path = '/market-and-competitors' exact component={MarketAndCompetitors}></Route>
       <Route path = '/contact-us' exact component={ContactUs}></Route>

     </Switch>
     </Router>
     </>
 
  );
}

export default App;
