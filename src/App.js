import './App.css';
import MyRGBPanel from './components/rgb-panel/MyRGBPanel';
import MyCalculator from './components/calculator/MyCalculator';
import TicTacToe from './components/tic-tac-toe/TicTacToe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React! 2024.05.09</h1>
        <h2>MyRGBPanel</h2>
        <MyRGBPanel />
        <h2>MyCalculator</h2>
        <MyCalculator />
        <h1>Tic-Tac-Toe Game</h1>
        <TicTacToe />
      </header>
    </div>
  );
}

export default App;
