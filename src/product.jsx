import "./product.css";
function Product({ Title, price, features }) {

    
    return (
        <div className="product">
        <h3>{Title}</h3>
            <h5>price: {price} </h5>
            
            {/* <p>{list}</p>   */}   
            {/* or */}
            <p>{features.map((el) => <li>{el}</li> )}</p>
        

        </div>
    );
}
export default Product;