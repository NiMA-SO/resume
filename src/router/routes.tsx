import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Certificates from "../pages/Certificates";
import Contact from "../pages/Contact";
import CertificatesModal from "../components/Certificates/CertificatesModal";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <ErrorPage/>,
      children: [
        { index: true, element: <Home /> },
        { path: "/AboutMe", element: <AboutMe /> },
        { path: "/Skills", element: <Skills /> },
        { path: "/Projects", element: <Projects /> },
        { path: "/Certificates", element: <Certificates /> },
        { path: "/Certificates/:name", element: <CertificatesModal /> },
        { path: "/Contact", element: <Contact /> },
      ],
    },
  ]);
  
  export default router;
  