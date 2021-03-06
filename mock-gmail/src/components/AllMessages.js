import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const AllMessages = ({allEmails}) => {
    const match = useRouteMatch()

    return (
        <>
        <h3>Here are all of your emails! (Sender & Subject)</h3>
        <p>Click to see details</p>
        <ul>
        { allEmails.map(items => {
            return(
                <li><Link to={`${match.url}/${items.id}`}>Sender: {items.sender} Subject: {items.subject}</Link></li>
            )
        }) }
        </ul>
        </>
    )
}

export default AllMessages;