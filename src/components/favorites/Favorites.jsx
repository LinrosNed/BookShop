import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Favorites({ orFavorite, countBookFavorite }) {

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={!countBookFavorite ? null : countBookFavorite} color="secondary">
      <FavoriteOutlinedIcon style={{ fontSize: 30, fill: orFavorite ? 'orange' : 'none', stroke: 'gray', strokeWidth: 1 }} />
      </StyledBadge>
    </IconButton>
  );
}