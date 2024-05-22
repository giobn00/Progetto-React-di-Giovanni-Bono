import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RecipeList from './routes/RecipeList.jsx';
import RecipeDetail from './routes/RecipeDetail.jsx';
import Search from './routes/Serch.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Search />,
      },
      {
        path: "recipe-list",
        element: <RecipeList />
      },
      {
        path: "recipe-detail/:recepeid",
        element: <RecipeDetail />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)