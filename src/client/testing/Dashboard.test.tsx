import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";


import Dashboard from "../../pages/dashboard";
const posts=[{"id":"0","author":"Alejandro Escamilla","width":5616,"height":3744,"url":"https://unsplash.com/photos/yC-Yzbqy7PY","download_url":"https://picsum.photos/id/0/5616/3744"}]
it("render without crashing Dashboardspage", () => {
  render(
    <BrowserRouter>
    <Dashboard posts={posts}/>
   </BrowserRouter>
  );
});