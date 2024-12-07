import { useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";

function Search({ handleSearch }) {
  const inputRef = useRef()

  const onSearch = () => {
    handleSearch(inputRef.current.value.toLowerCase().trim())
    inputRef.current.value = ''

  }

  return (
    <div className="search">
      <div className="search__input">
       <IoSearchSharp />
       <input type="text" placeholder="Buscar un pokemón"
       ref={inputRef} />
      </div>
      <button onClick={onSearch} className="search__btn">Buscar</button>

    </div>
    
  )
}

export default Search