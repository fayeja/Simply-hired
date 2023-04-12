import { getShoppingCart } from "../utilities/fakedb";

const loader=async()=>{
     const loaderProduct=await fetch('/public/feature.json');
     const products=await loaderProduct.json();


     const storeData= getShoppingCart();
        const saveProduct=[];
        for (const id in storeData) {
            const addProduct =products.find(product=>product.id===id)
            
            if(addProduct){
                const quantity= storeData[id];
                addProduct.quantity=quantity;

                saveProduct.push(addProduct);
            }
        }
     return saveProduct;
}

export default loader;
