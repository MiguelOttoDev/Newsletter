import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import ArticleList from './components/ArticlesList/ArticleList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <ArticleList/>
    </>
  )
}

export default App
