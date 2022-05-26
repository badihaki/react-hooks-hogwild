import React, {useState} from "react";
import Nav from "./Nav";
import PorkerTile from "./PorkerTile";
import Filter from "./Filter";
import Sort from "./Sort";

import hogs from "../porkers_data";
// import { useState } from "react/cjs/react.production.min";

function App() {
	const [filter,setFilter] = useState(false);
	const [sortName,setSortName] = useState(false);
	const [sortWeight,setSortWeight] = useState(false);
	
	const greasedHogs = hogs.filter( (hog) =>{
		return hog.greased === true;
	})
	
	// these are the base tiles the hogs will go into
	const tiles = hogs.map( (hog) =>{
		return <PorkerTile key={hog.name.slice(0,5)} hog={hog} />
	})
	const filteredTiles = greasedHogs.map( (hog) =>{
		return <PorkerTile key={hog.name.slice(0,5)} hog={hog} />
	})

	const displayTiles = function(){
		console.log('filter');
		console.log(filter);
		console.log('sort name');
		console.log(sortName);
		console.log('sort weight');
		console.log(sortWeight);
		if(filter === true){
			return filteredTiles;
		}
		else if (sortName === true){
			return hogs.sort(function(hogA,hogB){
				if (hogA.name[0] < hogB.name[0]) return -1;
				else if (hogA.name[0] > hogB.name[0]) return 1;
				else if (hogA.name[0] === hogB.name[0]){
					if (hogA.name[1] < hogB.name[1]) return -1;
					else if (hogA.name[1] > hogB.name[1]) return 1;
				}
				return 0;
			}).map( (hog) =>{
				return <PorkerTile key={hog.name.slice(0,5)} hog={hog} />
			})
			}
		else if (sortWeight === true){
			return hogs.sort(function(hogA,hogB){return hogA.weight - hogB.weight}).map( (hog) =>{
				return <PorkerTile key={hog.name.slice(0,5)} hog={hog} />
			})
		}
		else return tiles;
	}

	function handleFilterClick(){
		setFilter(!filter);
	}

	function handleSortName(){
		setSortName(!sortName);
		console.log(`changed sortName from ${sortName}`);
	}

	function handleSortWeight(){
		setSortWeight(!sortWeight);
		console.log(`changed sortName from ${sortWeight}`);
	}

	return (
		<div className="App">
			<Nav />
			<Filter filterClick={handleFilterClick} filterState={filter}/>
			<Sort nameClick={handleSortName} weightClick={handleSortWeight} nameState={sortName} weightState={sortWeight}/>
			<ul className="ui grid container">{displayTiles()}</ul>
		</div>
	);
}

export default App;
