import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import queryString from 'query-string'
import { qStringState, sortByState, allNewsQuery } from '../recoil'
import { useRecoilValue, useRecoilState } from 'recoil'
import Header from '../components/Header'
import '../styles/SearchPage.css'
import Content from '../components/Content'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'

const SearchPage = () => {
    const location = useLocation()
    const history = useHistory()
    const { q, sortby } = queryString.parse(location.search)

    const [qString, setQString] = useRecoilState(qStringState)
    const [sortString, setSortString] = useRecoilState(sortByState)

    useEffect(() => {
        setQString(q)
        setSortString(sortby)

    }, [q, sortby, setQString, setSortString,])

    useEffect(() => {
        if (qString) {
            history.push(`/search?q=${qString}&sortby=${sortString}`)
        }
    }, [sortString, qString, history])


    const allnews = useRecoilValue(allNewsQuery)

    return (
        <div className='searchpage' >
            <div className="items__container">
                <div className="header">
                    <Header />
                </div>
                <div className='borderline'></div>
                <div className="topnav">
                    <div className='total'>
                        {allnews.totalResults &&
                            allnews.totalResults + ' search results (' + Math.ceil(parseInt(allnews.totalResults) / 20) + " pages)"
                        }

                    </div>
                    <Pagination />
                </div>


                <main>
                    {
                        allnews.status === 'ok' ?
                            (
                                allnews.articles ? allnews.articles.map((article, index) =>
                                    <Content
                                        key={index}
                                        url={article.url}
                                        title={article.title}
                                        description={article.description}
                                        content={article.content}
                                        urlToImage={article.urlToImage}
                                        publishedAt={article.publishedAt}
                                        author={article.author}
                                    />)
                                    :
                                    'There is no search results'
                            )
                            : allnews.status === 'error' ?
                                <div className='error'>
                                    <h2>{allnews.code}</h2>
                                    <div>{allnews.message}</div>
                                </div>
                                :
                                null
                    }
                </main>

            </div>
            <Footer />

            {/* <pre>{JSON.stringify(allnews, null, 2)}</pre> */}
        </div>
    )
}

export default SearchPage
