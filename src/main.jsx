import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Statistics from './components/Statistics/Statistics'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Blog from "./components/Blog/Blog";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";
import Category1 from "./components/Category1/Category1";
import Main from "./components/Main/Main";
import FeatureDetails from "./components/FeatureDetails/FeatureDetails";
import Feature from "./components/Feature/Feature";
import loader from "./components/loader";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
      children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('category.json'),
      },
      {
        path: "/statistic",
        element: <Statistics></Statistics>,
      },
      {
        path: "/category1",
        element: <Category1></Category1>,
      },
      {
        path: "/features",
        element: <FeaturedJobs></FeaturedJobs>,
      },
      {
        path: "/item/:featureId",
        element: <FeatureDetails></FeatureDetails>,
        loader:({params})=>fetch(`/feature.json`),
      },
      {
        path: "/applied_job",
        element: <AppliedJobs></AppliedJobs>,
        loader:({params})=>fetch(`/feature.json`),
        // loader: loader,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
