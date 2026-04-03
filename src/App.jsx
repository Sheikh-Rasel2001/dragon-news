
import { use } from 'react';
import './App.css'
import Home from './Components/Home/Home';
import { ToastContainer } from 'react-toastify';

const newsPromise = fetch('/news.json').then(res => res.json());

function App() {
  const allNews = use(newsPromise);

  return (
    <>
      <Home allNews={allNews}></Home>
      <ToastContainer position='top-center' />
    </>
  )
}

export default App
