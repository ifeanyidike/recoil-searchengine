import React from 'react'
import '../styles/Button.css'
const Button = ({ padding, margin, pt, pb, pl, pr, mt, mb, ml, mr, bgColor, bRadius, children }) => {
    const style = {
        padding: padding,
        margin: margin,
        paddingTop: `${pt}px`,
        paddingBottom: `${pb}px`,
        paddingLeft: `${pl}px`,
        paddingRight: `${pr}px`,
        marginTop: `${mt}px`,
        marginBottom: `${mb}px`,
        marginLeft: `${ml}px`,
        marginRight: `${mr}px`,
        backgroundColor: bgColor,
        borderRadius: `${bRadius}px`
    }

    return (
        <button
            className='home__actions'
            style={style}
            children={children}
        />
    )
}

export default Button
