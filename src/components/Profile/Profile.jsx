import React from 'react';
import './MyPost/MyPost.jsx';
import MyPost from './MyPost/MyPost.jsx';
import s from './Profile.module.css'

const Profile = () => {
    return  <div className= {s.content}>
    <div className= {s.img}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwhiYLH0xKcxKF57kJD9DL0NqyQuB8_plRSQ&usqp=CAU' />  
    </div>
    <div className= {s.avatarPost}>
      
    </div>
    <div>
      ava + description
    </div>

    <MyPost />
  </div>
}
export default Profile;