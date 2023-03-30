// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Products from './components/products/products';
import FilterContainer from './components/filterContainer/filterContainer';
import productData from './components/productData/productData';
// import ProductData from './components/productData/productData';

 
function App() {
  // let productData = [...ProductData]
  let [products,setproducts] = useState(productData);
  let [isasending, setisasending] = useState(false);
 
  function sortValue(){
    let copyData = [...productData];
    copyData.sort((val1, val2)=>{
      if(!isasending){
        return(
          val1.price- val2.price
        ) 
      }else{
        return(
          val2.price-val1.price
        )
      }
    });
    isasending = setisasending;
    productData =setisasending;
  }
  
  return (
    <>
    <h1>My Products</h1>
    <FilterContainer  sortValue={sortValue}/>
    <Products  productData={productData}/>
    </>
  );
}

export default App;
