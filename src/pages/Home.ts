import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./Home.module.css"; 

const Home: React.FC = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const isCardsLayout = theme.layout === "cards";

  return React.createElement(
    "div",
    {
      className: `${styles.container} ${
        theme.layout === "sidebar" ? styles.sidebar : ""
      }`,
    },
    [
      React.createElement(
        "h1",
        {
          key: "title",
          className: `${styles.title} ${
            theme.layout === "sidebar" ? styles.titleSidebar : ""
          }`,
        },
        "Welcome to Multi-Theme App"
      ),

      React.createElement(
        "p",
        {
          key: "para",
          className: `${styles.para} ${
            theme.name === "theme3" ? styles.paraTheme3 : ""
          }`,
        },
        "This is a sample paragraph. Each theme has a unique layout, font, and spacing."
      ),

      React.createElement(
        "button",
        {
          key: "button",
          className: `${styles.button} ${
            isCardsLayout ? styles.buttonCards : ""
          }`,
          style: { background: theme.buttonBg }, 
        },
        "Click Me"
      ),

      React.createElement(
        "div",
        {
          key: "grid",
          className: `${styles.grid} ${
            isCardsLayout ? styles.gridCards : ""
          }`,
        },
        products.slice(0, 6).map((p) =>
          React.createElement(
            "div",
            {
              key: p.id,
              className: `${styles.card} ${
                isCardsLayout ? styles.cardCards : ""
              }`,
            },
            [
              React.createElement("img", {
                key: "img",
                src: p.image,
                width: 120,
                height: 120,
                className: styles.image,
              }),
              React.createElement(
                "h4",
                { key: "title", className: styles.productTitle },
                p.title
              ),
            ]
          )
        )
      ),
    ]
  );
};

export default Home;
