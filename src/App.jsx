import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Root from "./componenet/Root";
import Error from "./pages/Error";
import Footer from "./pages/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Service", element: <Service /> },
      { path: "/Footer", element: <Footer /> },
      { path: "/Error", element: <Error /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Route element={<Error />} />
      </RouterProvider>
    </div>
  );
}

export default App;
