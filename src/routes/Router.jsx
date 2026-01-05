import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import Layout from "../Layouts/Layout";
import PostDetail from "../pages/PostDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "create-post",
        element: <CreatePost />,
      },
      {
        path: "Post/:id",
        element: <Post />,
      },
      {
        path: "PostDetail/:id",
        element: <PostDetail />,
      },
      {
        path: "edit-post",
        element: <EditPost />,
      },
    ],
  },
]);

export default router;
