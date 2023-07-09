import './Main.scss'
import AddProductCard from '../AddProductCard';
import EditProductCard from '../EditProductCard';
import Product from '../Product';
import Loading from '../Loading';
import { useState, useEffect } from 'react';

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
        products.data.length === 0 ? setHideTable(true) : setHideTable(false);
      } catch(error){
        setErrorList(`Oops! Something went wrong, please try again later. Error ${error}`)
      } finally{
          setLoadingList(false);
          console.log(singleProduct);
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
    {loadingList ? 
    <>
    <Loading />
    </> 
    : errorList ? 
    <>
      <div className='error-message'>
      <img src="/error.png" alt="Error Image" />
      <div>{errorList}</div>
      </div>
    </>
    : 
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
      }
    </>
  )
}

export default Main