import React from 'react';
import s from './MessageData.module.css';
import Message from './Message/Message';






const MessageData = (props) => {
   return props.messageData.map(message => 
     <Message message={message.message} />
  )
}


export default MessageData;