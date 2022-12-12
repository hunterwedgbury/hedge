import './App.scss';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import News from './components/News/News.js';
import Watchlist from './components/Watchlist/Watchlist.js'
import Footer from './components/Footer/Footer.js';

import FeedPage from './pages/FeedPage/FeedPage.js';
import ProfilePage from './pages/ProfilePage/ProfilePage.js';
import AddPage from './pages/AddPage/AddPage.js';

const apiURL = 'https://newsapi.org/v2/top-headlines?country=us&category=business'
const apiKey = 'apiKey=2f12dbcee7b140e7babe8211d3363c18'
const api = `${apiURL}&${apiKey}`

function App() {

  const [news, setNews] = useState(null);

  useEffect(() => {
    axios
    .get(`${api}`)
    .then(({ data: newsArray }) => {
      console.log(newsArray.articles)
      const slicedArray = newsArray.articles.slice(0, 5);
      setNews(slicedArray);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  if (news === null) {
    return <h1>Loading...</h1>
  }

  return (
    <BrowserRouter>
      <div className='browser-container'>
        <Header />
        <div className='page'>
          <div>
            <Nav />
          </div>
          <div className='routes-container'>
            <Routes>
              <Route path='/' element={<FeedPage/>} />
              <Route path='/profile' element={<ProfilePage/>} />
              <Route path='/add' element={<AddPage/>} />
            </Routes>
          </div>
          <div className='right-container'>
            <News news={news} />
            <Watchlist />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;