import React, { useState } from "react";


export default function Textform(props) {
  const handleonchange = (event) => {
    console.log("on change is handled");
    setText(event.target.value);
  };
  const handleupclick = (event) => {
    console.log("Uppercase was clicked  " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Coverted to uppercase","success");
  };
  const handlelowclick = (event) => {
    console.log("Lowercase was clicked  " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Coverted to Lowercase","success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const Emailextractor = (event) => {
    console.log("Emailextractor was clicked  " + text);
    const newText = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    setText(newText);
  };
  const readTxt = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(event){
        setText(event.target.result);
    };
    reader.readAsText(file);
    props.showalert("The file has been read","success");
}


  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{ color : props.mode==='dark'?'white':'#0d104e'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" 
          id="mytext"
          rows="10"
          placeholder="Enter text"
          value={text}
          onChange={handleonchange}
          style={{ backgroundColor : props.mode==='dark'?'#060517':'white', color:props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupclick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handlelowclick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={Emailextractor}>
        Extract Email
      </button>
      <button className="btn btn-primary mx-2" onClick={speak}>
        Speak
      </button>
      <input type="file" className="btn btn-secondary my-3" accept="text/plain" onChange = {readTxt}  />
    </div>
    <div className="container" style={{ color : props.mode==='dark'?'white':'#0d104e'}}>
      <h1>Text Summary:</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>Reading Time : {0.008*text.split(" ").length} Minutes</p>
      <h2>Preview:</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
