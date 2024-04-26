import { useLoaderData } from "react-router-dom";


const ArtCraftsItems = () => {

    const items = useLoaderData()
    return (
        <div>
            This is Art & Crafts Items {items.length}

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Photo </th>
        <th> Name </th>
        <th>Price</th>
        <th> Description </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        items.map(item => <tr key={item._id} className="">
        
        <td> <img src={item.photo} alt="" className="w-[50px]" /> </td>
        <td> {item.name} </td>
        <td> {item.price} </td>
        <td> {item.description} </td>
        <td>
            <button  className="btn"> View Details </button>
        </td>
      </tr>)
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ArtCraftsItems;