import "./product.css";
import Price from "./price";
function Product({ title, idx }) {
    let oldprices = ["12,99","11,999","1,599","999"];
    let newprices = ["8,999", "6,999", "899", "599"];
    let description = [["800 DPI", "five Programmable buttons"],
       [ "Made for Ipad","slimmest design"],
        ["intuitive surface","durable"],
        ["wireless","Wifi-6E"]]
    return (

        <div className="product" >
            <h1>{title}</h1>
         <p>{description[idx][0]}</p>
         <p>{description[idx][1]}</p>
            <Price oldprice={oldprices[idx]} newprice={newprices[idx]}/>
        </div>
    );
}
export default Product;