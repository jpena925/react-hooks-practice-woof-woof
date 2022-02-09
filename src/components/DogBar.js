import React from "react";

function DogBar({pups, onHandlePupClick}) {

    function handleClick(pup){
        onHandlePupClick(pup)
    }

    const dogSpans = pups.map(pup => <span key={pup.id} onClick={() => handleClick(pup)}>{pup.name}</span>)

	return (
		<div id="dog-bar">
			{dogSpans}
		</div>
	);
}

export default DogBar;
