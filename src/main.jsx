import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { UserContextProvider } from "./context/UserContextProvider.jsx"; //มีหน้าที่ กำหนดขอบเขต ว่า component ไหนใช้ได้บ้าง
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);
