import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const ShirtForm = (props) => {
    const {shirt, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor=" color">Color</Form.Label>
                <Form.Control
                    placeholder="What is the shirt's color?"
                    name="color"
                    id="color"
                    value={ shirt.color }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="price">Price</Form.Label>
                <Form.Control
                    placeholder="how much ?"
                    type="number"
                    name="price"
                    id="price"
                    value={ shirt.price }
                    onChange={ handleChange }
                />
                <Form.Check
                    label="Is it graphic?"
                    name="Graphic"
                    defaultChecked={ shirt.graphic  }
                    onChange={ handleChange }
                />
                <Form.Select 
                    aria-label="Shirt description"
                    name="description"
                    defaultValue={shirt.description}
                    onChange={handleChange}
                >
                    <option>Open this select menu</option>
                    <option value="T-shirt">T-shirt</option>
                    <option value="Long sleeve T-shirt">Long sleeve T-shirt</option>
                    <option value="Sweatshirt">Sweatshirt</option>
                    <option value="Hoodie">Hoodie</option>
                </Form.Select>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default ShirtForm