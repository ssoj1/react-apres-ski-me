import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AprèsSkiMeApi from "./Api";
import NavBar from "./NavBar";
import Routes from "./Routes";



/** Après-Ski-Me Application.
 * 
 * Props: 
 * - none
 * 
 * State: 
 * - isLoading - boolean
 * - snacks - array of objects like: [{snack}, ...]
 * - drinks - array of objects like: [{drink}, ...]
 * 
 * App > { NavBar, Routes }
 */

function App() {
  console.debug("* App");

  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // Loads snacks and drinks from the API. Run on initial load.
  useEffect(function getMenuItems() {
    async function getAllItems() {
      let snacks = await AprèsSkiMeApi.getSnacks();
      let drinks = await AprèsSkiMeApi.getDrinks();
  
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getAllItems();
  }, []);

  /** Receives form submission as an object like: 
   * { type, name, description, recipe, serve}
   * 
   * Adds item to the API, receives back an item object like :
   * { id, name, description, receipe, serve }
   * 
   * Adds to the current list of snacks or drinks, based on type
   */
  async function addItem(newItem) {
    let item = await AprèsSkiMeApi.addItem(newItem);

    if (newItem.type === "snacks") {
      setSnacks(currSnacks => [...currSnacks, item]);
    }
    else if (newItem.type === "drinks") {
      setDrinks(currDrinks => [...currDrinks, item]);
    };

  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes snacks={snacks} drinks={drinks} addItem={addItem} />
      </div>
    </BrowserRouter>
  );
}

export default App;
