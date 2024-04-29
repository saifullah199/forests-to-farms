import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const SubCateItems = () => {

    const items = useLoaderData()

    

    console.log(items)
    

    const [cateitems, setCateItems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/subcategory/${items.subcategory}`)
        .then(res => res.json())
        .then(data => {
            setCateItems(data)
        })
    },[])
    return (
        <div>
            Items  here : {cateitems.length}
        </div>
    );
};

export default SubCateItems;