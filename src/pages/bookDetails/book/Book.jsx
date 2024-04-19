import React, { useState } from "react";
import "./book.css";
import CommentCard from "../../../components/comment/CommentCard";
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import { ReviewsBook } from "../../../components/reviewsBook/ReviewsBook";
import { MyComment } from "../../../components/myComment/MyComment";
import AddComment from "../../../components/AddComment/AddComment";
import { BookDetailsHeader } from "../../../components/bookDetailsHeader/BookDetailsHeader";

export function Book(props) {

  const book = props.book;
  //--Управление состоянием открыто окно для добавления или редактирования комментария или закрыто
  const [showAddComment, setShowAddComment] = useState(false);
  const openWindowEditPost = () => setShowAddComment(true);
  const closeWindowEditPost = () => setShowAddComment(false);

  // Функция для отображения компонента AddComment или кнопки "Add Post"
  function renderAddComment() {
    if (showAddComment) {
      return (
        <AddComment closeWindowEditPost={closeWindowEditPost}
          manageComment={props.manageComment}
          showAddComment={showAddComment}
          bookId={book.id}
        />)
    } else {
      return (<Button size="small" onClick={() => openWindowEditPost()}>Add Post</Button>);
    }
  };

  //Функция для отоброжения комментария пользователя или если комментария еще нет, запуск функции для отображения кнопки добавления комментария
  function renderMyComment() {
    if (!props.comments.user_comment) {
      return renderAddComment();
    } else {
      return (
        <MyComment user_comment={props.comments.user_comment}
          openWindowEditPost={openWindowEditPost}
          closeWindowEditPost={closeWindowEditPost}
          showAddComment={showAddComment}
          manageComment={props.manageComment}
        />
      );
    }
  };

  function renderComments(comments) {
    if (!comments || comments.length === 0) { return null };
    return comments.map((item) => (
      <CommentCard
        key={item.id}
        CommentsId={item.id}
        text={item.text}
        created={item.created}
        reating={item.stars}
      />
    )
    )
  };

  return (
    <div className="book">
      <BookDetailsHeader name={book.name}
        id={book.id}
        genre={book.genre}
        author={book.author.name}
        price={book.price}
        img_cover={book.img_cover}
        comments_stars_stat={book.comments_stars_stat}
        comments_count={book.comments_count}
        orFavorite={props.orFavorite}
        setFavorite={props.setFavorite}
        orBasket={props.orBasket}
        setBasket={props.setBasket}
      />
      <div className="book__description">
        <div className="book__description_header">Описание</div>
        <div className="book__description_text">{book.description}</div>
      </div>
      <div className="book__comment-block">
        <div className="comment-block__reviews">
          <ReviewsBook countStars={book.comments_stars_stat} />
        </div>
        <div className="comment-block__comments">
          <div className="comment-block__comments-me">
            {renderMyComment()}
          </div>
          <List>
            {renderComments(props.comments.comments)}
          </List>
        </div>
      </div>
    </div>
  )
};