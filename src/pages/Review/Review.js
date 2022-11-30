import React from 'react';

const Review = ({reviews, i}) => {
    const {_id}= reviews;
    return (
        <div>
            {_id}
        </div>
    );
};

export default Review;