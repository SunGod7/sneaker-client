import {
    Form,
    Button,
    Container
} from 'react-bootstrap'
import { getOverlayDirection } from 'react-bootstrap/esm/helpers'

const SneakerForm = (props) => {
    const { sneaker, handleChange, heading, handleSubmit } = props


    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={ handleSubmit }>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                    placeholder="What is your sneaker's name?"
                    name="name"
                    id="name"
                    value={ sneaker.name }
                    onChange={handleChange}
                />
                <Form.Label htmlFor="type">Brand</Form.Label>
                <Form.Control
                    placeholder="What kind of sneaker is this?"
                    name="brand"
                    id="brand"
                    value={sneaker.brand}
                    onChange={handleChange}
                />
                <Form.Label htmlFor="age">Price</Form.Label>
                <Form.Control
                    placeholder="How much is your sneaker?"
                    type="number"
                    name="price"
                    id="price"
                    value={sneaker.price}
                    onChange={handleChange}
                />
                <Form.Check
                    label="Is this sneaker Drip?"
                    name="highFashion"
                    defaultChecked={sneaker.highFashion}
                    onChange={handleChange}
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default SneakerForm