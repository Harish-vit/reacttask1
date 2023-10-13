import React, { useState } from 'react';
import './wordcnt.css';
export default function Wordcnt(){
    const handleOnchange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const[text, setText] = useState("");

    return(
        <>
            <div className='container'>
                <div className='mb-3'>
                    <textarea className='form-control mybox' value={text} onChange={handleOnchange}  rows="8"></textarea>
                </div>
            </div>

            <div className='container'>
                <p>{text.split(" ").filter(Boolean).length} words</p>
            </div>
        </>
    )
}