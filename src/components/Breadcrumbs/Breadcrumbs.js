// Breadcrumbs.js
import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Typography, Link } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      <Link color="inherit" component={RouterLink} to="/" key="home">
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography color="textPrimary" key={routeTo}>
            {name}
          </Typography>
        ) : (
          <Link color="inherit" component={RouterLink} to={routeTo} key={routeTo}>
            {name}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
}

export default Breadcrumbs;
