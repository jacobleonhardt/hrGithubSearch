import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import SearchBar from './components/searchBar';
import Results from './components/results'
import { initialContent } from './store/session'
import './App.css';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialContent())
  }, [])

  const results = useSelector(state => state.results)

  return (
    <div className="App">
      <main className="content">
        <div id="greeting">
          <h1>Git the Right Guy</h1>
          <h2>Human Resource Portal for Github Applicants</h2>
        </div>
        <SearchBar />
        {results.map(result => {
          return <Results profile={result}/>
        })}
      </main>
    </div>
  );
}

export default App;
