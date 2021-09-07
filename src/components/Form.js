import React, { useState } from 'react'

export default function Form(props) {
    const handleUpClick = () => {
        console.log("Uppercase is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleOnChange = (event) => {
        console.log("Change detected");
        setText(event.target.value)

    }
    const handleLowClick = () => {
        console.log("Lowercase is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")

    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }
    const handleCopy = () => {
        let text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value)
        setCopyButton("Copied")
        props.showAlert("Copied to Clipboard","success")

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    
    const [text, setText] = useState("")
    const [copyButton, setCopyButton] = useState("Copy")

    return (
        <>

            <div className="container" style={{backgroundColor: props.mode === 'dark'?'#00001a':'white', color: props.mode === 'dark'?'white':'black'}}>
                <h1><pre>{props.heading}</pre></h1>
                <div className="textarea-container">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor: props.mode === 'light'?'white':'#00001a',color: props.mode==='light'?'black':'white'}}></textarea>
                    <button onClick={handleCopy} value={copyButton} type="button">{copyButton}</button>
                </div>
                <button className={`btn btn-${props.mode=== 'dark'?'warning':'primary'} my-2 mx-2`} onClick={handleClearClick}>Clear Text</button>
                <button className={`btn btn-${props.mode=== 'dark'?'warning':'primary'} my-2 mx-2`} onClick={handleUpClick}>UPPERCASE</button>
                <button className={`btn btn-${props.mode=== 'dark'?'warning':'primary'} my-2 mx-2`} onClick={handleLowClick}>lowercase</button>
                <button className={`btn btn-${props.mode=== 'dark'?'warning':'primary'} my-2 mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <hr className="rounded" size="6"/>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2><pre>Text Summary</pre></h2>
                <h5><pre>Word Count: {text.length>0?text.split(" ").length:0}  Character Count: {text.length}</pre></h5>
                <pre>{text.length>0?Math.ceil(0.008 * text.split(" ").length):0} minute read</pre>
                <hr className="rounded" size="6" />


                <h2>Preview</h2>

                <p>{text.length>0?text:"Enter text in the textbox above to preview here"}</p>
            </div>
        </>
    )
}
