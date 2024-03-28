import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero bg-base-200 rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse gap-24">
                <img src="/public/hero.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="space-y-10">
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <div>
                        <Link to={"/listedbooks"} className=" bg-green-600 text-white px-7 py-4 rounded-2xl font-bold">View The List</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;