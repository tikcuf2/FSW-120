
import React from 'react';

const NameCard = ({ firstName, lastName, email, placeOfBirth, phone, favoriteFood, textArea }) => {

    return (
        <div>
            <h1 className="badge-title">Badge:</h1>
            <div className="container">
                <p className="badge-text">Name: {firstName} {lastName}</p>
              
            </div>
        </div>
    );
}

export default NameCard;