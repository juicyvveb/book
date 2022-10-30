import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.scss';
import {
  createBrowserRouter,
  RouterProvider,
  useOutlet,
} from "react-router-dom";
import { Root, loader as listLoader } from './routes/Root';
import ErrorPage from "./error-page";
import Index from './routes/Index';
import User, { loader as loadUser } from './components/user/User';
import Block, { loader as dataBlockLoader } from './components/infoBlock/InfoBlock';
import { removeUser } from './components/user-list/UsersList';
import InfoItem, {loader as InfoItemLoader} from './components/info-item/InfoItem';
import PhotoAlbum, {loader as PhotoLoader} from './components/photo-album/PhotoAlbum';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: listLoader,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'users/:userId',
        element: <User />,
        loader: loadUser,
        errorElement: <ErrorPage/>,
        children: [
          { index: true, element: <p>здесь будет отображаться раздел</p> },
          ...['albums', 'posts', 'todos'].map(el => {
            return {
              path: `/users/:userId/:type`,
              element: <Block/>,
              loader: dataBlockLoader,
              errorElement: <ErrorPage/>,
            }
          }),
          {
            path: '/users/:userId/:type/:itemId',
            element: <InfoItem/>,
            loader: InfoItemLoader,
            errorElement: <p>ошибка</p>,
          },
          {
            path: '/users/:userId/albums/:itemId/photos',
            element: <PhotoAlbum/>,
            loader: PhotoLoader,
            errorElement: <p>ошибка</p>,
          }
        ]
      },
      {
        path: 'users/:userId/remove',
        element: <h1>removing</h1>,
        action: removeUser,
      },
      
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
