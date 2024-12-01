import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DetailProject from "./pages/DetailProject";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "/DetailProject",
        element: <DetailProject />
    }
]);

export const DeclaredRouter = () => {
    return <RouterProvider router={router} />
}