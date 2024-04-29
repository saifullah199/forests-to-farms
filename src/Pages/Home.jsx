import { Link, useLoaderData } from "react-router-dom";
import ItemCard from "../Components/ItemCard";
import Banner from "../Components/Banner";
import CraftCategories from "../Components/CraftCategories";
import Speciality from "../Components/Speciality";
import Trending from "../Components/Trending";


const Home = () => {

    const items = useLoaderData();

    return (
        <div>
            
            <div className="my-10">
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

            <div className="my-10  ">
                <Speciality/>
            </div>

            <div className="container mx-auto my-10">

                <CraftCategories> </CraftCategories>
                
            </div>

            <div className="my-5">
                <Trending/>
            </div>
        </div>
    );
};

export default Home;