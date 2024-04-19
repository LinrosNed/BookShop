import React from "react";
import Button from '@mui/material/Button';
import CommentCard from "../comment/CommentCard";

export function MyComment({ user_comment, manageComment, openWindowEditPost, renderAddComment }) {
  
  const deleteComment = () => {
    manageComment('delete', user_comment.id);
  };
  const editPost = () => {
    openWindowEditPost();
  };
  
  return (
    <>
      {!user_comment ?
        renderAddComment() :
        <>
          <CommentCard
            text={user_comment.text}
            created={user_comment.created}
            reating={user_comment.stars}
          />
          <Button size="small" onClick={editPost}>Edit Post</Button>
          <Button size="small" onClick={deleteComment}>Delete</Button>
        </>
      }
    </>
  );
}
