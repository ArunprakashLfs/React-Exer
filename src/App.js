// import logo from './logo.svg';
import './App.css';
import Products from './components/products/products';
import FilterContainer from './components/filterContainer/filterContainer';

const sortValue= ()=>{

}
function App() {
  return (
    <>
    <h1>My Products</h1>
    <FilterContainer
     sortValue/>
    <Products />
    </>
  );
}

export default App;
