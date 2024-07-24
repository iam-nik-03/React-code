import Product from "./product.jsx";
function ProductTab() {
    let option = ["amoled screen", "WIFI-6E"];
   
    return (
        <>

         <Product Title="Macbook ProBook" price={130000} features={option} />
         <Product Title="Macbook Air M3" price={60000} features={option} />
        
            
        </>
    )
}
export default ProductTab;