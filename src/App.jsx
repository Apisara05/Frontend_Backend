import React from "react";
import { RouterProvider } from "react-router";
import router from "./routes/Router";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
