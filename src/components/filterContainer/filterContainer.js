import './filtercontainer.style.css';
// import {faSearch} from 'react-icons/fa';


const FilterContainer = (sortValue, searchFilter, catogaryFilter)=>{
   
    return(
        <>
        <div className='search-container'>
            <div className='filter-container'>
                <form className='searchbar'>
                    <input className='search-text'></input>
                    <button className='search-icon' value='submit' onChange={searchFilter}><i class="fa-solid fa-magnifying-glass" ></i></button>
                </form>
                <select className='catagory-container' onChange={catogaryFilter}>
                    <option>select</option>
                    <option>smartphones</option>
                    <option>laptops</option>
                    <option>fragrances</option>
                    <option>skincare</option>

                </select>
                <button className='sort-icon' onClick={sortValue}><i class="fa-solid fa-sort" ></i></button>
            </div>
            
        </div>
        </>
    )
};
export default FilterContainer;