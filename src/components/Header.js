import React, { useState, useEffect } from 'react'
import Searchbar from './Searchbar'
import '../styles/Header.css'
import { qStringState } from '../recoil'
import { useRecoilState } from 'recoil'
import { Link, useHistory } from 'react-router-dom'

const Header = () => {
    const [search, setSearch] = useState('')
    const [, setQString] = useRecoilState(qStringState)
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        if (search === '') {
            history.push('/')
        } else {
            setQString(search)
        }

    }
    return (
        <form className='form__header' onSubmit={handleSubmit}>
            <Link to="/"><h1>Funky Search</h1></Link>
            <Searchbar search={search} setSearch={setSearch} toggleShow={true} />
        </form>
    )
}

export default Header
