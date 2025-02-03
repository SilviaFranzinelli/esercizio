import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import Immagine from "./components/Immagine";

function App() {
  return (
    <>
      <ButtonComponent className="button" buttonText="aggiungi" />
      <Immagine src="https://picsum.photos/200/300" alt="img"/>
    </>

  );
}

export default App;
