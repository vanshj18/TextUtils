import React, {useState} from 'react'


export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase clicked" + text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  const handleLoClick = ()=>{
    // console.log("LowerCase clicked" + text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }
  const handleClearClick = ()=>{
    let newText='';
    setText(newText)
    props.showAlert("Text has been cleared","success");
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces had been removed","success");
  }
  const handleOnChange = (event)=>{
    // console.log("Onchanged clicked");
    setText(event.target.value);  
  }
  const [text,setText] = useState('Enter text here');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="ab-3 input-group">
        <span className="input-group-text">Text Area</span>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"black": "white", color: props.mode==="dark"?'white':"black"}} id = "myBox" aria-label="With textarea" rows="7"> 
        </textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-outline-success mx-1 my-2" onClick={handleUpClick}>convert to UPPERCASE</button>
      <button disabled={text.length===0} className="btn btn-outline-success mx-1 my-2" onClick={handleLoClick}>convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-outline-success mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-outline-success mx-1 my-2" onClick={handleCopy}>Copt Text</button>
      <button disabled={text.length===0} className="btn btn-outline-success mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>
      <p>{.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes needed to read.</p>
    </div>
    </>
  )
}
