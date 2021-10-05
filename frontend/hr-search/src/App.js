import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from './components/searchBar'
import Results from './components/results'
import Error from './components/error'
import Footer from './components/footer'
import { initialContent } from './store/session'
import './App.css';

function App() {
  const dispatch = useDispatch()
  const [directions, setDirections] = useState(true)

  useEffect(() => {
    dispatch(initialContent())
  }, [])

  const results = useSelector(state => state.results)

  return (
    <div className="App">
      <main className="content">
        <div id="greeting">
          <h1>Git the Right Guy</h1>
          <h2>Human Resource Portal for GitHub Applicants</h2>
          <SearchBar setDirections={setDirections}/>
        </div>
        <div id="search-results">
          <h3>Results</h3>
          {directions ? <p>Use the above form to discover GitHub profiles that
            match your search term. The top results will be displayed below, maxing
            out at ten.</p> : <></>}
          {results.length ? results.map(result => {
            if(result.id) {
              return <Results profile={result} key={result.id}/>
            } else if (result.message) {
              return <Error message={result.message} />
            } else {
              return
            }
          }) : <Error message={"Whoops... didn't find a match to that search term."}/>}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
