import React from 'react';

const Review = ({reviews, i}) => {
    const {address, name, photo, reviewed, location}= reviews;
    return (
        <tr>
                <th>{i + 1}</th>
                <td><img src={photo} alt="phot" /></td>
                <td>{address}</td>
                <td>{name}</td>
                <td>{location}</td>
                <td>{reviewed}</td>
            </tr>
    );
};

export default Review;