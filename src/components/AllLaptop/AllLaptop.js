import React from 'react';

const AllLaptop = (props) => {
    const {name,price}=props.laptop;
    return (
        <div style={{border:"2px solid salmon",borderRadius:"20px",margin:"20px",padding:"20px",background:"lightblue"}}>
             <h4>Brand:{name}</h4>
            <p>Price:{price}</p>
        </div>
    );
};

export default AllLaptop;