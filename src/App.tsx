import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useTheme } from "./context/ThemeContext";

const App: React.FC = () => {
  const { theme } = useTheme();

  const getMainStyle = () => {
    return {
      paddingTop: theme.layout === "sidebar" ? "0px" : "20px",
      marginLeft: theme.layout === "sidebar" ? "220px" : "0px", // ✅ Sidebar space
      transition: "all 0.3s ease-in-out",
    };
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header),
    React.createElement(
      "main",
      { style: getMainStyle() }, 
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: "/", element: React.createElement(Home) }),
        React.createElement(Route, { path: "/about", element: React.createElement(About) }),
        React.createElement(Route, { path: "/contact", element: React.createElement(Contact) })
      )
    )
  );
};

export default App;
