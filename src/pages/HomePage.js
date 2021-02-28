import React, { useState } from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Searchbar from '../components/Searchbar'
import '../styles/Home.css'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { qStringState, sortByState } from '../recoil'

const Home = () => {
    const [search, setSearch] = useState('')
    const [radioValue] = useRecoilState(sortByState)
    const [, setQString] = useRecoilState(qStringState)
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        if (search) {
            history.push(`/search?q=${search}&sortby=${radioValue}`)
            setQString(search)
        }
    }

    return (
        <div className='home'>
            <main>
                <form className="searchpane" onSubmit={handleSubmit}>
                    <Searchbar search={search} setSearch={setSearch} />
                    <div className="searchactions">
                        <Button
                            type='submit'
                            padding='10px 15px'
                            mt='10'
                            bgColor='#F8F9FA'
                            bRadius='5'>Search Now!
                        </Button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    )
}

export default Home
