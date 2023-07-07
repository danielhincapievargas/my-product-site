import { products } from '../Main/Data';
import './EditProductCard.scss';

const EditProductCard = ({ clickEdit,
  singleProduct,
  setSingleProduct,
  onUpdateProduct,
  setClickEdit
}) => {

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSingleProduct({ 
      ...singleProduct, // spread operator
      [name]: value 
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onUpdateProduct(singleProduct)
    setSingleProduct({
      name: '',
      color: '',
      category: '',
      price: '',
    })
  }
  
  const handleClickCancel = () => {
    setClickEdit(null)
  }



  return (
    <>
    <div className={clickEdit ? 'edit-card' : 'hiden'}>
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit} className='edit-form'>

          <label htmlFor="product-name">PRODUCT NAME</label>
          <input onChange={handleChange} value={singleProduct.name}  name='product-name' id='product-name' type="text"/>

          <label htmlFor="color">COLOR</label>
          <input onChange={handleChange} value={singleProduct.color} name='color' id='color' type="text"/>

          <label htmlFor="category">CATEGORY</label>
          <select onChange={handleChange} value={singleProduct.category} name="category" id="category">
            <option value="Home">Home</option>
            <option value="Clothing">Clothing</option>
            <option value="Baby">Baby</option>
            <option value="Music">Music</option>
            <option value="Books">Books</option>
          </select>
          
          <label htmlFor="price">PRICE</label>
          <input onChange={handleChange} value={singleProduct.price}  name="price" id="price" type="text"/> {/* cómo se pone como número? */}

          <div className='edit-buttons'>
            <button onClick={handleClickCancel} className='edit-cancel'>Cancel</button>
            <button type='submit' className='edit-update'>Update</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default EditProductCard