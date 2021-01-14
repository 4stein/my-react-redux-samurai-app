import React from "react";
import s from './MyPosts.module.sass';
import Post from './Post/Post';
import {addPostActionCreator} from "../../../redux/ProfileReducer";


const MyPostsContainer = (props) => {

  // Map By Props
  let postElements = props.posts.map(post => {
    return  <Post message={post.message} name={post.name} key={post} />
  });

  let newPostElement = React.createRef();

  let buttonClick = () => {
    let text = newPostElement.current.value;
    props.dispatch(addPostActionCreator(text));
    newPostElement.current.value = '';
  }


  return (
    <>
    <div className={s.sendpost}>
      <h5>My posts</h5>
      <textarea cols="100" rows="3" ref={newPostElement}/><br />
      <button
          type="button"
          className="btn btn-success"
          onClick={buttonClick}>Send</button>
    </div>
    {postElements}
    </>
  );
}

export default MyPostsContainer;
