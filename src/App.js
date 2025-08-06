import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//import Accordian from "./components/Accordian";

function App() {
  return (
    <>
      <Navbar title="TextUtils" mode="light" />
      
      <div className="container my-3">

      <div><TextForm  heading="Enter the text to analyze" mode="light"></TextForm></div> 
      {/*  <Accordian />  */}
    </div>
    </>
  );
}

export default App;
