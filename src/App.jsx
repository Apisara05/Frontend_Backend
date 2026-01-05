import React from "react";
import { RouterProvider } from "react-router";
import router from "./routes/Router";
import Navbar from "./components/Navbar";
import EditPost from "./pages/EditPost";
const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Route path="/edit-post" element={<EditPost />} />
      <Route path="/edit-post/:id" element={<EditPost />} />
    </>
  );
};

export default App;
