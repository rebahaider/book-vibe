import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../Components/Layouts/MainLayOuts";
import ErrorPages from "../Components/ErrorPages/ErrorPages";
import Home from "../Components/Home/Home";
import SinglePage from "../Components/SinglePage/SinglePage";
import Listedbooks from "../Components/Listedbooks/Listedbooks";
import PagesToRead from "../Components/PagesToRead/PagesToRead";
import ReadItems from "../Components/ReadItems/ReadItems";
import Wishlist from "../Components/Wishlist/Wishlist";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOuts></MainLayOuts>,
        errorElement: <ErrorPages></ErrorPages>,

        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/fakeData.json"),
            },
            {
                path: "/singlePage/:bookId",
                element: <SinglePage></SinglePage>,
            },
            {
                path: "/listedbooks",
                element: <Listedbooks></Listedbooks>,
                loader: () => fetch("/fakeData.json"),
                children:[
                    {
                        index:true,
                        element:<ReadItems></ReadItems>,
                        loader: () => fetch("/fakeData.json"),
                    },
                    {
                        path:"wishList",
                        element:<Wishlist></Wishlist>,
                        loader: () => fetch("/fakeData.json"),
                    },
                ]
            },
            {
                path: "/pagetoread",
                element: <PagesToRead></PagesToRead>
            },
        ],
    },

])