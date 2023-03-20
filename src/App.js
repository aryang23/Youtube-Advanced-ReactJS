import "./App.css";
import Head from "./Components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import Body from "./Components/Body";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import SearchPage from "./Components/SearchPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Head />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
