import AddProductCard from '../AddProductCard';
import EditProductCard from '../EditProductCard';
import Product from '../Product';
import { useState } from 'react';


const Main = () => {


  const[clickAdd, setClickAdd] = useState(false);
  const[clickEdit, setClickEdit] = useState(false);
  //const[itemClicked, setItemClicked] = useState(null);
  
  const handleClickAdd = () => {
    
    setClickAdd(true);
    clickEdit ? setClickEdit(!setClickEdit) : undefined;
  }

  const handleClickEdit = () => {
    //setItemClicked(item);
    setClickEdit(true);
    clickAdd ? setClickAdd(!clickAdd) : undefined;
  }
 


  return (
    <>
      <Product
        handleClickAdd={handleClickAdd}
        handleClickEdit={handleClickEdit}
      />
      <AddProductCard 
      clickAdd={clickAdd}
      />
      <EditProductCard 
      clickEdit={clickEdit}
      //item={itemClicked}
      />
    </>
  )
}

export default Main