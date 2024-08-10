import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../components/About-us/AboutUs";
import ContactUs from "../components/Contact-us/ContactUs";
import AppLayout from "../Layout/AppLayout";

export const rootRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
]);



