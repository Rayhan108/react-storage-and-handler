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
       const newQuantity =quantity+1;
       shopingCart[id]=newQuantity;
    }else{
       shopingCart[id]=1;
    }

    localStorage.setItem('shoping-cart',JSON.stringify(shopingCart));

}
export {addToDb}