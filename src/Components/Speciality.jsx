

const Speciality = () => {
    return (
        <div className="container mx-auto bg-base-300 px-10 rounded-xl">
            <h3 className="text-3xl font-bold text-center my-5"> Our Speciality</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
                <img className="w-[300px] h-[200px] rounded-2xl" src="https://i.ibb.co/ZTM55Q1/2149743872.jpg" alt="" />
                <img className="w-[300px] h-[200px] rounded-2xl" src="https://i.ibb.co/XCsPNDq/2151003070.jpg" alt="" />
                <img className="w-[300px] h-[200px] rounded-2xl" src="https://i.ibb.co/tBDKkgv/2148491119.jpg" alt="" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10"> 
                <div className="border-r px-10 text-2xl font-bold">
                    <img className="w-[50px] h-[50px] rounded-full text-center" src="https://i.ibb.co/0hPk8ff/990.jpg" alt="" />
                    <h3>24/7 Free Support</h3>
                    <p> You can ask any question <br />
                     about the product</p>
                </div>
                <div className="border-r px-10 text-2xl font-bold">
                    <img className="w-[50px] h-[50px] rounded-full" src="https://i.ibb.co/CWPtz0D/3978.jpg" alt="" />
                    <h3> Money Back Returns</h3>
                    <p> If you will get wrong products.</p>
                </div>
                <div className=" px-10 text-2xl font-bold">
                    <img className="w-[50px] h-[50px] rounded-full" src="https://i.ibb.co/L6MJDXp/1235.jpg" alt="" />
                    <h3> Free Shipping Nationwide</h3>
                    <p> We offer free shipping at your home </p>
                </div>

            </div>
        </div>
    );
};

export default Speciality;