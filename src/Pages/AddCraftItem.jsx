import Swal from 'sweetalert2'

const AddCraftItem = () => {

    const handleAddItem = e =>{
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
        const email = form.email.value;
        const userName = form.userName.value;
        const photo = form.photo.value;
        
        const newItem = {name, subcategory,price,rating,customization,description, 
            processing,stock,email,userName,photo}
        console.log(newItem);

        // send data to the server
        fetch('http://localhost:5000/item',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Item Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })

    }
    return (
        <div className="rounded-2xl">
           
           <div className="bg-[#F4F3F0] p-24  ">
            <h2 className="text-center text-3xl font-bold ">Add Craft Item</h2>
            <form onSubmit={handleAddItem}  className="space-y-8">
                {/* form row */}
                    <div className="flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Item Name" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Subcategory Name</span>
                        </label>
                        <label className="input-group" >
                            <input type="text" name="subcategory" placeholder="Subcategory Name" className="w-full input input-bordered" />
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
                            <input type="text" name="price" placeholder="price" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Rating</span>
                        </label>
                        <label className="input-group" >
                            <input type="text" name="rating" placeholder="rating" className="w-full input input-bordered" />
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
                            <input type="text" name="customization" placeholder="Customization" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Description</span>
                        </label>
                        <label className="input-group" >
                            <input type="text" name="description" placeholder="Description" className="w-full input input-bordered" />
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
                            <input type="text" name="processing" placeholder="Processing Time" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Stock Status</span>
                        </label>
                        <label className="input-group" >
                            <input type="text" name="stock" placeholder="Stock Status" className="w-full input input-bordered" />
                        </label>
                    </div>
                    </div>
                    {/* form row */}
                    <div className="flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="User Email" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> User Name</span>
                        </label>
                        <label className="input-group" >
                            <input type="text" name="userName" placeholder="User Name" className="w-full input input-bordered" />
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
                            <input type="text" name="photo" placeholder="Photo Url" className="w-full input input-bordered" />
                        </label>
                    </div>
                    
                    </div>
                <input type="submit" value="Add Item" className="btn btn-block" />
            </form>
        </div>
        </div>
    );
};

export default AddCraftItem;