import React,{useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {

    const handleupClick = () => {
        //console.log("uppercase was clicked");
        let newTetx = text.toUpperCase();
        setText(newTetx);
    }

const handleOnChange = (event) => {

  //  console.log("on change");
    setText(event.target.value);
}

    const [text, setText] = useState("Enter text here");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea  className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        <button className='btn btn-primary my-3' onClick={handleupClick}>Convert to Uppercase</button>
        </div>
    </div>


  )
}
