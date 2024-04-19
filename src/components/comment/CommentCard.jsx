import React from "react";
import "./commentCard.css";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Rating from '@mui/material/Rating';


export default function CommentCard(props) {

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    return `${dateObject.toLocaleDateString()} ${dateObject.toLocaleTimeString()}`;
  };

  return (
    <Card className="b-comment">
      <div className="b-comment__header">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title={props.CommentsId}
          subheader={formatDate(props.created)}
        />
        <Rating name="size-small" value={props.reating} size="small" />
      </div>
      <CardContent className="text-comment">
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
};


