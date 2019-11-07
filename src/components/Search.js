import React, {useState} from 'react'

const Search = (props) => {

    const [searchValue, setSearchValue] = useState("")

    const handlerInputChanges = (e) => {
        setSearchValue(e.target.value)
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault()
        props.search(searchValue)
        resetInputField()
    }

    return (
        <form className="searchForm">
            <input className="inputSearch" type="text" placeholder="input movie" value={searchValue} onChange={handlerInputChanges} />
            <button className="searchButton" onClick={callSearchFunction} >Search</button>
        </form>
    )
}

export default Search