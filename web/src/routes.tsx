import {createBrowserRouter} from "react-router";
import {Home} from "./pages/Home";
import {NewTask} from "./pages/NewTask";

export const routes = createBrowserRouter([
  {
    path: "/new",
    element: <NewTask />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
