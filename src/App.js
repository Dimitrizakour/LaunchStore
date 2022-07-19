import './App.css';
import { Fragment } from 'react';
import ProductItem from './components/ProductPage/ProductItem';
import Footer from './components/UI/Footer';
import Navbar from './components/Layout/Header';



function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
     <ProductItem></ProductItem>
     <Footer></Footer>
    </Fragment>
  );
}

export default App;
