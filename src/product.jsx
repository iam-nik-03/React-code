import "./product.css";
function Product({ Title, price, features }) {
    let isDiscount = price > 100000;
    let noDiscount = !isDiscount;
    
    let style =  { backgroundColor: isDiscount ? "green":null }; 
    let style2 = { backgroundColor: !isDiscount ? "pink":null };  //by feault here no confitions are added 
    
    return (
        <div className="product" style={style2}>
        <h3  style={style}>{Title}</h3>
            <h5>price: {price} </h5>
            
            {/* <p>{list}</p>   */}   
            {/* or */}
            <p>{features.map((el) => <li>{el}</li>)}</p>
            {price>100000? <p style={style2}>"Discount of 10%"</p> : null}
        

        </div>
    );
}
export default Product;