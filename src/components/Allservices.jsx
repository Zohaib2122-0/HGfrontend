
import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const services = [
  {
    id: 1,
    title: 'Graphic Designing',
    to: '/portfolio',
  },
  {
    id: 2,
    title: 'UI and Interactive Design',
    to: '/portfolio',
  },
  {
    id: 3,
    title: 'Advertising and Marketing Design',
    to: '/portfolio',
  },
  {
    id: 4,
    title: 'Motion Graphics and Animation',
    to: '/portfolio',
  },
  {
    id: 5,
    title: 'Packaging Design',
    to: '/portfolio',
  },
  {
    id: 6,
    title: 'Game Design',
    to: '/portfolio',
  },
  {
    id: 7,
    title: 'Illustration',
    to: '/portfolio',
  },
  {
    id: 8,
    title: 'Publication and Typographic Design',
    to: '/portfolio',
  },
   {
    id: 9,
    title: 'Web design',
    to: '/portfolio',
  }
];

const Allservices = () => {


    const [activeId, setActiveId] = useState(1);

    const activeService = services.find((s) => s.id === activeId);


    return (
        <div className="min-h-screen bg-darkbg text-white px-6 py-10 md:px-20">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <p className="text-sm text-lab font-semibold mb-1">Our Services</p>
                    <h2 className="text-4xl font-bold">
                        Our innovative <span className="text-lab">services</span>
                    </h2>
                </div>
                <button className="bg-lab lg:hidden hover:bg-yellow-500 text-black px-2 py-2  rounded-xl text-sm font-semibold flex items-center gap-2 " >
                   
                   <Link to={"/portfolio"} className='flex justify-center items-center '>
                    Services
                   </Link>
                </button>
                <button className="bg-lab hidden lg:block hover:bg-yellow-500 text-black px-5 py-2 rounded-xl text-sm font-semibold flex  items-center gap-2 " >
                   
                   <Link to={"/portfolio"} className='flex justify-center items-center '>
                View All  Services 
                   </Link>
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                    {services.map((service) => (
                        <Link  key={service.id} to={service.to}>

                            <button
                                key={service.id}
                                onClick={() => setActiveId(service.id)}
                                className={` flex items-center w-full justify-between px-6 py-4 rounded-2xl transition-all duration-300 font-semibold text-left text-white ${activeId === service.id
                                    ? 'bg-lab text-black'
                                    : 'bg-[#1f1f1f] hover:bg-[#2c2c2c]'
                                    }`}
                            >
                                <span>
                                    {String(service.id).padStart(2, '0')}. {service.title}
                                </span>
                                {activeId === service.id ? <FaPlus /> : <FaTimes />}
                            </button>
                        </Link>

                    ))}
                </div>

                {activeService && (
                    <div className="relative w-full md:w-1/2 ">
                        <img
                            // src={activeService.image || 'https://demo.awaikenthemes.com/rovex/wp-content/uploads/2025/01/service-image-1.jpg'}
                            src={'https://demo.awaikenthemes.com/rovex/wp-content/uploads/2025/01/service-image-1.jpg'}
                            alt="Service Visual"
                            className="rounded-3xl w-full h-auto object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 backdrop-blur-lg text-white rounded-b-3xl">
                            <div className="flex items-center gap-4 mb-2">
                                <img
                                    src={activeService.icon || "public/A-One - Logo-02.jpeg"}
                                    alt="Icon"
                                    className="w-16 h-16 rounded-full p-2"
                                />
                                <h3 className="text-lg font-bold">{activeService.title}</h3>
                            </div>
                            <p className="text-sm text-gray-300">
                                {activeService.description || 'Service description goes here.'}
                            </p>
                            <button className="mt-4 text-lab font-semibold flex items-center gap-1 text-sm">
                                
                                <Link to={"/portfolio"} className='flex justify-center items-center '>
                                Read More <FaPlus className="text-xs mx-2" />
                                </Link>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Allservices


