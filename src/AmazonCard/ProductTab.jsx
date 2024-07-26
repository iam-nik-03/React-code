import Product from "./product.jsx";
function ProductTab() {
   let styles = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems:"center",
      
   }
     return (
        <div style={styles}>
           <Product title="Logitech MX Master" idx={0} />
         <Product   title="Apple pencil (GEN 2)"idx={1}/>
         <Product  title="Zebronic b-Transf" idx={2}/>
         <Product title="Samsung SSD 889 " idx={3}/>
      </div>
    )
}
export default ProductTab;