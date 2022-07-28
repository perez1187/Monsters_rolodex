
import './search-box-styles.css';

const  SearchBox = ({className, placeholder, onChangeHandler}) => (
        <input 
            className= {`search-box ${className}`} 
            type='search' // {/* type search pozwala skasowac to co wpisalimy */}
            placeholder= {placeholder}
            // onChange={onSearchChange} // unikamy anonymus function przy renderowaniu,  
            // bo one sie nie updajtuje, tylko tworza i usuwaja co zabiera czas
            onChange={onChangeHandler} //props mozemy nazwac dowolnie         
        /> 
    );
    //x

export default SearchBox;