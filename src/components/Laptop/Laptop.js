import React, { useEffect, useState } from 'react';
import AllLaptop from '../AllLaptop/AllLaptop';
import './Laptop.css'

const Laptops = () => {
    const [laptops,setLaptops] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setLaptops(data))
    },[])
    return (
        <div>
            <h1>Latest laptops</h1>
          <div className="laptop-container">
          {
                laptops.map(laptop=><AllLaptop key={laptop.id} laptop={laptop}></AllLaptop>)
            }
          </div>
        </div>
    );
};

export default Laptops;