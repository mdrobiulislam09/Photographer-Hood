import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import Service from '../service/Service';
import './Services.css'

const Services = () => {
    const [loader, setLoader] = useState(false)

    const [services, setServices] = useState([]);
    useEffect(() => {
        setLoader(true)
        fetch('https://eleven-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoader(false)
            })
    }, [])

    return (
        <div className=' mb-10'>
            <div>
                <p className='text-center text-3xl text-red-600 mb-6'>My Photography Services</p>
            </div>
            {loader ? <div className='spiner'>
                <ClipLoader
                    size={116}
                    color={'green'}
                    
                />
            </div>
                :
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-10'>
                        {

                            services.map((service) => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Services;