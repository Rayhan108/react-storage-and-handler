import React from 'react';

const AllMobile = (props) => {
    const {id,name,price}=props.mobile;
    return (
        <div style={{border:"2px solid salmon",borderRadius:"20px",margin:"20px",padding:"20px",background:"gray"}}>
            <h4>Brand:{name}</h4>
            <p>Price:{price}</p>
        </div>
    );
};

export default AllMobile;