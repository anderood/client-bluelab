import { Home } from "./screens/Home";
import { Register } from "./screens/Register";
import { Users } from "./screens/Users";


import GlobalStyle from "./theme/globalStyles";

export function App() {
  return (

    <>
      <GlobalStyle />
      <div style={{ display: "flex"}}>

        <Home />
        <Users></Users>
      </div>
    </>
  );
}