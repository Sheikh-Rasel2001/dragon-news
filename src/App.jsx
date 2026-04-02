
import { use } from 'react';
import './App.css'
import Home from './Components/Home/Home'
import CategoryNews from './Pages/CategoryNews'
import { ToastContainer } from 'react-toastify';

const newsPromise = fetch('/news.json').then(res => res.json());

function App() {
  const allNews = use(newsPromise)

  return (
    <>
      <CategoryNews></CategoryNews>
      <Home allNews={allNews}></Home>
      <ToastContainer position='top-center' />
    </>
  )
}

export default App
