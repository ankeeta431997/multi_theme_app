import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeDropdown: React.FC = () => {
  const { setThemeByName } = useTheme();

  return React.createElement(
    "select",
    {
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
        setThemeByName(e.target.value),
      defaultValue: "theme1",
    },
    [
      React.createElement("option", { key: "t1", value: "theme1" }, "Theme 1"),
      React.createElement("option", { key: "t2", value: "theme2" }, "Theme 2"),
      React.createElement("option", { key: "t3", value: "theme3" }, "Theme 3"),
    ]
  );
};

export default ThemeDropdown;
