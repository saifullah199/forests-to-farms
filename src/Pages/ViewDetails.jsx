import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
  // const { itemId } = useParams();

  const items = useLoaderData();
  const { name, subcategory,price,rating,customization,description, 
    processing,stock,photo} = items 
 

  

    return (
        <div className="m-10">
             <div data-aos="zoom-in" data-aos-duration="1000" className="card relative  bg-base-100 shadow-xl">
  <figure className="relative">
    <img className="rounded-2xl" src= {photo} alt="Album"/>
    </figure>
  <div className="card-body absolute top-72 right-10 text-black">
    <h2 className="card-title text-3xl font-bold"> {name} </h2>
    <div className="text-2xl font-medium">
        <p> Price: {price} </p>
        <p>Status: {rating}</p>
        <p>Segment Name: {customization}</p>
        <p>Area: {stock}</p>
        <p>Location: {processing}</p>
        <p>Facilities: {subcategory}</p>
        
    </div>
    <p className="text-2xl"> {description} </p>
    
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div> 


        </div>
    );
};

export default ViewDetails;