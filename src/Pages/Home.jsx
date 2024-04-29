import { Link, useLoaderData } from "react-router-dom";
import ItemCard from "../Components/ItemCard";
import Banner from "../Components/Banner";
import CraftCategories from "../Components/CraftCategories";


const Home = () => {

    const items = useLoaderData();

    return (
        <div>
            
            <div className="mt-10">
                <Banner></Banner>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {
                    items.map(item => <ItemCard  
                                key={item._id}
                                item={item}
                                >

                                </ItemCard>)
                }
            </div>

            <div className="container mx- auto my-10">
                <Link to={`/subcateitems/:subcategory`}>  
                    <CraftCategories> </CraftCategories>
                </Link>
            </div>
        </div>
    );
};

export default Home;