import AddProductCard from '../AddProductCard';
import EditProductCard from '../EditProductCard';
import Product from '../Product';
import { useState } from 'react';
import { products as ProductList } from '../Main/Data';


const Main = () => {

  const[hideTable, setHideTable] = useState(false)
  const[products, setProducts] = useState(ProductList);
  const[clickAdd, setClickAdd] = useState(false);
  const[clickEdit, setClickEdit] = useState(null);
  const[singleProduct, setSingleProduct] = useState({
        name: '',
        color: '',
        categoty: '',
        price: ''

  })
  //const[itemClicked, setItemClicked] = useState(null);
  
  /* const handleClickAdd = () => {
    
    setClickAdd(true);
    clickEdit ? setClickEdit(!setClickEdit) : undefined;
  } */

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  }

  const handleUpdateProduct = (singleProduct) => {
    const productIndex = products.findIndex((item) => item.id === singleProduct.id)

    if(productIndex !== -1) {
      const updateProducts = [...products];
      updateProducts[productIndex] = singleProduct;
      setProducts(updateProducts);
      setClickEdit(null)
    } else {
      }
  }
  
  return (
    <>
      <Product
        products={products}
        //handleClickAdd={handleClickAdd}
        //clickAdd={clickAdd}
        clickEdit={clickEdit}
        setClickEdit={setClickEdit}
        setClickAdd={setClickAdd}
        setSingleProduct={setSingleProduct}
        setProducts={setProducts}
        hideTable={hideTable}
        setHideTable={setHideTable}
      />
      <AddProductCard 
      onAddProduct={handleAddProduct}
      clickAdd={clickAdd}
      setClickAdd={setClickAdd}
      singleProduct={singleProduct}
      setSingleProduct={setSingleProduct}
      setHideTable={setHideTable}
      />
      <EditProductCard 
      clickEdit={clickEdit}
      singleProduct={singleProduct}
      setSingleProduct={setSingleProduct}
      onUpdateProduct={handleUpdateProduct}
      setClickEdit={setClickEdit}
      />
    </>
  )
}

export default Main