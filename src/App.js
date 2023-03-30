// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Products from './components/products/products';
import FilterContainer from './components/filterContainer/filterContainer';
import Data from './components/productData/productData';
// import ProductData from './components/productData/productData';

 
function App() {
  // let productData = [...ProductData]
  let [productData,setproductData] = useState(Data);
  let [isasending, setisasending] = useState(false);
 
  function sortValue(){
    setisasending(!isasending);
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
    setproductData(copyData);
    // productData =setisasending;
  }
  const searchFilter = (event, searchstring) =>{
    event.preventDefault();
    let copyData =[...productData];
    const filteredProducts = copyData.filter((product)=> product.title.toLowerCase().includes(searchstring));
    console.log(filteredProducts);
  }
  return (
    <>
    <h1>My Products</h1>
    <FilterContainer  sortValue={sortValue} searchFilter ={searchFilter} />
    <Products  productData={productData}/>
    </>
  );
}

export default App;
