
import React from 'react';
import { Link } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Rating from '@mui/material/Rating';
import "./reviewsBook.css";

export function ReviewsBook( {countStars} ) {

  const normalise = (value) => ((value - 1) * 100) / (10 - 1);
  const starsCount = countStars !== undefined ? countStars : 0;

  //Общее количество отзывов.
  let totalReviews = 0;
  Object.values(starsCount).forEach(value => {
    totalReviews += value;
  });

  return (
    < >
      <div className="reviews-b">
        <div className="reviews__col">
          <Link className="reviews__row reviews__top">
            <span>Отзывы</span>
            <span>{totalReviews}</span>
          </Link>
          <Link className="reviews__row">
            <div className="reviews__head">
              <Rating name="size-small" defaultValue={5} size="small" />
              <span>{starsCount[5]}</span>
            </div>
            <LinearProgress variant="determinate" value={normalise(starsCount[5])} />
          </Link>
          <Link className="reviews__row">
            <div className="reviews__head">
              <Rating name="size-small" defaultValue={4} size="small" />
              <span>{starsCount[4]}</span>
            </div>
            <LinearProgress variant="determinate" value={normalise(starsCount[4])} />
          </Link>
          <Link className="reviews__row">
            <div className="reviews__head">
              <Rating name="size-small" defaultValue={3} size="small" />
              <span>{starsCount[3]}</span>
            </div>
            <LinearProgress variant="determinate" value={normalise(starsCount[3])} />
          </Link>
          <Link className="reviews__row">
            <div className="reviews__head">
              <Rating name="size-small" defaultValue={2} size="small" />
              <span>{starsCount[2]}</span>
            </div>
            <LinearProgress variant="determinate" value={normalise(starsCount[2])} />
          </Link>
          <Link className="reviews__row">
            <div className="reviews__head">
              <Rating name="size-small" defaultValue={1} size="small" />
              <span>{starsCount[1]}</span>
            </div>
            <LinearProgress variant="determinate" value={normalise(starsCount[1])} />
          </Link>
        </div>
      </div>
    </>
  )
};