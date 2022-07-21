import NavBar from './Containers/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from './Containers/ProductListing';
import ProductDetails from './Containers/ProductDetails';

function App() {
  return (
    <div className='App'>
<br></br>
      <Router>
        <NavBar></NavBar>
        
        <Routes>
          <Route path='/' element={<ProductListing></ProductListing>}></Route>
          <Route path='/product/:productId' element={<ProductDetails />}></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
