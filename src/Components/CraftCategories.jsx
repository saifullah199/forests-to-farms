import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CraftCategories = () => {

    const [crafts, setCrafts] = useState([])
    useEffect(() =>{
        fetch('https://jute-wooden-server-theta.vercel.app//subcategory')
        .then(res => res.json())
        .then(data => {
            setCrafts(data)
        })
    },[])
    return (
        
        <div >
            <h3 className="text-3xl font-bold text-center mt-7"> Jute & Wooden Categories  </h3>
            
                    
                
            <div className="grid md:grid-cols-2 gap-4">
            {
                crafts.map( craft => <Link
                    to={`/subcateitems/${craft.subcategory}`}
                    key={craft._id}> 

        <div className="card card-side bg-base-100 shadow-xl justify-between items-center w-full">
        <figure><img src={craft.photo} className="w-[200px] h-[200px] rounded-full"  alt="Movie"/></figure>
        <div className="flex ">
    <div>
        <h2 className="card-title"> {craft.name} </h2>
        <div className="font-medium">
        <p>Price: {craft.price} </p>
        <p>Rating: {craft.rating} </p>
        <p>Stock: {craft.stock} </p>
        <p>Subcategory: {craft.subcategory} </p>
        </div>
    
    </div>
    
    
  </div>
            </div>
                </Link>)
            }
            </div>
            
        </div>
    );
};

export default CraftCategories;