import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./features/store.js";
import "react-loading-skeleton/dist/skeleton.css";
import Resume1 from "./Resume1.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <Resume1 data={data}/>
  </Provider>,
);
