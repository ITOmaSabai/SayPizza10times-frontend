import logo from './logo.svg';
// import './App.css';
import { HeroLayout } from './components/layouts/HeroLayout';
import QuizGame from './components/layouts/GameLayout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuizGame />
      </header>
    </div>
  );
}

export default App;
