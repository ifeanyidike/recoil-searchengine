import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Content = ({ url }) => {
    let urlformat

    if (url.includes('https://www.')) {
        urlformat = url.substring(12, url.length)
    } else if (url.includes('http://www.')) {
        urlformat = url.substring(11, url.length)
    } else if (url.includes('https://')) {
        urlformat = url.substring(8, url.length)
    } else if (url.includes('http://')) {
        urlformat = url.substring(7, url.length)
    } else if (url.includes('www.')) {
        urlformat = url.substring(4, url.length)
    } else {
        urlformat = url
    }

    const urlBreak = () => {
        const urlsplit = urlformat.split('/')

        const urlElems = urlsplit.map(url => url.substring(0, 10))


        return <a href={url} target='_blank' rel='noreferrer noopener'> {urlElems.join(' > ')}</a>
    };

    return (
        <div>
            {urlBreak()}

        </div>
    )
}

export default Content
