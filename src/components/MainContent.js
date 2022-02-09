import React from "react";

function MainContent({ displayPup, handleGoodOrBadClick }) {

    function handleTypeClick(){
        handleGoodOrBadClick(displayPup)
    }
    console.log('render Main Content')
	return (
		<div id="dog-info">
			<img src={displayPup.image} alt={displayPup.name} />
			<h2>{displayPup.name}</h2>
			{displayPup.isGoodDog !== undefined ? (
				<button onClick={handleTypeClick}>{displayPup.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
			) : null}
		</div>
	);
}

export default MainContent;
