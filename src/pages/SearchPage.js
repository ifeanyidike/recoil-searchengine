import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { qStringState, sortByState, allNewsQuery } from '../recoil'
import { useRecoilValue, useRecoilState } from 'recoil'
import Searchbar from '../components/Searchbar'
import Header from '../components/Header'
import { sortDropdownState } from '../recoil'
import '../styles/SearchPage.css'
import Content from '../components/Content'

const SearchPage = () => {
    const [showDropdown, setShowDropdown] = useRecoilState(sortDropdownState)

    const location = useLocation()
    const { q, sortby } = queryString.parse(location.search)

    const [, setQString] = useRecoilState(qStringState)
    const [, setSortString] = useRecoilState(sortByState)

    useEffect(() => {
        setQString(q)
        setSortString(sortby)
    }, [q, setQString, setSortString, sortby])


    const allnews = useRecoilValue(allNewsQuery)

    return (
        <div className='searchpage' >
            <Header />
            {
                allnews && allnews.articles.map((article, index) =>
                    <Content key={index} url={article.url} />)
            }
            <pre>{JSON.stringify(allnews, null, 2)}</pre>
        </div>
    )
}

export default SearchPage
