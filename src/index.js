import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./router/routes";
import GlobalStyle from "./global/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainRoutes />
    <GlobalStyle />
  </BrowserRouter>
);
