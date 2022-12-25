import React from "react"; // Importing the React library
import ReactDOM from "react-dom"; // Importing the ReactDOM library
import "normalize.css"; // Importing normalize.css to reset browser styles
import "./index.css"; // Importing the custom styles for the app
import App from "./App"; // Importing the App component
import { AppProvider } from "./context/appContext"; // Importing the AppProvider component from the appContext file

ReactDOM.render(
  // Rendering the AppProvider component and wrapping it around the App component
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  // Rendering the app in the element with the ID "root"
  document.getElementById("root")
);
