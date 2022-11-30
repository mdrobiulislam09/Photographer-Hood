import React from 'react';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { _id, picture, servicename, price, details } = service;


    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <PhotoView src={picture}>
                    <img src={picture} alt="" />
                </PhotoView>
                {/* <img src={picture} alt="Shoes" className="rounded-xl" /> */}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{servicename}</h2>
                <h3 className="card-title">{price}</h3>
                <p>{details?.slice(0, 100)}</p>
                <p></p>
                <div className="card-actions">
                    <Link to={`/services/${_id}`}><button className='btn btn-primary'>See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;