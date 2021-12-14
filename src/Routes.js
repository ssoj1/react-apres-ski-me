import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import ItemDetailCard from "./ItemDetailCard";
import AddItemForm from "./AddItemForm";


/** Site-wide routes.
 *
 * Visiting a non-existent snack or drink reroutes to the /snacks or /drinks
 * page, respectively. 
 * Visiting a non-existent route redirects to the homepage.
 * 
 * Props: 
 * - snacks - array of objects like: [{snack}, ...]
 * - drinks - array of objects like: [{drink}, ...]
 * - addItem - a function run on the parent that adds an item to the API and 
 * snacks or drinks array, depending on type
 * 
 * State: 
 * - none
 * 
 * App -> Routes -> { Home, Menu, ItemDetailCard, AddItemForm }
 */

function Routes({ snacks, drinks, addItem }) {
  console.debug("* Routes", { snacks, drinks, addItem });

  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/">
            <Home snacks={snacks} drinks={drinks} />
              </Route>

              <Route exact path="/snacks">
                <Menu items={snacks} type="Snacks" />
              </Route>

              <Route exact path="/snacks/:id">
                <ItemDetailCard items={snacks} cantFind="/snacks" />
              </Route>

              <Route exact path="/drinks">
                <Menu items={drinks} type="Drinks" />
              </Route>

              <Route exact path="/drinks/:id">
                <ItemDetailCard items={drinks} cantFind="/drinks" />
              </Route>

              <Route exact path="/additem">
                <AddItemForm addItem={addItem} />
              </Route>

              <Route>
                <p>
                Hmmm.I can't seem to find that page.
                </p>
              </Route>
        </Switch>
      </main>
    </div>
    );
}

export default Routes;
