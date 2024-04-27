import { useLoaderData } from "react-router-dom";
import ItemCard from "../Components/ItemCard";
import Banner from "../Components/Banner";


const Home = () => {

    const items = useLoaderData();

    return (
        <div>
            
            <Banner></Banner>

            <div className="grid md:grid-cols-2 gap-4">
                {
                    items.map(item => <ItemCard  
                                key={item._id}
                                item={item}
                                >

                                </ItemCard>)
                }
            </div>
        </div>
    );
};

export default Home;