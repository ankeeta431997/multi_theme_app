import React from "react";
import { Link } from "react-router-dom";
import ThemeDropdown from "./ThemeDropdown";
import { useTheme } from "../context/ThemeContext";
import "./Header.css";

const Header: React.FC = () => {
  const { theme } = useTheme();
  const isSidebar = theme.layout === "sidebar";

  const headerClass = `header ${isSidebar ? "sidebar" : ""}`;
  const navClass = `header-nav ${isSidebar ? "sidebar" : ""}`;
  const themeClass = theme.name; // e.g., 'theme1', 'theme2', etc.

  return React.createElement(
    "div",
    { className: themeClass },
    React.createElement(
      "header",
      { className: headerClass },
      [
        React.createElement(
          "h2",
          {
            key: "title",
            className: "header-title",
          },
          "🌐 My App"
        ),
        React.createElement(
          "nav",
          {
            key: "nav",
            className: navClass,
          },
          [
            React.createElement(
              Link,
              { key: "home", to: "/", className: "header-link" },
              "Home"
            ),
            React.createElement(
              Link,
              { key: "about", to: "/about", className: "header-link" },
              "About"
            ),
            React.createElement(
              Link,
              { key: "contact", to: "/contact", className: "header-link" },
              "Contact"
            ),
            React.createElement(ThemeDropdown, { key: "dropdown" }),
          ]
        )
      ]
    )
  );
};

export default Header;
