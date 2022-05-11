import React from "react";
import CardComponent from "./components/Card";
import NavBar from "./components/NavBar";
import tourData from "./data";
export default function App() {
  return (
    <div>
      <NavBar />
      {tourData.map((item) => (
        <CardComponent {...item} />
      ))}
    </div>
  );
}
