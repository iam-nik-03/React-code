import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MessageBox from "./Activity/MessageBox.jsx";

function App() {
  return(
    <>
      <MessageBox userName="Nik" textColor="yellow"/>
      <MessageBox userName="Om" textColor="blue"/>
       <ProductTab />

    </>
  );
  

}

export default App;
