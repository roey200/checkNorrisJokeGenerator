import React, {useState, useEffect} from 'react'

const API_URL = 'https://api.icndb.com/jokes/random'

function App() {
  const [joke, setJoke] = useState('')

  const generateJoke = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setJoke(data.value.joke))
   }

  useEffect(() => {
    generateJoke()
  }, [])

  return (
    <div className="box">
    <h3>Chuck Norris jokes</h3>
    <p dangerouslySetInnerHTML={{__html: joke }}/>
    <button onClick={generateJoke}>Roundhouse Kick joke </button>
     
    </div>
  );
}

export default App;
