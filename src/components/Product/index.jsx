import { useState } from 'react';
import './Product.scss';
import ProductList from '../ProductList';


const Product = ({ 
  products = [],
  setClickEdit, 
  setClickAdd, 
  clickEdit,
  setSingleProduct,
  setProducts,
  setHideTable,
  hideTable,
  loadingList,
  errorList
}) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); 

  const handleClickEdit = (product) => {
      setClickEdit(product.id);
      setSingleProduct(product);
      setClickAdd(false)
  }

  const handleClickAdd = () => {
    setClickAdd(true)
    setClickEdit(null)
    setSingleProduct({
      name: '',
      color: '',
      category: '',
      price: '',
    })
  }

  const handleDeleteProduct = async (product) => {
    const configFetch = {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    }
    try{
      setLoading(true)
      const response = await fetch(`http://localhost:8080/products/${product.id}`, configFetch);
      const data = await response.json(); 
    }catch(error){
      setError(`Ups!! ocurrió algo. Error: ${error}`)
    } finally {
      const deleteProduct = [...products]
      const index = deleteProduct.findIndex((item) => item.id === product.id)
      index !== -1 ? deleteProduct.splice(index, 1) : undefined
      
      setProducts(deleteProduct);   
  
      deleteProduct.length === 0 ? setHideTable(true) : setHideTable(false);
    }


  } 

  return (
    <>
    {loadingList ? 'Loading...' : errorList ? errorList : 
      <article>

        <div className='title'>
          <h2>Product List</h2>
          <button onClick={handleClickAdd}>Add</button>
        </div>

        <h2 className={!hideTable ? 'hiden' : 'no-products'} >Add Products</h2>


        <table className={hideTable ? 'hiden' : 'table'}>

          <thead>
            <tr className='table-header'>
              <th className='table-header__name'>PRODUCT NAME</th>
              <th>COLOR</th>
              <th>CATEGORY</th>
              <th>PRICE</th>
              <th className='edit'>EDIT</th>
            </tr>
          </thead>
              
          <tbody>    
            {products.map((product) => {
              return (
                <ProductList
                key={product.id} 
                id={product.id}
                product={product}
                name={product.name}
                color={product.color}
                category={product.category}
                price={product.price}
                handleClickEdit={handleClickEdit}
                isSelected={clickEdit === product.id ? true : false}
                handleDeleteProduct={handleDeleteProduct}
                loading={loading}
                />
              )}
            )}
            
          </tbody>
        </table>

      </article>
      }
      </>
  )
}

export default Product