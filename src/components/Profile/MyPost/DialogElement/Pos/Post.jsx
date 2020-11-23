import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return ( 
        <div className= {s.item}>
          <img src="https://kino-teatr.ua/public/main/films/photo_49d60f31c4a06.jpg" />
          {props.message} 
          <div>
            <span>like</span> {props.likesCount}
          </div>
        </div>
    )
}
export default Post;