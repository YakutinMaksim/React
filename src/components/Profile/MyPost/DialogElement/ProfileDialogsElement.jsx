import React from 'react';
import Post from './Pos/Post';

const ProfileDialogsElement = (props) => {

  return props.dialogsData.map(post =>
    <Post message={post.message} likesCount={post.likesCount} />);
}

export default ProfileDialogsElement;