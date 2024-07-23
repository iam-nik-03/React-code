import "./product.css";
function Product({ Title, price ,features}) {
    return (
        <div className="product">
        <h3>{Title}</h3>
            <h5>price: {price} </h5>
            <h4>{features}</h4>

        </div>
    );
}
export default Product;