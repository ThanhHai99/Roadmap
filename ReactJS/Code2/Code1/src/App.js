import logo from './logo.svg';
import './App.css';
import ColorBox from "./components/ColorBox/index";
import CountDown from "./components/CountDown/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountDown seconds={30} />

        <ColorBox color="deeppink" />
        <ColorBox color="green" />
      </header>
    </div>
  );
}

export default App;
