import React, { createContext, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import { FaReact } from "react-icons/fa";
import { Helmet } from "react-helmet";
import image from ".././public/monsoon.jpg";
export const ThemeContext = createContext<any>(null);
const App = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/education",
      element: <Education />,
    },

    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <>
      <Helmet>
        <title>Monsoon</title>
        <link rel="icon" type="image/svg+xml" href={image} />

        <meta name="description" content="This is a description" />
      </Helmet>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
