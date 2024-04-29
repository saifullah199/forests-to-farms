import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {

    const item = useLoaderData()
    const {_id,name, subcategory,price,rating,customization,description, 
        processing,stock,photo} = item;

        
        const handleUpdateItem = (e) => {

            e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const description = form.description.value;
        const processing = form.processing.value;
        const stock = form.stock.value;
        
        const photo = form.photo.value;
        
        const updatedItem = {name, subcategory,price,rating,customization,description, 
            processing,stock,photo}
        console.log(updatedItem);

         // send data to the server
         fetch(`http://localhost:5000/item/${_id}`,{
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount >0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Item Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })

        }

    return (
        <div>
            <div className="bg-[#F4F3F0] p-24  ">
            <h2 className="text-center text-3xl font-bold ">Update Craft Item : {name} </h2>
            <form onSubmit={handleUpdateItem}  className="space-y-8">
                {/* form row */}
                    <div className="flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={name} name="name" placeholder="Item Name" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Subcategory Name</span>
                        </label>
                        <label className="input-group" >
                            <input type="text" defaultValue={subcategory} name="subcategory" placeholder="Subcategory Name" className="w-full input input-bordered" />
                        </label>
                    </div>
                    </div>
                    {/* form row */}
                    <div className="flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={price} name="price" placeholder="price" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Rating</span>
                        </label>
                        <label className="input-group" >
                            <input type="text" defaultValue={rating} name="rating" placeholder="rating" className="w-full input input-bordered" />
                        </label>
                    </div>
                    </div>
                    {/* form row */}
                    <div className="flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={customization} name="customization" placeholder="Customization" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Description</span>
                        </label>
                        <label className="input-group" >
                            <input type="text" defaultValue={description} name="description" placeholder="Description" className="w-full input input-bordered" />
                        </label>
                    </div>
                    </div>
                    {/* form row */}
                    <div className="flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={processing} name="processing" placeholder="Processing Time" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Stock Status</span>
                        </label>
                        <label className="input-group" >
                            <input type="text" defaultValue={stock}  name="stock" placeholder="Stock Status" className="w-full input input-bordered" />
                        </label>
                    </div>
                    </div>
                    
                    {/* form row */}
                    <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"> Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={photo} name="photo" placeholder="Photo Url" className="w-full input input-bordered" />
                        </label>
                    </div>
                    
                    </div>
                <input type="submit" value="Update" className="btn btn-block" />
            </form>
        </div>
           
        </div>
    );
};

export default UpdatePage;