import React from 'react';

const AllMobile = (props) => {
    const {id,name,price}=props.mobile;
    const addToCart =(id)=>{
        console.log("item added",id);
    }
    return (
        <div style={{border:"2px solid salmon",borderRadius:"20px",margin:"20px",padding:"20px",background:"gray"}}>
            <h4>Brand:{name}</h4>
            <p>Price:{price}</p>
            <button onClick={()=>addToCart(id)}>Add to cart</button>
        </div>
    );
};

export default AllMobile;