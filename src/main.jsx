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
        element:<MyList></MyList>
      },
      {
        path: 'updatepage',
        element:<UpdatePage></UpdatePage>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
