  
import React, { useState } from 'react';
import './tweet.css';
import EditTweet from '../EditTweet/EditTweet'


const Tweet = ({ i, userName, tag, textArea, handleDelete, handleEdit }) => {
const [edit, setEdit] = useState({ editing: false, id: 0 })

    return (
        <div className="tweetContainer">
            <div className="tweetBody">
                <div className="innerBody">
                   
<div className="body">
<div className="innerBody">
<p className="name">{userName}</p>
<p className="handle">{tag}</p>
</div>
<p className="tweet">{textArea}</p>
</div>
<div className='buttonContainer'>
        <button className="editButton" onClick={() => setEdit({ makeEdits: true, id: i })}> Edit </button>
        <button className="deleteButton" onClick={() => handleDelete (i) }> Delete </button>
   </div>
 </div>
       {edit.makeEdits 
       
       <EditTweet

                    
       
      {(i)} = {i}
       
       handleEdit={(i, edits) => {
       
        handleEdit(i, edits)
       
        setEdit({makeEdits: false, id: i})
       
       }}
       
       
       />: 
            </div>
        </div>
    );
}

export default Tweet;