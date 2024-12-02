import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import ArticleList from './components/ArticlesList/ArticleList'
import Form from './components/Form/Form'

function App() {
  const [user, setUser] = useState()
  const hasUser = Boolean(user)

  return (
    <div className='h-screen'>
     <Header usuario={user}/>
     {hasUser && <ArticleList/>}
     {hasUser || <Form onSubmit={setUser}/>}
    </div>
  )
}

export default App
