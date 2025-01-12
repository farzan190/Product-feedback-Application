import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './context/Context';
import FeedBackForm from './pages/FeedBackForm';
import CommentPage from './pages/CommentPage';
import EditFeedBackPage from './pages/EditFeedBackPage';
import Roadmap from './pages/Roadmap';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/feedback' element={<FeedBackForm/>} />
      <Route path='/CommentPage' element={<CommentPage/>} />
      <Route path='/editFeedBack' element={<EditFeedBackPage/>} />
      <Route path='/roadmap' element={<Roadmap/>} />

    </Routes>
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);

