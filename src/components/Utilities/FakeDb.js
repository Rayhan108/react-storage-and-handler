const addToDb=id=>{
    let  shopingCart = {}; 
 

//    get shoping cart  2nd step
const storedCart =localStorage.getItem('shoping-cart');
if(storedCart){
    shopingCart =JSON.parse(storedCart);
}

    // add quantity    1st step
    const quantity = shopingCart[id];
    if(quantity){
    //   এখানে parseInt(quantity) না দিলেউ হবে কারন উপরে JSON parse করা হয়েছে  
       const newQuantity =quantity+1;
       shopingCart[id]=newQuantity;
    }else{
       shopingCart[id]=1;
    }

    localStorage.setItem('shoping-cart',JSON.stringify(shopingCart));

}
       


const removeItemFromDb =id=>{
    const storedCart =localStorage.getItem('shoping-cart');
    if(storedCart){
        const shopingCart = JSON.parse(storedCart);
        if(id in shopingCart){
            delete shopingCart[id];
            localStorage.setItem('shoping-cart',JSON.stringify(shopingCart));
        }
    }
}

const deleteShopingCart =()=>{
    localStorage.removeItem('shoping-cart');
}
export {
    addToDb,
 removeItemFromDb,
deleteShopingCart}