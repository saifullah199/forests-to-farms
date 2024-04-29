import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const SubCateItems = () => {

    const items = useLoaderData()

    console.log(items)
    

    // const [cateitems, setCateItems] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/mylist/${category?.subcategory}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setCateItems(data)
    //     })
    // },[category])
    return (
        <div>
            Items  here : {items.length}
        </div>
    );
};

export default SubCateItems;