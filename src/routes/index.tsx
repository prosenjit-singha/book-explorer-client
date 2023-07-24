import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AllBooksPage from "../pages/AllBooksPage";
import BookPage from "../pages/BookPage";
import MyBooksPage from "../pages/MyBooks";
import AddNewBookPage from "../pages/AddBookPage";
import WishlistPage from "../pages/WishlistPage";
import ReadingPage from "../pages/ReadingPage";
import PrivateRoute from "./PrivateRoute";

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

      {
        path: "",
        element: <PrivateRoute />,
        children: [
          {
            path: "/reading",
            element: <ReadingPage />,
          },
          {
            path: "/wishlist",
            element: <WishlistPage />,
          },
          {
            path: "/add-book",
            element: <AddNewBookPage />,
          },
          {
            path: "/my-books",
            element: <MyBooksPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
