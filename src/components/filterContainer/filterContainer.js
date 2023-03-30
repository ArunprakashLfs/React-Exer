import './filtercontainer.style.css';
// import {faSearch} from 'react-icons/fa';


const FilterContainer = (sortValue)=>{
   
    return(
        <>
        <div className='search-container'>
            <div className='filter-container'>
                <section className='searchbar'>
                <input className='search-text'></input>
                <button className='search-icon'><i class="fa-solid fa-magnifying-glass" ></i></button>
                </section>
                <button className='sort-icon' onClick={sortValue}><i class="fa-solid fa-sort" ></i></button>
            </div>
            
        </div>
        </>
    )
};
export default FilterContainer;