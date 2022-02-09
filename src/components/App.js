import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";
import MainContent from "./MainContent";

const URL = "http://localhost:3001/pups";

function App() {
	const [pups, setPups] = useState([]);
  const [displayPup, setDisplayPup] = useState({})
  const [showGood, setShowGood] = useState(false)
  const [goodPups, setGoodPups] = useState([])
  

	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then(setPups);
	}, []);

  function handlePupClick(pup){
    setDisplayPup((displayPup) => pup)
  }

  function handleGoodBoyClick(pup){
    fetch(`http://localhost:3001/pups/${pup.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...pup, isGoodDog: !pup.isGoodDog})
    })
    .then(res => res.json())
    .then(data => {
      setDisplayPup(() => data)
      setPups((pups) => [...pups].map(elem => elem.id === data.id ? data : elem))})
  }
  

  function handleDogFilter(){
    setShowGood((showGood) => !showGood)
    if(!showGood){
    setGoodPups((goodPups) => [...pups].filter(pup => pup.isGoodDog === true))
    } else {
      setGoodPups((goodPups) => [])
    }
  }
  
	return (
		<div className="App">
			<div id="filter-div">
				<button id="good-dog-filter" onClick={handleDogFilter}>Filter good dogs: {showGood ? 'ON' : 'OFF'}</button>
			</div>
			<DogBar pups={goodPups.length > 0 ? goodPups : pups} onHandlePupClick={handlePupClick} />
			<div id="dog-summary-container">
				<h1>DOGGO:</h1>
				<MainContent displayPup={displayPup} handleGoodOrBadClick={handleGoodBoyClick}/>
			</div>
		</div>
	);
}

export default App;
