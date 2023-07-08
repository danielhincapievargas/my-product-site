import AddProductCard from '../AddProductCard';
import EditProductCard from '../EditProductCard';
import Product from '../Product';
import { useState, useEffect } from 'react';
//import { products as ProductList } from '../Main/Data';


const Main = () => {

  const[hideTable, setHideTable] = useState(false)
  const[products, setProducts] = useState([ ]);
  const[clickAdd, setClickAdd] = useState(false);
  const[clickEdit, setClickEdit] = useState(null);
  const[singleProduct, setSingleProduct] = useState({
        name: '',
        color: '',
        categoty: '',
        price: ''

  })
  const [loadingList, setLoadingList] = useState(true)
  const [errorList, setErrorList] = useState(null)

  useEffect(() => {
    (async function fetchData(){
      try {
        const response = await fetch('http://localhost:8080/products')
        const products = await response.json();
        setProducts(products.data)
        } catch(error){
          setErrorList(`Ups! ocurrió algo, inténtalo más tarde. Error ${error}`)
        } finally{
          setLoadingList(false)
        }
    })()
  }, [])

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
        clickEdit={clickEdit}
        setClickEdit={setClickEdit}
        setClickAdd={setClickAdd}
        setSingleProduct={setSingleProduct}
        setProducts={setProducts}
        hideTable={hideTable}
        setHideTable={setHideTable}
        loadingList={loadingList}
        errorList={errorList}
        setErrorList={setErrorList}
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