import * as React from "react";
import * as ReactDOM from "react-dom/client";
import NewMeeting from "./pages/NewMeeting";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CheckCalendar from "./pages/CheckCalendar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CheckCalendar/>,
    },
  ]);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  // return (
  //   <BrowserRouter basename='/app'>
  //       <Routes>
  //         <Route path="/" component={CheckCalendar} />
  //         <Route path="/addNewMeeting" />
  //       </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
