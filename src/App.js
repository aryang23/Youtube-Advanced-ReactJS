import "./App.css";
import Head from "./Components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import Body from "./Components/Body";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head/>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
