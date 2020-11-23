import React from 'react';
import s from './DialogsItems.module.css'
import DialogItem from './Dialog/DialogItem';




const DialogsItem = (props) => {

  return props.dialogName.map((name, id) =>
    <DialogItem name={name.name} id={id.id} />
  )

}



export default DialogsItem;