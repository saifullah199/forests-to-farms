import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SubCateItems = () => {
    const { subcategory } = useParams(); // Extracting subcategory from URL params

    const [cateitems, setCateItems] = useState([]);

    useEffect(() => {
        fetch(`https://jute-wooden-server-theta.vercel.app/subcategory/${subcategory}`)
        .then(res => res.json())
        .then(data => {
            setCateItems(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }, [subcategory]); 

    return (
        <div className="grid md:grid-cols-2 gap-4 my-8">
            

            {
                cateitems.map(item => <div key={item._id}>
                    <div className="card card-side bg-base-100 shadow-xl  w-full">
  <figure><img src={item.photo} className="w-[200px] h-[200px] rounded-full"  alt="Movie"/></figure>
  <div className="flex px-5 ">
    <div>
        <h2 className="card-title"> {item.name} </h2>
        <div className="font-medium">
        <p>Price: {item.price} </p>
        <p>Rating: {item.rating} </p>
        <p>Stock: {item.stock} </p>
        <p>Processing time: {item.processing} </p>
        <p>Subcategory: {item.subcategory} </p>
        <p>Description: {item.description} </p>
        </div>
    
    </div> 
    <div>
            <Link to={`/viewdetails/${item._id}`}>
               <button  className="btn"> View Details </button>
             </Link>
    </div>
    
    
  </div>
            </div>

                </div>)
            }
            
        </div>
    );
};

export default SubCateItems;
