import './App.css';
import InputMessage from './feature/message/inputMessage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputMessage />
        <ListMessage />
      </header>
    </div>
  );
}

export default App;
