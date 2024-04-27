import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const MyList = () => {

    const {user} = useContext(AuthContext)

    const filteredUsers = useLoaderData();
    

    

    

    return (
        <div className="grid md:grid-cols-2 gap-4">
            {
                filteredUsers.map(item => <div key={item._id} >
                
                        
                    
                        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={item.photo} className="w-[200px] h-[200px] rounded-full"  alt="Movie"/></figure>
  <div className="flex justify-between w-full">
    <div>
        <h2 className="card-title"> {item.name} </h2>
        <p>Price: {item.price} </p>
        <p>Rating: {item.rating} </p>
        <p>Stock: {item.stock} </p>
        <p>Customization: {item.customization} </p>
        
    
    </div>
    
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-5">
            <Link to={`/updatepage/${item._id}`} >
               <button  className="btn"> Update </button>
             </Link>
            <Link >
               <button  className="btn"> Delete </button>
             </Link>
        
    </div>
    </div>
  </div>
</div>
                    </div>)
            }
        </div>
    );
};

export default MyList;