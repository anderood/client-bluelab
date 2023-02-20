import { Home } from "./screens/Home";
import { Register } from "./screens/Register";

export function App() {
  return (
    <div style={{display: "flex"}}>
      <Home />
      <Register />
    </div>
  );
}