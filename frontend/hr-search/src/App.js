import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from './components/searchBar'
import Results from './components/results'
import Error from './components/error'
import Footer from './components/footer'
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
          <SearchBar />
        </div>
        <div id="search-results">
          {results.length ? <h3>Results</h3> :
          <>
            <h3>Go Git 'em!</h3>
            <p>Use the above form to discover GitHub profiles that match your search term.</p>
          </>}
          {results.map(result => {
            if(result.id) {
              return <Results profile={result} key={result.id}/>
            } else if (result.message) {
              return <Error message={result.message}/>
            } else {
              return
            }
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
