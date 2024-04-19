
import React from 'react';
import { useSelector } from 'react-redux';
import { SearchResultsPage } from './SearchResultsPage';

export function ContainerSearchResultsPage() {

  const filteredBooks = useSelector((state) => state.reducerTest.filteredBooks);

  return ( <SearchResultsPage books={filteredBooks} /> );
};
