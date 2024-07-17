import './App.css';
import InputMessage from './feature/message/inputMessage';
import ListMessage from './feature/message/listMessage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Message App</hjson>
        <InputMessage />
        <ListMessage />
      </header>
    </div>
  );
}

export default App;
