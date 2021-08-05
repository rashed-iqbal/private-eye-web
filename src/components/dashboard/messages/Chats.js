import React from 'react'
import { useParams } from 'react-router-dom'

function Chats({ data }) {

    const { chatId } = useParams()
    const currentData = data.find(v => v.tid === chatId)
    if (currentData) {
        console.log(currentData)
    }

    return (
        <div>

        </div>
    )
}

export default Chats
