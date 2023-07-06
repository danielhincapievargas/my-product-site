import './AddProductCard.scss';

const AddProductCard = ({
  clickAdd,
  onAddProduct,
  singleProduct,
  setSingleProduct
}) => {

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSingleProduct({ 
      ...singleProduct,
      [name]: value 
    }); 
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const newProduct = {
      ...singleProduct,
      id: singleProduct.id ? singleProduct.id : Date.now(),
    }
    onAddProduct(newProduct)

    setSingleProduct({
      name: '',
      color: '',
      category: '',
      price: '',
    })
  }

  return (
    <>
      <div className={clickAdd ? 'add-card' : 'hiden'}>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit} className='add-form'>

          <label htmlFor="name">PRODUCT NAME</label>
          <input onChange={handleChange} placeholder='your product name' name='name' id='name' type="text" required value={singleProduct.name}/>

          <label htmlFor="color">COLOR</label>
          <input onChange={handleChange} placeholder='silver, black, white, etc' name='color' id='color' type="text" required value={singleProduct.color}/>

          <label htmlFor="category">CATEGORY</label>
          <select onChange={handleChange} name="category" id="category" value={singleProduct.category}>
            <option value=""></option>
            <option value="Home">Home</option>
            <option value="Clothing">Clothing</option>
            <option value="Baby">Baby</option>
            <option value="Music">Music</option>
            <option value="Books">Books</option>
          </select>
          
          <label htmlFor="price">PRICE</label>
          <input onChange={handleChange} placeholder='$999,99' name="price" id="price" type="text" required value={singleProduct.price}/>
          <div className="add-buttons">
            <button className='edit-cancel'>Cancel</button>
            <button type='submit' className='add-botton'>Add</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddProductCard