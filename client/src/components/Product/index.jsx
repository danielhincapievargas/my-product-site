import './Product.scss';
import ProductList from '../ProductList';
import { dataMain } from '../Main/Data';

const Product = ({ handleClickAdd, handleClickEdit }) => {
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
            {dataMain.map((product) => {
              return (
                <ProductList
                key={product.id} 
                id={product.id}
                name={product.name}
                color={product.color}
                category={product.category}
                price={product.price}
                handleClickEdit={handleClickEdit}
                />
              )
            })}
          </tbody>
          
        </table>

      </article>
  )
}

export default Product