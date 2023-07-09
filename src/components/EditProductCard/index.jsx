import { useState } from 'react';
import './EditProductCard.scss';

const EditProductCard = ({ clickEdit,
  singleProduct,
  setSingleProduct,
  onUpdateProduct,
  setClickEdit
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSingleProduct({ 
      ...singleProduct, 
      [name]: value 
    });
  }

  const newProduct = {
    ...singleProduct,
    price: Math.round(singleProduct.price * 100) / 100
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const configFetch = {
      method: 'PUT',
      body: JSON.stringify(newProduct),
      headers:{
        'Content-Type': 'application/json'
      }
    }
    try{
      setLoading(true)
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products/${newProduct.id}`, configFetch)
      const product = await response.json();
      onUpdateProduct(product.data)

  }catch(error){
      setError(`Ups!! ocurrió algo. Error: ${error}`)
  }finally{
    setLoading(false)
    setSingleProduct({
      name: '',
      color: '',
      category: '',
      price: '',
      })
    }
  }
  
  const handleClickCancel = (e) => {
    e.preventDefault()
    setClickEdit(null)
  }

  return (
    <>
    <div className={clickEdit ? 'edit-card' : 'hiden'}>
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit} className='edit-form'>

          <label htmlFor="name">PRODUCT NAME</label>
          <input onChange={handleChange} value={singleProduct.name}  name='name' id='name' type="text" required/>

          <label htmlFor="color">COLOR</label>
          <input onChange={handleChange} value={singleProduct.color} name='color' id='color' type="text" required/>

          <label htmlFor="category">CATEGORY</label>
          <select onChange={handleChange} value={singleProduct.category} name="category" id="category" required>
            <option value="Home">Home</option>
            <option value="Clothing">Clothing</option>
            <option value="Baby">Baby</option>
            <option value="Music">Music</option>
            <option value="Books">Books</option>
          </select>
          
          <label htmlFor="price">PRICE</label>
          <input onChange={handleChange}
          value={singleProduct.price}  
          name="price" id="price" 
          type="number"
          step='0.01'
          required
          />

          <div className='edit-buttons'>
            <button onClick={handleClickCancel} className='edit-cancel'>Cancel</button>
            <button 
            type='submit' 
            className='edit-update'
            disabled={loading}
            >{loading ? 'Wait': 'Update'}</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default EditProductCard