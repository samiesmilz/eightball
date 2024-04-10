import "./App.css";
import Header from "./components/Header";
import EightBall from "./components/EightBall";
import answer from "./components/Answer";

function App() {
  return (
    <div className="App">
      <Header />
      <EightBall answers={answer} />
    </div>
  );
}

export default App;
