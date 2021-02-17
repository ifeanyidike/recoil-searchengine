import React, { useState } from 'react'
import Searchbar from './Searchbar'
import '../styles/Header.css'

const Header = () => {
    const [search, setSearch] = useState('')
    return (
        <header>
            <div className="searchbarcontainer">
                <Searchbar search={search} setSearch={setSearch} toggleShow={true} />
            </div>
        </header>
    )
}

export default Header
