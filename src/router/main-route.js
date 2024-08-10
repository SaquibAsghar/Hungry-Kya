import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../components/About-us/AboutUs";
import ContactUs from "../components/Contact-us/ContactUs";
import AppLayout from "../Layout/AppLayout";
import Error from "../components/Error/Error";
import App from "../App";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);
