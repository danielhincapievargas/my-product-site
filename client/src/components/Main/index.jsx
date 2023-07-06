import AddProductCard from '../AddProductCard';
import EditProductCard from '../EditProductCard';
import Product from '../Product';
import { useState } from 'react';
import { products } from '../Main/Data';


const Main = () => {


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
      />
      <AddProductCard 
      clickAdd={clickAdd}
      />
      <EditProductCard 
      clickEdit={clickEdit}
      singleProduct={singleProduct}
      setSingleProduct={setSingleProduct}
      />
    </>
  )
}

export default Main