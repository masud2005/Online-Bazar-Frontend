import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/pages/errorPage/ErrorPage";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                Component: Home
            }
        ]
    },
]);

export default router;