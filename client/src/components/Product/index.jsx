import './Product.scss'

const Product = () => {
  return (
    <>
      <article>

        <div className='title'>
          <h2>Product List</h2>
          <button>Add</button>
        </div>

        <table className='table'>

          <tr className='table-header'>
            <th className='table-header__name'>PRODUCT NAME</th>
            <th>COLOR</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th className='edit'>EDIT</th>
          </tr>

          <tr className='table-body'>
            <td className='table-body__name'>Recycled Steel Sausages</td>
            <td>white</td>
            <td>Music</td>
            <td>$386.00</td>
            <td><span className='table-body__edit'>Edit </span><span>|</span><span className='table-body__delete'> Delete</span></td>
          </tr>

          <tr className='table-body'>
            <td className='table-body__name'>Fantastic Frozen Shirt</td>
            <td>pink</td>
            <td>Clothing</td>
            <td>$20.00</td>
            <td><span className='table-body__edit'>Edit </span><span>|</span><span className='table-body__delete'> Delete</span></td>
          </tr>

        </table>

      </article>
    </>
  )
}

export default Product