import './AddProductCard.scss';

const AddProductCard = ({ clickAdd }) => {
  return (
    <>
      <div className={clickAdd ? 'add-card' : 'hiden'}>
        <h2>Add Product</h2>
        <form className='add-form'>

          <label htmlFor="product-name">PRODUCT NAME</label>
          <input placeholder='your product name' name='product-name' id='product-name' type="text"/>

          <label htmlFor="color">COLOR</label>
          <input placeholder='silver, black, white, etc' name='color' id='color' type="text"/>

          <label htmlFor="category">CATEGORY</label>
          <select name="category" id="category">
            <option value="Home">Home</option>
            <option value="Clothing">Clothing</option>
            <option value="Baby">Baby</option>
            <option value="Music">Music</option>
            <option value="Books">Books</option>
          </select>
          
          <label htmlFor="price">PRICE</label>
          <input placeholder='$999,99' name="price" id="price" type="number"/>

          <button>Add</button>
        </form>
      </div>
    </>
  )
}

export default AddProductCard