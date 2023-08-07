import "./App.css";
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Carousels from "./components/Carousels";

function App() {

  return (
    <>
      {/* root div is a flex box containing nav and a div (which contains hero and other stuff), this way the nav is rendered on the left as I want it to  */}
      <Nav/>
      <div class="flex flex-col">
        <Hero/>
        <Carousels/>
      </div>
    </>
  );
}

export default App;
