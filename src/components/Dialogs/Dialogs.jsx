import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './Dialog/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { NavLink } from 'react-router-dom';



const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem dialog='Tema' id='1'/>
        <DialogItem dialog='Ira' id='2'/>
        <DialogItem dialog='Sveta' id='3'/>
        <DialogItem dialog='Macsim' id='4'/>
        <DialogItem dialog='Dima' id='5'/> 
      </div>
      <div className={s.messages}>
        <Message message="hello" />
        <Message message="HI" />
        <Message message="YO" />
      </div>
    </div>);
}
export default Dialogs;