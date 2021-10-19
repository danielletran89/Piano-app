import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
      <Router>
          {/* <Navigation /> */}
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );

ReactDOM.render(<App />, document.getElementById('root'));