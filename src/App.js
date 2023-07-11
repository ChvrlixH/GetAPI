import "./App.css";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Service from "./components/Service/Service";
// import Roadmap from "./components/Roadmap/Roadmap";
// import Team from "./components/Team/Team";
// import Contact from "./components/Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/route";
const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
