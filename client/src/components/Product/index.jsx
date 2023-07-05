import './Product.scss';
import { dataMain } from '../Main/Data';

const Product = ({ handleClickAdd, handleClickEdit }) => {
  return (
    <>
      <article>

        <div className='title'>
          <h2>Product List</h2>
          <button onClick={handleClickAdd}>Add</button>
        </div>

        <table className='table'>

          <tr className='table-header'>
            <th className='table-header__name'>PRODUCT NAME</th>
            <th>COLOR</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th className='edit'>EDIT</th>
          </tr>

          {dataMain.map((item) => {
            return (
              <>
              <tr key={item.id} id={item.id} className='table-body'>
                <td className='table-body__name'>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td><span id={item.id} onClick={handleClickEdit} className='table-body__edit'>Edit </span><span>|</span><span className='table-body__delete'> Delete</span></td>
              </tr> 
              </>
            )
          })}
        </table>

      </article>
    </>
  )
}

export default Product