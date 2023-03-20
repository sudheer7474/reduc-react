
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Header from './Containers/Header';
import ProductListing from './Containers/ProductListing';
import ProductDetails from './Containers/ProductDetails';
import Footer from './Containers/Footer'

function App() {
  return (
    <Router>
    <div className="App">
        
       
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
          <Route>404 Not Found!</Route>
          </Routes>
        <Footer/>
      
      
    </div>
    </Router>
  );
}

export default App;
