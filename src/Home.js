import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

/** Homepage of site. 
 * 
 * States how many drinks and snacks are offered. 
 * 
 * Props: 
 * - snacks - array of objects like: [{snack}, ...]
 * - drinks - array of objects like: [{drink}, ...]
 * 
 * State: 
 * - none
 * 
 * Routes -> Home
 * 
 */
function Home({ snacks, drinks }) {
  console.log("* Home", { snacks, drinks });

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Tahoe's loudest warming hut!
            </h3>
            <p>We have {snacks.length} snacks
              and {drinks.length} drinks to choose from.
            </p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
