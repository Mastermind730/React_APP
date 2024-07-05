import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import FormPage from "./pages/FormPage";
import SecondPage from "./pages/DataPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/data_page" element={<SecondPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
