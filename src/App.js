import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Statistique from "./Statistique";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <p>
          Bienvenue ! Cette application vous aide a trouver votre ligne de bus a
          Dakar.
        </p>
        <Statistique />
        <Statistique />
        <Statistique />
      </main>
      <Footer />
    </div>
  );
}

export default App;
