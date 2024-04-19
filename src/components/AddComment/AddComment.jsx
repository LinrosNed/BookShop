import React, { useState } from "react";
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function AddComment(props) {

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  // Получение введенных данных в textarea
  const [commentText, setCommentText] = useState(); 
  const handleCommentChange = (event) => {
    const newText = event.target.value;
    setCommentText(newText);
  };
// Получение введенных данных рейтинга товара
  const [ratingValue, setRatingValue] = useState(props.ratingValue);
  const handleRatingChange = (newValue) => {
    setRatingValue(newValue);
  };
//Отправка введенных данных (комментарий) и рейтинга для дальнейшей обработки добавления или редактирования поста
const handleEditPost = () => {
  const errorMessage =
    ratingValue === undefined && commentText === undefined
      ? "Please fill in the rating and enter text."
      : ratingValue === undefined
      ? "Please fill in the rating."
      : commentText === undefined
      ? "Please enter text."
      : "";

  if (errorMessage) {
    setSnackbarMessage(errorMessage);
    setOpenSnackbar(true);
    return;
  }

  if (!props.commentId) {
    props.manageComment('add', props.bookId, commentText, ratingValue);
    props.closeWindowEditPost();
  } else {
    props.manageComment('edit', props.commentId, commentText, ratingValue);
    props.closeWindowEditPost();
  }
};

const handleCloseSnackbar = () => {
  setOpenSnackbar(false);
};
//Обработка получаемых данных даты и времени и вывод пользователю в читаемом виде
  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    return `${dateObject.toLocaleDateString()} ${dateObject.toLocaleTimeString()}`;
  };

  return (
    <>
      <Card className="b-comment">
        <div className="b-comment__header">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            title={props.bookId}
            subheader={formatDate(props.created)}
          />
          <Rating name="size-small"
            value={ratingValue}
            onChange={(event, newValue) => handleRatingChange(newValue)}
            size="small" />
        </div>
        <CardContent className="text-comment">
          <TextareaAutosize
            aria-label="Комментарий"
            onChange={handleCommentChange}
            className="comment-textarea"
            minRows={2}
          />
        </CardContent>
      </Card>
      <Button size="small" onClick={handleEditPost} >Edit Post</Button>
      <Button size="small" onClick={props.closeWindowEditPost} >Close</Button>
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert onClose={handleCloseSnackbar} severity="warning" sx={{ width: '100%' }}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
};
