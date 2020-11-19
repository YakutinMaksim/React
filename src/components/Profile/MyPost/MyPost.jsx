import React from 'react';
import s from './MyPost.module.css'
import './Pos/Post'
import Post from './Pos/Post';



const MyPost = (props) => {

  let dialogsData = [
    { id: 1, message: 'hi world', likesCount: '0' },
    { id: 2, message: 'I am Maksim', likesCount: '23' }
  ];

  let dialogsElemnts = dialogsData.map((post) => {
    return <Post message={post.message} likesCount={post.likesCount} />
  })

  return <div>
    <div>
      My posts
      </div>
    <div>
      <textarea></textarea>
      <button>add post</button>
      <button>Remove</button>
    </div>
    <div className={s.posts}>
      {dialogsElemnts}

      <Post message={dialogsData[0].message} likesCount={dialogsData[0].likesCount} />

    </div>

  </div>

}
export default MyPost;