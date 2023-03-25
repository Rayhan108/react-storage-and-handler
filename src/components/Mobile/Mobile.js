import React from 'react';
import AllMobile from '../AllMobile/AllMobile';

const Mobile = () => {
    const mobiles=[
        {id:1,name:'oppoA5',price:17500},
        {id:2,name:'oppoj5',price:19500},
        {id:3,name:'oppoD5',price:16500},
        {id:4,name:'oppoS5',price:22500},
        {id:5,name:'oppoX5',price:11500}
            
          ]
    return (
        <div>
            <h1>Letest Phones</h1>
          {
            mobiles.map(mobile =><AllMobile key={mobile.id} mobile={mobile}></AllMobile>)
          }  
        </div>
    );
};

export default Mobile;