//import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'

const App = () => {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='container'>
        <AddProduct />
        <EditProduct />
        <ProductList />
      </div>
    </>
  )
}

export default App
