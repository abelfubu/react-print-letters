import React from 'react'
import './comp.css'

const Chart = (props) => {
    return (
        <div onClick={props.click} className='chart'>
            <h1>{props.char}</h1>
        </div>
    )
}

export default Chart
