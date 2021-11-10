import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';
import "./AddItemForm.css";

const defaultInitialFormData = {
    type: "snacks",
    name: "",
    description: "",
    recipe: "",
    serve: "",
};

/** Form for adding a menu item.
 * 
 * Props: 
 * - initialFormData
 * - addItem - a function run on the parent that adds an item to the API and 
 * snacks or drinks array, depending on type
 * 
 * State: 
 * - none
 * 
 * Routes -> AddItemForm
 */

function AddItemForm({ initialFormData = defaultInitialFormData, addItem }) {
    console.debug("* AddItemForm ", { initialFormData, addItem });

    const [formData, setFormData] = useState(initialFormData);

    /** Update form input. */
    function handleChange(evt) {
        const input = evt.target;
        setFormData(formData => ({
            ...formData,
            [input.name]: input.value,
        }));
    }

    /** Call parent function and clear form. */
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log("Submitted form data -->", formData);

        addItem(formData);
        setFormData(initialFormData);
    }

    return (
        <Card>
            <CardBody>
                <Form className="NewAddItemForm" onSubmit={handleSubmit}>

                    <FormGroup>
                        <Label
                            for="NewAddItemForm-type">
                                Is this a Snack or Drink (pick one)?
                        </Label>
                        <Input
                            type="select"
                            name="type"
                            id="NewAddItemForm-type"
                            value={formData.type}
                            onChange={handleChange}
                        >
                            <option value="snacks">Snack</option>
                            <option value="drinks">Drink</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label
                            for="NewAddItemForm-name">Name
                        </Label>
                        <Input
                            name="name"
                            id="NewAddItemForm-name"
                            onChange={handleChange}
                            value={formData.name}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label
                            for="NewAddItemForm-description">Description
                        </Label>

                        <Input
                            name="description"
                            id="NewAddItemForm-description"
                            onChange={handleChange}
                            value={formData.description}
                            required
                        />

                    </FormGroup>

                    <FormGroup>
                        <Label
                            for="NewAddItemForm-recipe">Recipe
                        </Label>

                        <Input
                            name="recipe"
                            id="NewAddItemForm-recipe"
                            onChange={handleChange}
                            value={formData.recipe}
                            required
                        />

                    </FormGroup>

                    <FormGroup>
                        <Label
                            for="NewAddItemForm-serve">Serve
                        </Label>

                        <Input
                            name="serve"
                            id="NewAddItemForm-serve"
                            onChange={handleChange}
                            value={formData.serve}
                            required
                        />
                    </FormGroup>

                    <Button className="NewAddItemForm-addBtn">
                        Add!
                    </Button>

                </Form>
            </CardBody>
        </Card>
    );
}

export default AddItemForm;