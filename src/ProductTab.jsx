import Product from "./product.jsx";
function ProductTab() {

    return (
        <>
         <Product Title="Phone" price={ 10000} />
         <Product Title="Laptop" price={60000} />
         <Product Title="Macbook" price={ 130000} features={features} />
        </>
    )
}
export default ProductTab;