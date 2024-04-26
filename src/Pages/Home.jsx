import { useLoaderData } from "react-router-dom";


const Home = () => {

    const items = useLoaderData();

    return (
        <div>
            <h3>Items: {items.length} </h3>
        </div>
    );
};

export default Home;