import './ProductList.scss';

const ProductList = ({id, name, color, category, price, handleClickEdit, isSelected, product, handleDeleteProduct, loading}) => {

  const classProduct = isSelected ? 'product--selected' : '';

  return (
    <tr id={id} className={`product ${classProduct}`}>
      <td className='product__name'>{name}</td>
      <td>{color}</td>
      <td>{category}</td>
      <td className='product__price'>$ {price}</td>
      <td><span id={id} onClick={() => handleClickEdit(product)} className='product__edit'>Edit </span><span> | </span><span onClick={()=>handleDeleteProduct(product)} className='product__delete' disabled={loading}> Delete</span></td>
    </tr>
  )
}

export default ProductList

