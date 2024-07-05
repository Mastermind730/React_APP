import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import FormPage from "./pages/FormPage";
import SecondPage from "./pages/DataPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: (<FormPage></FormPage>),
  },
  {
    path: "/data_page",
    element: <SecondPage></SecondPage>
  },

]);


const App: React.FC = () => {
  return (
    <div className="App">
       <RouterProvider router={router} />
       
    </div>
  );
};

export default App;
