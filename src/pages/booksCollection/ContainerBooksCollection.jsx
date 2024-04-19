import React from "react";
import { useSelector } from "react-redux";
import { BooksCollection } from "./BooksCollection";

function ContainerBooksCollection() {

  const { downloadedBooks } = useSelector((state) => state.infoBookReducer);

  return ( <BooksCollection books={downloadedBooks} /> );
};


export default ContainerBooksCollection;