

import Product from './pages/Product';
import Home from  './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter } from 'react-router-dom'
import{Routes, Route, Link} from 'react-router-dom'
const App = () => {

  return (
    
    <div className="App">
           <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route path="/Product" element ={<Product/>}></Route>
              <Route path="/Login" element ={<Login/>}></Route>
              <Route path="/Cart" element ={<Cart/>}></Route>
              <Route path="/Register" element ={<Register/>}></Route>
              <Route path="/ProductList" element ={<ProductList/>}></Route>
            </Routes>
           </BrowserRouter>

           
    </div>
    
  )
}

export default App;