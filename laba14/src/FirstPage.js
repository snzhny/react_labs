import React from "react";
import { SortTable } from "./SortTable";

function FirstPage() {
  return (
    <>
      <h1>first page</h1>
      <h2>My fio</h2>
      <h2>{new Date().toLocaleDateString()}</h2>
      <SortTable />
    </>
  );
}

export default FirstPage;
