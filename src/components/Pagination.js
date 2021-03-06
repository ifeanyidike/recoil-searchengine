import React from 'react'
import { IconButton } from '@material-ui/core'
import { MdChevronLeft, MdChevronRight, MdFirstPage, MdLastPage } from 'react-icons/md'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allNewsQuery, pageState } from '../recoil'
import "../styles/Pagination.css"

const Pagination = () => {
    const allnews = useRecoilValue(allNewsQuery)
    const [page, setPage] = useRecoilState(pageState)
    const perPage = 20
    const linkPerPage = 3
    const lastPage = Number(Math.ceil(allnews.totalResults / perPage))

    const markColor = (x, color) => page === x + page && color
    const markWeight = (x) => page === x + page && 800


    return (
        <div className='pagination'>
            <IconButton onClick={() => setPage(1)}>
                <MdFirstPage />
            </IconButton>
            <IconButton onClick={() => setPage(prevState => prevState === 1 ? prevState : prevState - 1)}>
                <MdChevronLeft />
            </IconButton>

            {
                [...Array(linkPerPage).keys()].map((x, ind) =>
                    x + page <= lastPage &&
                    <IconButton key={ind}
                        className='pagebutton'
                        style={{
                            color: markColor(x, '#fff'),
                            backgroundColor: markColor(x, '#bb1e1e'),
                            fontWeight: markWeight(x)
                        }}
                        onClick={() => setPage(x + page)}>
                        {x + page}
                    </IconButton>
                )
            }

            <IconButton onClick={() => setPage(prevState => prevState === lastPage ? prevState : prevState + 1)}>
                <MdChevronRight />
            </IconButton>
            <IconButton onClick={() => setPage(lastPage)}>
                <MdLastPage />
            </IconButton>
        </div>
    )
}

export default Pagination
