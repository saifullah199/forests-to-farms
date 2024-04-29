import { Link } from "react-router-dom";


const ItemCard = ({item}) => {

    const {_id,name, subcategory,price,rating,customization,description, processing,stock,email,userName,photo} = item

    
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={photo} className="w-[200px] h-[200px] rounded-full"  alt="Movie"/></figure>
  <div className="flex justify-between w-full">
    <div>
        <h2 className="card-title"> {name} </h2>
        <p>Price: {price} </p>
        <p>Rating: {rating} </p>
        <p>Stock: {stock} </p>
    
    </div>
    
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-5">
            <Link to={`/viewdetails/${_id}`}>
               <button  className="btn"> View Details </button>
             </Link>
        
    </div>
    </div>
  </div>
            </div>
        </div>
    );
};

export default ItemCard;