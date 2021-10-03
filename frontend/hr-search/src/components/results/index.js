import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Results = () => {

    const results = useSelector(state => state.results)

    return (
        <div>
            <p>{results}</p>
        </div>
    )
}

export default Results
