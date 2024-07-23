import Product from "./product.jsx";
function ProductTab() {
    let option = ["amoled screen", "WIFI-6E"];
    // let option2 = { a: "pizzza", b: "Wanky wanky" };
    return (
        <>
         <Product Title="Phone" price={ 10000}  />
         <Product Title="Macbook" price={130000} features={option} />
        
            
        </>
    )
}
export default ProductTab;