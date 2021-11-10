import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

/** Menu displaying all snacks or drinks
 * 
 * Props: 
 * items - will be an array of objects of either snacks or drinks like: 
 * [{item}, ...]
 * - type - string, either "Snacks" or "Drinks"
 * 
 * Routes -> Menu 
*/

function Menu({ items, type }) {
  console.debug("* Menu", { items, type });

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {type} Menu
          </CardTitle>
          <CardText>
            We offer a selection of {type.toLowerCase()}, made with either love
            or lack of care, depending on our mood.
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${type.toLowerCase()}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
