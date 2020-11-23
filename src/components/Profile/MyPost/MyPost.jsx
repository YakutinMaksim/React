import React from 'react';
import s from './MyPost.module.css'
import ProfileDialogsElement from './DialogElement/ProfileDialogsElement';



const MyPost = (props) => {



  return (
    <div>
      My posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <ProfileDialogsElement dialogsData={props.dialogsData} />
      </div>

    </div>
  )
}
export default MyPost;