import React from 'react';
import Navbar from './components/layout/navbar/Navbar';
// import Slider from './components/pages/Home/mainSlider/Slider';
// import Content from './components/pages/Home/gymContent/Content';
// import About from './components/pages/Home/homeAbout/About';
// import OurAdvantage from './components/pages/Home/ourAdvantage/OurAdvantage';
// import PopularClasses from './components/pages/Home/popularClasses/PopularClasses';
// import OurPlans from './components/pages/Home/ourPlans/OurPlans';
// import Newsletter from './components/pages/Home/newsletter/Newsletter';
// import Customers from './components/pages/Home/customers/Customers';
import Footer from './components/layout/footer/Footer';
import Home from './components/pages/Home/Home';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from './components/pages/About/About';
import Services from './components/pages/Servicess/Services';



function App() {
  return ( 
    <Router>
  <div style={{overflowX:"hidden"}}>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
    </Switch>
 
      <Footer></Footer>
      </div>
       </Router>
  );
}

export default App;
