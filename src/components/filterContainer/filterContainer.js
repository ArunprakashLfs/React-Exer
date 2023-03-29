import './filtercontainer.style.css';
// import {faSearch} from 'react-icons/fa';
const FilterContainer = ()=>{
    return(
        <>
        <div className='search-container'>
            <div className='filter-container'>
                <section className='searchbar'>
                <span className='search-icon'><i class="fa-solid fa-magnifying-glass" ></i></span>
                <input className='search-text'></input>
                </section>
                <span className='sort-icon'><i class="fa-solid fa-sort" ></i></span>
            </div>
            
        </div>
        </>
    )
};
export default FilterContainer;