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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('http://localhost:5000/item')
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
        loader: () => fetch('http://localhost:5000/item')
      },
      {
        path: '/addart',
        element: <AddCraftItem></AddCraftItem>
      },
      {
        path: '/mylist',
        element:<MyList></MyList>,
        loader : () => fetch(`http://localhost:5000/item`)
      },
      {
        path: '/updatepage/:id',
        element:<UpdatePage></UpdatePage>,
        loader: ({params}) => fetch(`http://localhost:5000/item/${params.id}`)
      },
      {
        path: '/viewdetails/:id',
        element: <ViewDetails/>,
        loader: ({params}) => fetch(`http://localhost:5000/item/${params.id}`)
        
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
