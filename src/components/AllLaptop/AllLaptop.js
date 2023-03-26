import React from 'react';
import { addToDb } from '../Utilities/FakeDb';

const AllLaptop = (props) => {
    const {id,name,price}=props.laptop;
    const addToCart =(id)=>{
      addToDb(id)
    }
    return (
        <div style={{border:"2px solid salmon",borderRadius:"20px",margin:"20px",padding:"20px",background:"lightblue"}}>
             <h4>Brand:{name}</h4>
            <p>Price:{price}</p>
            <button onClick={()=>addToCart(id)}>Add to cart</button>
        </div>
    );
};

export default AllLaptop;