import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter as Router} from "react-router-dom"

ReactDom.createRoot(document.querySelector("#app")).render(
        <Router>
                <App />
        </Router>
)