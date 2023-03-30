import ProductData from'../productData/productData';
import '../products/products.css';
// import FilterContainer from '../filterContainer/filterContainer';
const Products = ()=>{
    return(
        <>
        <div className='container'>
        
            
            {ProductData.map(({title, price, images, description, rating, category})=>{
                return(
                <main className="card">
                    <div className='img-container'>
                        <img src={images[0]} alt="phone_image" className='img'></img>
                    </div>
                    <div className='text-container'>
                        <h2>{title}</h2>
                        <h3>{category}</h3>
                        {/* <span>{thumbnail}</span> */}
                        <h3>price: ${price}</h3>
                        <small>{rating}⭐</small>
                        <br/>
                        <p>{description}</p>
                    </div>
                </main>
            )
        })}
        </div>
        </>
        
    )
}
export default Products;