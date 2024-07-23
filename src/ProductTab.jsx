import Product from "./product.jsx";
function ProductTab() {
    let option = ["amoled screen", "WIFI-6E"];
   
    return (
        <>

         <Product Title="Macbook" price={130000} features={option} />
        
            
        </>
    )
}
export default ProductTab;