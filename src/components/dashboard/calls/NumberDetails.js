import React from 'react'
import { useParams } from 'react-router-dom'

function NumberDetails({ data }) {
    const { number } = useParams()
    const currentData = data.filter(v => v.number == number)
    console.log(currentData)
    return (
        <div>
            <h2>{number}</h2>
        </div>
    )
}

export default NumberDetails
