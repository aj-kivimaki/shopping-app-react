import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home";
import Root from "./routes/Root";
import About from "./routes/About";
import Product from "./routes/Product";
import Products from "./routes/Products";
import Cart from "./routes/Cart";
import NotFound404 from "./routes/NotFound404";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "*",
          element: <NotFound404 />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
