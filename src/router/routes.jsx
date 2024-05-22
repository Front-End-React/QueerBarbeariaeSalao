import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

import Home from "../pages/Home";

export default function MainRoutes() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="*" element={<p>Nada aqui!</p>} />
      <Route element={<PrivateRoutes />}>
        <Route exact path="/feed" element={<h1>Logado</h1>}></Route>
      </Route>
    </Routes>
  );
}
