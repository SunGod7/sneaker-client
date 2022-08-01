import { 
    Form,
    Button, 
} from 'react-bootstrap'

const SneakerForm = (props) => {
    const { sneaker, handleChange } = props
    return (
        <Form>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
                placeholder="What is your sneaker's name?"
                name="name"
                id="name"
                value={ sneaker.name }
                onChange={ handleChange }
            />
            <Form.Label htmlFor="type">Brand</Form.Label>
            <Form.Control
                placeholder="What kind of sneaker is this?"
                name="brand"
                id="brand"
                value={ sneaker.brand }
                onChange={ handleChange }
            />
            <Form.Label htmlFor="age">Price</Form.Label>
            <Form.Control
                placeholder="How much is your sneaker?"
                type="number"
                name="price"
                id="price"
                value={ sneaker.price }
                onChange={ handleChange }
            />
            <Form.Check
                label="Is this sneaker Drip?"
                name="highFashion"
                defaultChecked={ sneaker.highFashion  }
                onChange={ handleChange }
            />
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default SneakerForm