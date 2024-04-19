import React from 'react';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Routes } from "react-router-dom";
import ContainerSidebar from './components/sidebar/ContainerSidebar';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';

function AppLayout({ children, isAuth }) {
  return (
    <div className="wrapper">
      <Header isAuth={isAuth} />
      <main className='main-block'>
        <ContainerSidebar />
        <div className="pages">
          <Breadcrumbs />
          <Routes>{children}</Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;