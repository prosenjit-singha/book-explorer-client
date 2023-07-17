import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AllBooksPage from "../pages/AllBooksPage";
import BookPage from "../pages/BookPage";
import MyBooksPage from "../pages/MyBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <AllBooksPage />,
      },
      {
        path: "/my-books",
        element: <MyBooksPage />,
      },
      {
        path: "/books/:bookId",
        element: <BookPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
