// import logo from "./logo.svg";
import "./App.css";

import Navbar from "./component/Navbar";

import Alert from "./component/Alert";
import TextForm from "./component/TextForm";
import About from "./component/About";

import { useState } from "react";
import{Routes,Route}  from "react-router-dom"

function App() {
  const [mode, setMode] = useState("primary");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "primary") {
      setMode("dark");
      document.body.style.backgroundColor = "#474747";
      document.body.style.color = "#fff";
      document.querySelector("#Mybox").style.backgroundColor = "transparent";
      document.querySelector("#Mybox").style.color = "#fff";
      showAlert("darkmode has been enabled", "success");
      // setInterval(() => {
      //   document.title='owaiss'

      // }, 2000);
      // setInterval(() => {
      //   document.title='unaix'

      // }, 1500);
    } else {
      setMode("primary");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      document.querySelector("#Mybox").style.color = "#000";
      showAlert("lightmode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title={["owais", " unaix"]}
        homeutils="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading='Enter The Text To Analyze'/>
<About/>
      

      
     
    </>
  );
}


export default App;
