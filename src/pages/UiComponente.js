import { useNavigate } from "react-router-dom";

import Gallery from "./uicomponentes/Gallery";
import { Profile } from "./uicomponentes/Gallery";
import TodoList from "./uicomponentes/Mark";
import Avatar from "./uicomponentes/Keys";
import ProfileProps from "./uicomponentes/Props";
import Profile2 from "./uicomponentes/utils";
import PackingList from "./uicomponentes/PackingList";
import List from "./uicomponentes/Arrays";
import App from "./uicomponentes/Pure";
import TeaSet from "./uicomponentes/Pure2";
import TeaGathering from "./uicomponentes/Pure3";

export default function UiComponente() {
  const navegar = useNavigate();

  return (
    <>
      <h1>ATIVIDADE 03</h1>

      <Gallery />
      <br />
      <Profile />
      <br />
      <TodoList />
      <br />
      <Avatar />
      <br />
      <ProfileProps />
      <br />
      <Profile2/>
      <br />
      <PackingList/>
      <br />
      <List/>
      <br />
      <App />
      <br />
      <TeaSet />
      <br />
      <TeaGathering/>

      <br /><br />
      <button onClick={() => navegar("/")}>Voltar</button>
    </>
  );
}
