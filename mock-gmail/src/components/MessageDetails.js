import React from 'react';
import { useParams } from 'react-router-dom';

const MessageDetails = ({info}) => {
    const { personId } = useParams()
    const person = info.find(p => p.id === Number(personId))

    const messageInfo = person ? (
        <> 
          <h3>Sender:{person.sender}</h3>
          <h3>Recipent:{person.recipient}</h3>
          <p> <b>Subject:</b> {person.subject}      <b>Date:</b> {person.date}</p>
          <p><b>Message:</b> {person.message}</p>
        </>
    ) : <h1>No messages</h1>

    return (
        <p>
           <h1>Message Info</h1> { messageInfo }
        </p>
    )
}

export default MessageDetails;