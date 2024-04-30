import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ArtCraftsItems from './Pages/ArtCraftsItems';
import AddCraftItem from './Pages/AddCraftItem';
import MyList from './Pages/MyList';
import UpdatePage from './Pages/UpdatePage';
import ViewDetails from './Pages/ViewDetails';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';
import SubCateItems from './Pages/SubCateItems';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('https://jute-wooden-server-theta.vercel.app/item')
      },
      {
        path: '/login',
        element: <Login/>,

      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/art-craft',
        element: <ArtCraftsItems></ArtCraftsItems>,
        loader: () => fetch('https://jute-wooden-server-theta.vercel.app/item')
      },
      {
        path: '/addart',
        element: <PrivateRoute> <AddCraftItem/> </PrivateRoute>
      },
      {
        path: '/mylist',
        element:<PrivateRoute><MyList/></PrivateRoute>,
        
      },
      {
        path: '/updatepage/:id',
        element:<PrivateRoute> <UpdatePage/> </PrivateRoute>,
        loader: ({params}) => fetch(`https://jute-wooden-server-theta.vercel.app/item/${params.id}`)
      },
      {
        path: '/viewdetails/:id',
        element: <PrivateRoute> <ViewDetails/> </PrivateRoute>,
        loader: ({params}) => fetch(`https://jute-wooden-server-theta.vercel.app/item/${params.id}`)
        
      },
      {
        path: '/subcateitems/:subcategory',
        element: <SubCateItems/>,
         loader: () => fetch('https://jute-wooden-server-theta.vercel.app/item')
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
