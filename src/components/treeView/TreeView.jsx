import * as React from 'react';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { NavLink } from 'react-router-dom';

export default function TreeView({ genres }) {

  const listGenres = (genres) => {
    if (Array.isArray(genres) && genres.length > 0) {
      return genres.map(genre => (
        <li key={genre.id}>
          <NavLink to={`/genre/${genre.id}`}>
            <span>{genre.name}</span>
          </NavLink>
        </li>
      ))
    }
  };

  return (
    <Box sx={{ height: 220, flexGrow: 1, maxWidth: 400 }}>
      <SimpleTreeView>
        <TreeItem itemId="grid" label="Книги по жанрам" >
          {listGenres(genres)}
        </TreeItem>
      </SimpleTreeView>
    </Box>
  );
}