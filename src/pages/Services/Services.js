import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className=' mb-10'>
            <div>
                <p className='text-center text-3xl text-red-600 mb-6'>My Photography Services</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-10'>
                {
                    services.map((service, i) => {
                        if (i < 3) {
                            return (
                                <Service
                                    key={service._id}
                                    service={service}
                                ></Service>
                            )
                        } else if (!service) {
                            return <Service
                                key={service._id}
                                service={service}
                            ></Service>
                        }
                    }
                    )
                }
            </div>
            <Link className='btn  ml-10 text-3xl'>See All</Link>
        </div>
    );
};

export default Services;