import React, { useState } from 'react'

function Search({ getQueryItem }) {

    const [searchItem, setSearchItem] = useState('')

    const inputSearchHandler = (searchQuery) => {
        setSearchItem(searchQuery)
        getQueryItem(searchQuery)
    }

    return (
        <section className="search">
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    onChange={(e) => inputSearchHandler(e.target.value)}
                    value={searchItem}
                />
            </form>
        </section>
    )
}

export default Search
