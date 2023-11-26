import React, { useState } from "react";

export default function TextForm(props) {
 
  const handleUpChange = (event) =>{

      setText(event.target.value);
    
  
  
  }
  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText=text.toUpperCase();

    setText(newText);
    if(text.length === 0){
      props.showAlert('no enough text','warning')
    }
    else{
      props.showAlert('converted to Uppercase','success')
    }
  }
  const handleUptolower =()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
    ;
    if(text.length===0){
      props.showAlert('no enough text','warning')
    }
    
    
    else{

      props.showAlert('coverted to lowercase','success')
    }
    
  }
  const handleUpcopy =()=>{
    let teext = document.getElementById('Mybox')

    teext.select();
    // text.setSelectionRange(0,99999);
    navigator.clipboard.writeText(teext.value);
    // alert("Copied to clipboard")
    if(text.length === 0){
      props.showAlert('No enough text for copy','warning');
    }
    else{

      props.showAlert('copy to clipboard','success')
    }

    
  }
  const removespaces =()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(' '));

    props.showAlert('Extra spaces removed','success')
  }
  const clearText = ()=>{
    setText('');
    if(text.length===0){
      props.showAlert('No text to clear','warning')
    }
    else{
      
      props.showAlert('Text cleared','success')

    }
  }
  const [text, setText] = useState("");
  // setText("new text");
  return (
    <>
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control textarea"
          name=""
          id="Mybox"
          cols="100"
          rows="8"
          value={text}
          onChange={handleUpChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick} >
        transform to uppercase
      </button>
      <button className="btn btn-primary m-10" onClick={handleUptolower}> transform to lowercase</button>
    <button className="btn btn-primary" onClick={handleUpcopy}>copy text</button>
    <button className="btn btn-warning" onClick={removespaces}>remove extra spaces</button>
    <button className="btn btn-danger" onClick={clearText}>clear text</button>
    </div>
    <div className="container my-2">
      <h1>your text summery</h1>
      <p>{text.split(' ').length} words {text.length} character</p>
      <p>{0.008 * text.split(' ').length} minute read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
