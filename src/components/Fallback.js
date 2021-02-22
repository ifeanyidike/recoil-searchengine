import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import "../styles/Fallback.css"

export default function SimpleBackdrop() {

    return (
        <div className='fallback'>
            <Backdrop className='roller' open={true}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
