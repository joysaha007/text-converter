import React, { useState } from 'react';

export default function TextForm1(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase.","success");
    }
    
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase.","success");
    }
    //...
    const handleCapitalizeClick = () => {
        let newText = capitalizeFirstCharacterInSentence(text);
        setText(newText);
        props.showAlert("Converted to generalform.","success");
    }
    
    const capitalizeFirstCharacterInSentence = (text) => {
        // Split the text into sentences
        let sentences = text.split('. ');
    
        // Capitalize the first character of the first word in each sentence
        sentences = sentences.map(sentence => {
            // Trim any leading or trailing whitespace
            sentence = sentence.trim();
            // Capitalize the first character of the sentence
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        });
    
        // Join the sentences back into a single string
        return sentences.join('. ');
    };
    
    
    //..
    
    const handleLeftClick = () => {
        setText('');
        props.showAlert("Clear text","danger");
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container mt-3" style={{color:props.mood==='dark'? 'white':'black'}}>
                <h1>{ props.heading }</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={ handleOnChange } style={{backgroundColor:props.mood==='dark'? '#113F5D':'white', color:props.mood==='dark'? 'white':'black'}} value={ text } id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-outline-primary" onClick={ handleUpClick }>
                    Convert to Uppercase
                </button>
                <button className="btn btn-outline-success ml-3" onClick={ handleDownClick }>
                    Convert to Lowercase
                </button>
                <button className="btn btn-outline-warning ml-3" onClick={ handleCapitalizeClick }>
                    Convert to Generalform
                </button>
                <button className="btn btn-outline-danger ml-3" onClick={ handleLeftClick }>
                    Clear text
                </button>
            </div>
            <div className="container mt-3" style={{color:props.mood==='dark'? 'white':'black'}}>
                <h2>Your text summary.</h2>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter something in the textbox above to Preview it here."}</p>
            </div>
        </>
    );
}
