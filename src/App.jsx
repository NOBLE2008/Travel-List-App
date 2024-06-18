import React from 'react'
import './App.css'
import Logo from './components/Logo'
import Form from './components/Form'
import PackagingList from './components/PackagingList'
import Stats from './components/Stats'

const App = () => {
  return (
    <div className='app'>
        <Logo/>
        <Form/>
        <PackagingList/>
        <Stats/>
    </div>
    
  )
}

export default App
