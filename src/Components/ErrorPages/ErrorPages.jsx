import { Link, useRouteError } from "react-router-dom";

const ErrorPages = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="text-center font-bold space-y-10">
            <h2>Oppss!!!</h2>
            <p>
                {error.status || error.message}
            </p>
            <div>
                <Link to={`/`} className=" bg-green-600 text-white px-7 py-4 rounded-2xl font-bold">Home</Link>
            </div>
        </div>
    );
};

export default ErrorPages;