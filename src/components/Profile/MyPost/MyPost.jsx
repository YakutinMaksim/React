import React from 'react';
import s from './MyPost.module.css'
import './Pos/Post'
import Post from './Pos/Post';

const MyPost = () => {
    let dialogsData = [
      {id: 1, message: 'hi world', likesCount:'0'},
      {id: 2, message: 'I am Maksim', likesCount:'23' }
    ];
    return  <div>
      <div>
        My posts
      </div>
      <div>
        <textarea></textarea>
        <button>add post</button>
        <button>Remove</button>
      </div>
      <div className= {s.posts}>
        <Post message ={dialogsData[0].message} likesCount = {dialogsData[0].likesCount}/>
        <Post message ={dialogsData[1].message} likesCount = {dialogsData[1].likesCount}/>
      </div>

   </div>

}
export default MyPost;