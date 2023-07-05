//import { useState } from 'react'
import './App.scss';
import Main from './components/Main';
import Header from './components/Header';

const App = () => {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='container'>
        <Main />
      </div>
    </>
  )
}

export default App
