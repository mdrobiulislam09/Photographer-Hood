import React from 'react';

const Review = ({reviews, i}) => {
    const {_id, address, name, photo, reviewed}= reviews;
    return (
        <tr>
                <th>{i + 1}</th>
                <td><img src={photo} alt="phot" /></td>
                <td>{address}</td>
                <td>{name}</td>
                <td>{reviewed}</td>
            </tr>
    );
};

export default Review;