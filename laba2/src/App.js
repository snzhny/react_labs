import React from "react";
import ReactDOM from "react-dom";
import { Clock } from "./Clock.js";
import { SelectJob } from "./JobMenu.js";
function App() {
  return (
    <>
      <Clock />
      <Clock format="12" timezone="+4:00" />
      <Clock format="24" timezone="-1:30" />
      <Clock timezone="+2:30" />
      <Clock format="12" />
      <SelectJob />
    </>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
