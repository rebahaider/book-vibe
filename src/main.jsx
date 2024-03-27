import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Listedbooks from './Components/Listedbooks/Listedbooks.jsx'
import MainLayOuts from './Components/Layouts/MainLayOuts.jsx'
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx'
import SinglePage from './Components/SinglePage/SinglePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts></MainLayOuts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/singlePage/:id",
        element: <SinglePage></SinglePage>,
        loader: ({ params }) => {
          return fetch(`/fakeData/${params.id}.json`);
        },
      },
      {
        path: "/listedbooks",
        element: <Listedbooks></Listedbooks>,
      },
      {
        path: "/pagetoread",
        element: <PagesToRead></PagesToRead>
      },
    ],
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
