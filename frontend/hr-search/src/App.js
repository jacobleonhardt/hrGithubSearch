import logo from './logo.svg';
import SearchBar from './components/searchBar';
import Results from './components/results'
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <SearchBar />
        <Results />
      </main>
    </div>
  );
}

export default App;
