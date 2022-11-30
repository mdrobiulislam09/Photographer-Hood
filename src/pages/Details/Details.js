import React, { useContext, useEffect, useState } from 'react';
// import { useQuery } from 'react-query';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../authprovider/AuthProvider';
import Review from '../Review/Review';

const Details = () => {
    const { user } = useContext(AuthContext)
    const { details, picture, price, rate, servicename, _id } = useLoaderData();
    const [review, setReview] = useState([]);
    // const { data: review = []} = useQuery({
    //     queryKey: ['review'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/review');
    //         const data = await res.json();
    //         return data;
    //     }
    // })\
    useEffect( () => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReview(data))
    }, [user?.email])




    const handeleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;


        const reviewing = {
            name: user.displayName,
            address: user.email,
            photo: user.photoURL,
            reviewed: review,
            location: _id,
        }
        console.log(reviewing, user)

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewing)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledge) {
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <section>
                <div className=" w-full bg-base-100 shadow-xl">
                    <figure><img src={picture} alt="imag" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{servicename}</h2>
                        <h2 className="card-title">Price: {price}</h2>
                        <h2 className="card-title">Rate: {rate}</h2>
                        <p>{details}</p>
                    </div>
                </div>
            </section>
            <section className='my-3'>
                <div>
                    <div>
                        <h2>Submit Your review</h2>
                        <form onSubmit={handeleReview}>
                            <input type="text" name='review' placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                    <h2>Reviews</h2>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Photo</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Review</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        review.map((reviews, i) => <Review
                                            key={reviews._id}
                                            reviews={reviews}
                                            i={i}
                                        ></Review>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Details;