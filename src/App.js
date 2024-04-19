import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from "react-router-dom";
import './App.css';
import { LoginPage } from './pages/loginPage/loginPage';
import { ContainerBookDetails } from './pages/bookDetails/ContainerBookDetails';
import ContainerBookmark from './pages/bookInBookmark/ContainerBookmark';
import ContainerBooksCollection from './pages/booksCollection/ContainerBooksCollection';
import ContainerPageBasket from './pages/pageBasket/ContainerPageBasket';
import ProtectedRoute from './HOC/ProtectedRoute';
import AppLayout from './AppLayout';
import ContainerBooksGenres from './pages/bookGenres/ContainerBooksGenres';
import ContainerStartPage from './pages/startPage/ContainerStartPage';

function App() {
  
  const isAuth = useSelector(state => state.authReducer.isAuth);

  return (
    <AppLayout isAuth={isAuth}>
      <Route path="/bookDetails/:bookId?" element={<ProtectedRoute component={ContainerBookDetails} isAuth={isAuth} />} />
      <Route path="/genre/:id?" element={<ProtectedRoute component={ContainerBooksGenres} isAuth={isAuth} />} />
      <Route path="/bookmark" element={<ProtectedRoute component={ContainerBookmark} isAuth={isAuth} />} />
      <Route path="/collection" element={<ProtectedRoute component={ContainerBooksCollection} isAuth={isAuth} />} />
      <Route path="/" element={<ProtectedRoute component={ContainerStartPage} isAuth={isAuth} />} />
      <Route path="/basket" element={<ProtectedRoute component={ContainerPageBasket} isAuth={isAuth} />} />
      <Route path="/login" element={<LoginPage />} />
    </AppLayout>
  );
}

export default App;