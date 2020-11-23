import React from 'react';
import s from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import MessageData from './MessageDatas/MessageData'





const Dialogs = (props) => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogsItems dialogName={props.dialogName}/>

      </div>
      <div className={s.messages}>
        <MessageData messageData={props.messageData}/>
      </div>
    </div>);
}
export default Dialogs;