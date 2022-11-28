import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {

    const {_id, picture, servicename} =  service;

    // if(i > 2){
    //     return;
    // }

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{servicename}</h2>
                <div className="card-actions">
                    <Link to='/details'><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;