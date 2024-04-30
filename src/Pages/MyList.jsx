import { Link,  } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";


const MyList = () => {

    const {user} = useContext(AuthContext)
    const [items, setItems] = useState([])

    

    useEffect(() =>{
      fetch(`https://jute-wooden-server-theta.vercel.app/mylist/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
    },[user])
            
    const handleDelete =_id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
            
            fetch(`https://jute-wooden-server-mtr4255p1-md-khalid-saifullahs-projects.vercel.app//item/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then( data => {
                console.log(data);
                if( data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
            }
          });
    }
    

    

    return (
        <div className="mt-8 ">

          
            <div className="grid md:grid-cols-2 gap-4 p-5">
            {
                items.map(item => <div key={item._id}  >
                
                        
                    
                        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={item.photo} className="w-[200px] h-[200px] rounded-full"  alt="Movie"/></figure>
  <div className="flex justify-between w-full mx-4">
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
            
               <button onClick={() => handleDelete(item._id)}  className="btn"> Delete </button>
             
        
    </div>
    </div>
  </div>
</div>
                    </div>)
            }
            </div> 
        </div>
    );
};

export default MyList;