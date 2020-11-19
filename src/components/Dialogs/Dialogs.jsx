import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './Dialog/DialogItem.jsx';
import Message from './Message/Message.jsx';




const Dialogs = () => {

  let dialogsData = [
    { name: 'Dima', id: 3 },
    { name: 'Sveta', id: 4 }
  ];

  let dialogsItems = dialogsData.map((name, id) => {
    return <DialogItem name={name.name} id={id.id} />
  })


  let messageData = [
    { id: 1, message: 'hello,Hi' },
    { id: 2, message: 'Hi' },
    { id: 3, message: 'OY' },
  ];

  let messageDatas = messageData.map((message) => {
    return <Message message={message.message} />
  })

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsItems}
        <DialogItem name='Ira' id='2' />

      </div>
      <div className={s.messages}>
        {messageDatas}
      </div>
    </div>);
}
export default Dialogs;