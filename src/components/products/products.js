// import ProductData from'../productData/productData';
import '../products/products.css';
// import FilterContainer from '../filterContainer/filterContainer';
const Products = ({ productData }) => {
    console.log(productData);
    
    return(
        <>
        <div className='container'>
            {/* console.log(productData); */}
            {productData = productData.map((val)=>{
                return(
                <main className="card">
                    <div className='img-container'>
                        <img src={val.images[0]} alt="phone_image" className='img'></img>
                    </div>
                    <div className='text-container'>
                        <h2>{val.title}</h2>
                        <h3>{val.category}</h3>
                        {/* <span>{thumbnail}</span> */}
                        <h3>price: ${val.price}</h3>
                        <small>{val.rating}⭐</small>
                        <br/>
                        <p>{val.description}</p>
                    </div>
                </main>
            )
        })}
        </div>
        return(productData)
        </>
        
    )
}
export default Products;