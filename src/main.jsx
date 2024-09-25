import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProfileProvider } from "./components/UserProfileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProfileProvider>
      <App />
    </UserProfileProvider>
  </BrowserRouter>
);