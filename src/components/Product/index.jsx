import './Product.scss';
import ProductList from '../ProductList';


const Product = ({ 
  products = [],
  setClickEdit, 
  setClickAdd, 
  clickEdit,
  setSingleProduct
}) => {

  const handleClickEdit = (product) => {
      setClickEdit(product.id);
      //console.log(clickEdit);
      setSingleProduct(product);
      setClickAdd(false)
      

    /* if(clickEdit === product.id) {
      setClickEdit(product.id)
      setSingleProduct(product)
    } else {
      setClickEdit(null)
      setSingleProduct({
        name: '',
        color: '',
        categoty: '',
        price: ''
      })
    } */


    //clickAdd ? setClickAdd(!clickAdd) : undefined;
  }
  //console.log(clickEdit);

  const handleClickAdd = () => {
    setClickAdd(true)
    setClickEdit(null)
  }
  
  return (
      <article>

        <div className='title'>
          <h2>Product List</h2>
          <button onClick={handleClickAdd}>Add</button>
        </div>

        <table className='table'>

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
                />
              )
            })}
          </tbody>
          
        </table>

      </article>
  )
}

export default Product