import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Header from './components/Header';
import TopBar from './components/TopBar';

function App() {
  
  return (
    <div className="App">
      <MainLayout isTitleShown={true}>
        <Header/>
        <TopBar/>
      </MainLayout>
    </div>
  );
}

export default App;
