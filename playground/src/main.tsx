import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => <div>hello 1231235</div>;

ReactDOM.render(<App />, document.getElementById("root"));

// @ts-ignore
import.meta.hot.accept(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
