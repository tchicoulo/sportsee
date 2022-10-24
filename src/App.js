import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
