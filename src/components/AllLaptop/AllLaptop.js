import React from 'react';
import { addToDb, deleteShopingCart, removeItemFromDb} from '../Utilities/FakeDb';

const AllLaptop = (props) => {
    const {id,name,price}=props.laptop;
    const addToCart =(id)=>{
      addToDb(id)
    }
    const removeFromCart=id=>{
       
      removeItemFromDb(id);
    }
    const deletCart=()=>{
      deleteShopingCart()
    }
    return (
        <div style={{border:"2px solid salmon",borderRadius:"20px",margin:"20px",padding:"20px",background:"lightblue"}}>
             <h4>Brand:{name}</h4>
            <p>Price:{price}</p>
            <button onClick={()=>addToCart(id)}>Add to cart</button>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
            <button onClick={deletCart}>Delete Cart</button>
        </div>
    );
};

export default AllLaptop;