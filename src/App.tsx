import { Home } from "./screens/Home";
import { Register } from "./screens/Register";
import { Users } from "./screens/Users";
import { Chat } from "./screens/Chat";


import GlobalStyle from "./theme/globalStyles";

export function App() {
  return (
    <>
      <GlobalStyle/>
      <div style={{display: "flex", flexDirection: "row"}}>
        <Home/>
        <Chat/>
      </div>
    </>
  );
}