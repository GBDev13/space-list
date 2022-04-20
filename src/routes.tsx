
import {
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./pages/Home";

export function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
} 