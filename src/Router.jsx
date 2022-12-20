import App from "./App";
import Home from "./App/components/Home";
import Play from "./App/components/Play";
import Contact from "./App/components/Contact";
import Resume from "./App/components/Resume";

import {
  createRoutesFromElements,
  createHashRouter,
  Route,
} from "react-router-dom";

export const Router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/play" element={<Play />} />
    </Route>
  )
);
