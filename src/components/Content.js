import React from 'react'
import '../styles/Content.css'

const Content = ({ url, title, description, urlToImage, publishedAt, author }) => {
    let urlformat

    if (url.includes('https://')) {
        urlformat = url.substring(8, url.length)
    } else if (url.includes('http://')) {
        urlformat = url.substring(7, url.length)
    } else {
        urlformat = url
    }

    const urlBreak = () => {
        const urlsplit = urlformat.split('/')

        const urlElems = urlsplit.map(url => url.substring(0, 15))
        const slicedurl = urlElems.slice(0, 3)
        const ellipsis = () => {
            if (urlElems.length > slicedurl.length) {
                return '…'
            } else if (slicedurl[slicedurl.length - 1].length > 15) {
                return '…'
            } else {
                return ''
            }
        }

        return slicedurl.join(' > ') + ellipsis()
    };

    return (
        <div className='content' >
            <a className='toplink' href={url} target='_blank' rel='noreferrer noopener'>{urlBreak()}</a>
            <h2 className='title'><a href={url} target='_blank' rel='noreferrer noopener'>{title}</a></h2>
            <>
                {urlToImage && <img className='img' src={urlToImage} alt={title} />}
            </>
            <div className='desc'>
                {new Date(publishedAt).toDateString()} &mdash; {description}  {author && <>&mdash; {author}</>}
            </div>

        </div>
    )
}

export default Content
